import React from "react";
import Image from "next/image";
import { MdClose } from "react-icons/md";

function ZoomedImage({ imageUrl, onClose }) {
  return (
    <div className="fixed z-50 top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-80">
      <div className="relative">
        <Image src={imageUrl} alt="Zoomed Image" width={600} height={400} />
        <button
          className="absolute top-4 right-4 text-white text-xl cursor-pointer"
          onClick={onClose}
        >
          <MdClose/>
        </button>
      </div>
    </div>
  );
}

export default ZoomedImage;
