import Image from "next/image";

export default function Home() {
  return (
    <div className="banzai grid grid-rows-[1fr] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center">
        <h1 className="banzai-offset bg-clip-text text-transparent [font-size:_clamp(1rem,12vw,9rem)] font-black">
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
        <a
          className="banzai-offset rounded-full border border-solid border-transparent transition-colors flex items-center justify-center gap-2 [font-size:_clamp(.75rem,6vw,2rem)] leading-loose font-bold px-4 sm:px-5 sm:mx-auto"
          href="https://calendar.app.google/THBeNE322ZRr29Cj8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="banzai bg-clip-text text-transparent">
            Book a meeting
          </span>
        </a>
      </main>
    </div>
  );
}
