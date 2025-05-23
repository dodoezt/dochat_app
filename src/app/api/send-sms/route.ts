import { NextResponse } from 'next/server';
import { Client, ID, Messaging } from 'node-appwrite';

// Inisialisasi Appwrite Client
const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!) // ganti jika pakai self-hosted
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)
  .setKey(process.env.NEXT_PUBLIC_APPWRITE_API_KEY!); // Simpan aman di .env.local

const messaging = new Messaging(client);

// Fungsi untuk generate OTP 6 digit
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

export async function POST(req: Request) {
  const body = await req.json();
  const { phoneNumber } = body;

  if (!phoneNumber) {
    return NextResponse.json({ error: 'phoneNumber wajib diisi' }, { status: 400 });
  }

  const otp = generateOTP();

  try {
    const response = await messaging.create({
      channelId: process.env.APPWRITE_SMS_CHANNEL_ID, // ganti di .env.local
      to: [phoneNumber],
      content: `Kode OTP kamu adalah: ${otp}`,
    });

    // Di sini kamu bisa simpan OTP ke DB/session/redis dsb untuk verifikasi nanti
    console.log("OTP:", otp); // Hanya untuk demo, hapus di production

    return NextResponse.json({ message: 'OTP berhasil dikirim', otp: otp }); // Untuk debug, hapus otp di production
  } catch (error) {
    console.error('Gagal kirim OTP:', error);
    return NextResponse.json({ error: 'Gagal mengirim OTP' }, { status: 500 });
  }
}
