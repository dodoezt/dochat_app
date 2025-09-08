import { ChatProvider } from '@/components/contexts/children/chatContext';

export default function ChatLayout({ children }: { children: React.ReactNode }) {
  return (
    <ChatProvider>
      <div className="">
        {children}
      </div>
    </ChatProvider>
  );
}