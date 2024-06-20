import { PhotoProps } from "@/app/@modal/(.)photoModal/[id]/page";
import { getPhotoByIdServer } from "@/app/actions";
import Displayer from "@/components/Photo-Displayer/photoDisplayer";

const PhotoModal: React.FC<PhotoProps> = async ({ params }) => {
  const photo = await getPhotoByIdServer(params.id);

  return photo && <Displayer photos={[photo]} />;
};

export default PhotoModal;
