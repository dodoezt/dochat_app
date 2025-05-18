import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken'

const SECRET_KEY = process.env.JWT_SECRET || 'secret';

function verifyToken(token: string) {
  try {
    const payload = jwt.verify(token, SECRET_KEY);
    return { valid: true, payload };
  } catch (err) {
    return { valid: false, error: err };
  }
}

export async function middleware(req: any) {
    const token = req.cookies.get('log-session')?.value || null;
    
    const isValid = verifyToken(token).valid

    const response = NextResponse.next()
    
    response.cookies.set('is-logged', isValid? 'true' : 'false', {
        path: '/'
    })

    return response
}