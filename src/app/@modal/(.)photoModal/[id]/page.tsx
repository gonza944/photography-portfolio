"use client";
import { getPhotoById } from "@/app/actions";
import { Modal } from "@/components/Modal/modal";
import { shimmer, toBase64 } from "@/utils/loaderUtils";
import Image from "next/image";
import { use } from "react";

export type PhotoProps = {
  params: { id: string }
}

const PhotoModal: React.FC<PhotoProps> = ({ params }) => {
  const photo = use(getPhotoById(params.id));

  return (
    <Modal>
      {photo && (
        <Image
          className=" rounded-md shadow-md shadow-fontColor"
          src={photo.src}
          width={photo.width}
          height={photo.height}
          alt={photo.alt}
          style={{ width: "900px", height: "auto" }}
          placeholder={`data:image/svg+xml;base64,${toBase64(
            shimmer(photo.width, photo.height)
          )}`}
        />
      )}
    </Modal>
  );
};

export default PhotoModal;
