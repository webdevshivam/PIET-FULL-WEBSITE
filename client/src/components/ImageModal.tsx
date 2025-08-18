import React from "react";

interface ImageModalProps {
    src: string;
    alt?: string;
    onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ src, alt, onClose }) => {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <button
                className="absolute top-5 right-5 text-white text-3xl font-bold focus:outline-none"
                onClick={(e) => {
                    e.stopPropagation();
                    onClose();
                }}
                aria-label="Close image modal"
            >
                &times;
            </button>
            <img
                src={src}
                alt={alt}
                className="max-w-full max-h-[90vh] rounded shadow-lg"
                onClick={(e) => e.stopPropagation()}
            />
        </div>
    );
};

export default ImageModal;
