import React from "react";
import Masonry from "react-masonry-css";
import ImageCard from "./ImageCard";

interface ImageItem {
    title: string;
    imageUrl: string;
}

interface ImageGalleryProps {
    items: ImageItem[];
}

const breakpointColumnsObj = {
    default: 3,
    1024: 3,
    768: 2,
    500: 1,
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ items }) => {
    return (
        <section className="py-10 px-4">
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {items.map((item, index) => (
                    <ImageCard key={index} title={item.title} imageUrl={item.imageUrl} />
                ))}
            </Masonry>
        </section>
    );
};

export default ImageGallery;
