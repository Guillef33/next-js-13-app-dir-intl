import Image from "next/image";

const HomeStruc = ({ item }) => {
  return (
    <div>
      <h2 className="text-white text-center text-4xl xl:text-5xl font-bold mb-8">
        {item.claim}
      </h2>
      <Image
        src={item.img}
        alt={item.claim}
        className="w-full md:h-[600px] object-contain m-auto"
        width={100}
        height={100}
        priority
      />
    </div>
  );
};

export default HomeStruc;
