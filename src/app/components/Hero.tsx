import { models } from "../contants";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-[80vh] grid place-items-center bg-[linear-gradient(#00000084,#00000084),url('./assets/car-bg.jpg')] bg-center bg-cover text-white">
      <div className="text-center flex flex-col gap-8">
        <p>Yakındaki Kiralık Araçları Keşfedin...</p>
        <h1 className="text-4xl md:text-6xl font-bold">
          Sizin İçin En Uygun Araçları Bul...
        </h1>
        <p className="flex gap-4 justify-center ">
          Size Uygun Modeli Belirleyelim
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          {models.map((item, index) => (
            <button
              key={index}
              className=" px-3 py-1 rounded-full bg-gray-100/25 transition hover:bg-gray-500  flex gap-3 items-center "
            >
              <Image src={item.icon} alt={item.name} />
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
