'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import SliderControl from './Slider/SliderControl';
import CarouselButton from './Slider/CarouselButton';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';

export default function Carrousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const testimonials = [
    {
      image: '/tatLogo.png',
      review: 'Excelente servicio, muy recomendado.',
      name: 'Juan Pérez',
    },
    {
      image: '/tatIgProfile.png',
      review: 'Gran experiencia, volveré sin duda.',
      name: 'María Gómez',
    },
  ];

  const autoNext = () => {
    if (!isUserInteracting) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }
  };

  useEffect(() => {
    const interval = setInterval(autoNext, 3000);
    return () => clearInterval(interval);
  }, [isUserInteracting]);

  const handleNext = () => {
    setIsUserInteracting(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIsUserInteracting(true);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div
      id="default-carousel"
      className="relative w-full bg-gray-100 dark:bg-gray-900 rounded-xl "
      data-carousel="slide"
    >
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96 flex flex-col items-center justify-center shadow-md p-6">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out absolute w-full transition-opacity flex flex-col items-center text-center ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transition: 'opacity 0.7s ease-in-out',
            }}
          >
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300">
              <Image src={item.image} alt={item.name} width={96} height={96} />
            </div>
            <p className="mt-4 text-gray-700 italic">"{item.review}"</p>
            <span className="mt-2 font-semibold text-gray-900">
              {item.name}
            </span>
          </div>
        ))}
      </div>
      <SliderControl
        data={testimonials}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
      <CarouselButton
        onClick={handlePrev}
        icon={
          <FaChevronCircleLeft className="w-10 h-10 text-[var(--color-secondary)] dark:text-gray-600" />
        }
        position="start"
      />
      <CarouselButton
        onClick={handleNext}
        icon={
          <FaChevronCircleRight className="w-10 h-10 text-[var(--color-secondary)] dark:text-gray-600" />
        }
        position="end"
      />
    </div>
  );
}
