import "../globals.css";
import Csel from "@/components/carousel";

export default function Home() {
  return (
    <>
      <main>
        <div className="grid grid-cols-1 items-center justify-center xl:w-auto pb-10">
          <div className="h-10 sm:h-[100px] md:h-[300px] xl:h-[420px] w-20 sm:w-[100px] md:w-[700px] xl:w-[1000px]">
            <Csel/>
          </div>
        </div>
      </main>
    </>
  );
}
