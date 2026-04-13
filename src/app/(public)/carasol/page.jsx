import MagnetButton from "@/components/nurui/magnet-button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-5">Carousel</h1>
      <Carousel className="w-100">
        <CarouselContent>
          <CarouselItem>
            <div className="bg-red-500 h-40 flex items-center justify-center text-white">
              Slide 1
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="bg-blue-500 h-40 flex items-center justify-center text-white">
              Slide 2
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="bg-green-500 h-40 flex items-center justify-center text-white">
              Slide 3
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <MagnetButton></MagnetButton>
    </div>
  );
};

export default Page;