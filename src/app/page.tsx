import HappyPets from '@/components/Home/HappyPets';
import HeroSection from '@/components/Home/HeroSection/HeroSection';
import Location from '@/components/Home/Location/Location';
import Clients from '@/components/Home/NuestrosClientes/Clients';
import Services from '@/components/Home/Services/Services';

export default function Home() {
  return (
    <div className="flex-1 pb-20 gap-16  font-[family-name:var(--font-geist-sans)]">
      <HeroSection />
      <div className="flex flex-col gap-20px flex-1 p-8 pb-20 gap-16 sm:p-20">
        <Services />
        <Clients />
        <HappyPets />
        <Location />
      </div>
    </div>
  );
}
