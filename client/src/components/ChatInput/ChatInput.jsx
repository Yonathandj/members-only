import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

export default function ChatInput() {
  return (
    <form className="relative mt-2 text-slate-100">
      <input
        required
        type="text"
        placeholder="Share your thoughts"
        className="w-full rounded-sm bg-gradient-to-r from-purple-600 to-pink-600 p-2 outline-none placeholder:text-slate-300"
      />
      <button type="submit">
        <PaperAirplaneIcon className="absolute right-4 top-2 w-6" />
      </button>
    </form>
  );
}
