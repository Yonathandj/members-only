import { AtSymbolIcon } from "@heroicons/react/24/outline";
import ChatInput from "../ChatInput/ChatInput";

export default function ChatList() {
  return (
    <div className="flex h-[480px] flex-col justify-between rounded-2xl bg-[url('../../../public/chat-background.jpg')] p-4 text-slate-100">
      <section className="flex items-center gap-2">
        <AtSymbolIcon className="w-6" />
        <h2 className="text-lg">Programming Room</h2>
      </section>
      <section>
        <ChatInput />
      </section>
    </div>
  );
}
