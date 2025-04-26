import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative py-16 px-6 md:px-12 flex flex-col md:flex-row items-center justify-center bg-[#FDF8F4] dark:bg-gray-900 transition-colors">
      {/* Text Content */}
      <div className="max-w-lg text-center md:text-left animate-fade-in">
        <h1 className="text-5xl font-bold leading-tight text-gray-800 dark:text-white">
          Your Dog’s <span className="text-pink-500">Second Home</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          A cozy, safe, and fun environment where your dog can relax, play, and
          enjoy personalized care.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all">
          Schedule a visit
        </button>
      </div>

      {/* Image Section */}
      <div className="relative mt-10 md:mt-0 md:ml-12 animate-slide-up">
        <div className="relative w-120 h-120">
          <Image
            src="/heroPoodle.png"
            alt="Happy dog"
            layout="fill"
            objectFit="cover"
            className="rounded-xl shadow-lg"
            priority
          />
        </div>

        {/* Decorative Circles */}
        <div className="absolute -top-6 -right-6 w-24 h-24 bg-pink-200 dark:bg-pink-700 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-200 dark:bg-green-700 rounded-full opacity-50 animate-pulse delay-200"></div>
      </div>
    </section>
  );
}
