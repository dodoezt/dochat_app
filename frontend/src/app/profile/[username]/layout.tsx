
export async function generateMetadata({ params }: any) {
  return {
    title: `Profile | ${params.username}`,
  }
}

export default function Layout({children}: Readonly<{children: React.ReactNode}>) {
    return children;
}