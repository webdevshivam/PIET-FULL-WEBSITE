import React, { useState } from "react";
import ImageModal from "./ImageModal";
import { Skeleton } from "./ui/skeleton";

interface GalleryItem {
    id: string | number;
    src: string;
    alt?: string;
}

interface GallerySectionProps {
    title: string;
    description?: string;
    items: GalleryItem[];
    itemsPerLoad?: number;
}

const GallerySection: React.FC<GallerySectionProps> = ({
    title,
    description,
    items,
    itemsPerLoad = 9,
}) => {
    const [visibleCount, setVisibleCount] = useState(itemsPerLoad);
    const [modalImage, setModalImage] = useState<GalleryItem | null>(null);

    // Track which images are loaded (set of loaded ids)
    const [loadedImages, setLoadedImages] = useState<Set<number | string>>(new Set());

    const handleLoadMore = () => {
        setVisibleCount((prev) => Math.min(prev + itemsPerLoad, items.length));
    };

    const openModal = (item: GalleryItem) => {
        setModalImage(item);
    };

    const closeModal = () => {
        setModalImage(null);
    };

    const handleImageLoad = (id: number | string) => {
        setLoadedImages((prev) => new Set(prev).add(id));
    };

    const visibleItems = items.slice(0, visibleCount);

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-12 bg-neutral-50">
            <h2 className="text-4xl font-extrabold text-primary text-center mb-4">{title}</h2>
            {description && (
                <p className="text-center text-neutral-600 mb-12 max-w-3xl mx-auto">{description}</p>
            )}

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {visibleItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => openModal(item)}
                        className="overflow-hidden rounded-lg shadow hover:shadow-lg transition focus:outline-none relative"
                        aria-label={`Open image ${item.alt ?? item.id}`}
                    >
                        {!loadedImages.has(item.id) && (
                            <Skeleton className="absolute inset-0 w-full h-48" />
                        )}
                        <img
                            src={item.src}
                            alt={item.alt ?? ""}
                            className={`w-full h-48 object-cover transition-opacity duration-500 ${loadedImages.has(item.id) ? "opacity-100" : "opacity-0"
                                }`}
                            loading="lazy"
                            onLoad={() => handleImageLoad(item.id)}
                        />
                    </button>
                ))}
            </div>

            {visibleCount < items.length && (
                <div className="mt-10 flex justify-center">
                    <button
                        onClick={handleLoadMore}
                        className="px-6 py-3 bg-primary text-white rounded-lg shadow hover:bg-primary-dark transition"
                        aria-label="Load more images"
                    >
                        Load More
                    </button>
                </div>
            )}

            {modalImage && (
                <ImageModal src={modalImage.src} alt={modalImage.alt} onClose={closeModal} />
            )}
        </section>
    );
};

export default GallerySection;