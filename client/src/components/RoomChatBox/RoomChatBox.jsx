import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

export default function RoomChatBox({
  message,
  handleMessage,
  handleSubmitMessage,
}) {
  return (
    <div>
      <section className="mx-auto max-w-[60%] bg-slate-100 p-2">Love</section>
      <form className="relative mx-auto mt-4 flex max-w-[60%] items-center justify-center">
        <input
          type="text"
          className="w-full border p-2"
          placeholder="Enter your message"
          value={message}
          onChange={handleMessage}
        />
        <button
          type="submit"
          className="absolute right-4 top-2"
          onClick={handleSubmitMessage}
        >
          <PaperAirplaneIcon className="w-6" />
        </button>
      </form>
    </div>
  );
}
