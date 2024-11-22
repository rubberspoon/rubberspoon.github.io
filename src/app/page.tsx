import Image from "next/image";
import Appointments from "./components/appointments";

export default function Home() {
  return (
    <div className="banzai grid grid-rows-[1fr] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-nunito-sans)]">
      <main className="flex flex-col gap-8 items-center">
        <h1 className="banzai-offset bg-clip-text text-transparent font-[family-name:var(--font-nunito-sans-italic)] [font-size:_clamp(1rem,12vw,9rem)] font-black tracking-tighter">
          rubberspoon
        </h1>
        <div className="max-w-xl mx-auto">
          <Image
            src="/harry-goz.svg"
            alt="Harry Goz with a spoon"
            width={1824}
            height={2430}
            priority
          />
        </div>
        <Appointments />
      </main>
    </div>
  );
}
