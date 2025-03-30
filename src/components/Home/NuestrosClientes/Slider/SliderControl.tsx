import React from 'react';

interface SliderControlProps {
  data: any[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

export default function SliderControl({
  data,
  currentIndex,
  setCurrentIndex,
}: SliderControlProps) {
  return (
    <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
      {data.map((_, index) => (
        <button
          key={index}
          type="button"
          className={`w-3 h-3 rounded-full ${
            index === currentIndex ? 'bg-gray-900' : 'bg-gray-400'
          }`}
          aria-current={index === currentIndex ? 'true' : 'false'}
          aria-label={`Slide ${index + 1}`}
          onClick={() => setCurrentIndex(index)}
        ></button>
      ))}
    </div>
  );
}
