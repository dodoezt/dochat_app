import { GoogleAuthProvider } from "../children/googleAuthcContext";

export const AuthProvider = ({ children, provider }: {children : any, provider: 'google' | 'whatsapp' | null}) => {
    if (provider === 'google') return <GoogleAuthProvider>{children}</GoogleAuthProvider>;
    if (provider === null) return <>{children}</>;
}