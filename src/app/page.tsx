import HappyPets from '@/components/Home/HappyPets';
import HeroSection from '@/components/Home/HeroSection/HeroSection';
import Location from '@/components/Home/Location/Location';
import Clients from '@/components/Home/NuestrosClientes/Clients';
import Services from '@/components/Home/Services/Services';

export default function Home() {
  return (
    <div className="flex flex-col gap-20px items-center justify-items-center flex-1 p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <HeroSection />
      <Services />
      <Clients />
      <HappyPets />
      <Location />
    </div>
  );
}
