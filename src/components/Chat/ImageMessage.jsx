import React, { useState } from "react";
import { HOST } from "@/utils/ApiRoutes";
import { calculateTime } from "@/utils/CalculateTime";
import Image from "next/image";
import MessageStatus from "../common/MessageStatus";
import ZoomedImage from "./ZoomedImage"; 
import { useStaetProvider } from "@/context/StateContext";

function ImageMessage({ message }) {
  const [{ currentChatUser, userInfo }] = useStaetProvider()
  const [isZoomed, setIsZoomed] = useState(false); 

  const openZoomedView = () => {
    setIsZoomed(true);
  };

  const closeZoomedView = () => {
    setIsZoomed(false);
  };

  return (
    <div
      className={`p-1 rounded-lg ${
        message.senderId === currentChatUser.id
          ? "bg-incoming-background"
          : "bg-outgoing-background"
      }`}
    >
      <div className="relative">
        {/* Attach a click handler to open the zoomed-in view */}
        <Image
          src={`${HOST}/${message.message}`}
          alt="asset"
          className="rounded-lg cursor-pointer"
          height={300}
          width={300}
          onClick={openZoomedView}
        />
        <div className="absolute bottom-1 right-1 flex items-end gap-1">
          <span className="text-bubble-meta text-[11px] pt-1 min-w-fit">
            {calculateTime(message.createdAt)}
          </span>
          <span className="text-bubble-meta">
            {message.senderId === userInfo.id && (
              <MessageStatus messageStatus={message.messageStatus} />
            )}
          </span>
        </div>
      </div>

      {/* Conditionally render the zoomed-in view */}
      {isZoomed && (
        <ZoomedImage imageUrl={`${HOST}/${message.message}`} onClose={closeZoomedView} />
      )}
    </div>
  );
}

export default ImageMessage;
