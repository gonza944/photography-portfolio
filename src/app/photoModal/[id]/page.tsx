import { getPhotoByIdServer } from "@/app/actions";
import Displayer from "@/components/Photo-Displayer/photoDisplayer";

const PhotoModal: React.FC<{ params: { id: string } }> = async ({ params }) => {
  const photo = await getPhotoByIdServer(params.id);

  return photo && <Displayer photos={[photo]} />;
};

export default PhotoModal;
