import {Hero} from "@/sections/Hero";
import { Header} from "@/sections/Header";
import { Sponcer } from '@/sections/Sponcer'




export default function Home() {
  return ( 
    <div className="bg-[var(--primary-98)]">
    <Header />
    <Hero />
    <Sponcer />
    </div>
  );
}
