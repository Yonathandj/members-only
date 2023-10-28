import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import RoomChatBox from "../RoomChatBox/RoomChatBox";

export default function RoomChat({
  message,
  handleMessage,
  setSelectRoom,
  handleSubmitMessage,
}) {
  return (
    <div className="flex flex-col">
      <ArrowLeftCircleIcon
        className="ml-40 mt-10 w-10 cursor-pointer"
        onClick={() => setSelectRoom({ isSelected: false, roomId: "" })}
      />
      <RoomChatBox
        message={message}
        handleMessage={handleMessage}
        handleSubmitMessage={handleSubmitMessage}
      />
    </div>
  );
}
