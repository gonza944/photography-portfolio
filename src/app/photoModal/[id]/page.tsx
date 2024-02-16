import { getPhotoById } from "@/app/actions";
import Displayer from "@/components/Photo-Displayer/photoDisplayer";

const PhotoModal: React.FC<{ params: { id: string } }> = async ({ params }) => {
  console.log(params);
  const photo = await getPhotoById(params.id);

  return photo && <Displayer photos={[photo]} />;
};

export default PhotoModal;
