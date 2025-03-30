import React from 'react';

interface CarouselButtonProps {
  onClick: () => void;
  icon: React.ReactNode;
  position: 'start' | 'end';
}
export default function CarouselButton({
  onClick,
  icon,
  position,
}: CarouselButtonProps) {
  return (
    <button
      type="button"
      className={`absolute top-0 ${position}-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none`}
      onClick={onClick}
    >
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        {icon}
        <span className="sr-only">Previous</span>
      </span>
    </button>
  );
}
