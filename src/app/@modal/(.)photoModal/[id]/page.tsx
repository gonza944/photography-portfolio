import { getPhotoById } from "@/app/actions";
import { Modal } from "@/components/Modal/modal";
import Image from "next/image";

const PhotoModal: React.FC<{ params: { id: string } }> = async ({ params }) => {
  const photo = await getPhotoById(params.id);

  return (
    <Modal>
      {photo && (
        <Image
          className=" rounded-md shadow-md shadow-fontColor"
          src={photo.urls.regular}
          width={photo.width}
          height={photo.height}
          alt={photo.alt_description || "Image"}
          style={{ width: "600px", height: "auto" }}
        />
      )}
    </Modal>
  );
};

export default PhotoModal;
