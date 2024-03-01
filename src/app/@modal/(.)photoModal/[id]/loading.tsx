import { Modal } from "@/components/Modal/modal";

const Loading = () => {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <Modal>
      <div className="flex space-x-2 justify-center items-center bg-stone-200 p-60 rounded-md">
        <span className="sr-only">Loading...</span>
        <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="h-8 w-8 bg-black rounded-full animate-bounce"></div>
      </div>
    </Modal>
  );
};
export default Loading;
