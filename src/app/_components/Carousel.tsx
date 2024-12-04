'use client'
import { useState } from "react";

// Define the interface for each image
interface Image {
    path: string;
}

// Define the component props, expecting an array of `Image`
interface CarouselProps {
    images: Image[];
}

const Carousel = ({ images }: CarouselProps) => {
    // Set the initial main image as the path of the first image
    const [mainImage, setMainImage] = useState(images[0]?.path || "");

    // Track the current start index of the visible images
    const [startIndex, setStartIndex] = useState(0);

    // Define the maximum number of images to display in the carousel
    const maxVisibleImages = 5;

    // Get the currently visible images based on the start index
    const visibleImages = images.slice(startIndex, startIndex + maxVisibleImages);

    // Handle navigation
    const handleNext = () => {
        if (startIndex + maxVisibleImages < images.length) {
            setStartIndex(startIndex + 1);
        }
    };

    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    return (
        <div className="flex-1 flex flex-col max-w-md max-h-fit">
            {/* Main Image Frame */}
            <div className=" mb-4 w-full h-full border border-gray-300 overflow-hidden rounded-lg shadow-lg">
                <img
                    src={mainImage}
                    alt="Main"
                    className="w-full h-96 object-cover transition-all duration-300"
                />
            </div>

            {/* Carousel Thumbnails with Navigation */}
            <div className="flex items-center space-x-2 relative">
                {/* Left Button */}
                <button
                    onClick={handlePrev}
                    disabled={startIndex === 0}
                    className="p-1 rounded-full bg-white text-gray-700 disabled:opacity-50 absolute"
                >
                    <svg className="text-amber-700 bg-white rotate-90" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16" ><path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor"></path></svg>
                </button>

                {/* Thumbnails */}
                <div className="flex space-x-2  transition-transform duration-300 ease-in-out">
                    {visibleImages.map((image, index) => (
                        <div
                            key={index}
                            className="w-20 h-20 flex-shrink-0 border border-gray-300 rounded-lg overflow-hidden cursor-pointer hover:border-amber-500 transition-transform duration-200 ease-in-out"
                            onMouseEnter={() => setMainImage(image.path)}
                        >
                            <img
                                src={image.path}
                                alt={`Thumbnail ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>

                {/* Right Button */}
                <button
                    onClick={handleNext}
                    disabled={startIndex + maxVisibleImages >= images.length}
                    className="rounded-full p-1 bg-white text-gray-700 disabled:opacity-50 absolute right-0"
                >
                    <svg className="text-amber-700 bg-white -rotate-90" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor"></path></svg>
                </button>
            </div>
            
        </div>
    );
};

export default Carousel;
