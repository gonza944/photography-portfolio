import Image from "next/image";
import { Random } from "unsplash-js/dist/methods/photos/types";

const InfiniteGrid: React.FC<{ elements: Random[] }> = ({
  elements,
}) => {
  return (
    <div className="grid grid-flow-row grid-cols-3 gap-8">
      {elements.map((element, index) => (
        <div key={index}>
          <Image
            src={element.urls.regular}
            width={element.width}
            height={element.height}
            alt={element.alt_description || "Image"}
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      ))}
    </div>
  );
};

export default InfiniteGrid;
