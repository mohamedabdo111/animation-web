import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function WithMrfqComponent({
  title,
  description,
  src,
}: {
  title: string;
  description: string;
  src: string;
}) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="grid grid-cols-2  gap-2 items-center text-black max-w-7xl mx-auto py-10 px-4 dark:text-white">
      <div className="" data-aos="fade-up">
        <h2 className="text-5xl font-bold mb-2">{title}</h2>
        <p className="text-2xl">{description}</p>
      </div>
      <div className="flex justify-center" data-aos="fade-down">
        <img src={src} alt={title} />
      </div>
    </section>
  );
}

export default function WithMrfq({
  dataArray,
}: {
  dataArray: {
    title: string;
    description: string;
    src: string;
  }[];
}) {
  return (
    <section className=" text-black dark:text-white bg-gray-200 dark:bg-transparent">
      <h3
        className="text-5xl font-bold mb-2 text-center py-10"
        data-aos="fade-down"
      >
        With MRFQ
      </h3>
      {dataArray.map((item, index) => (
        <WithMrfqComponent key={index} {...item} />
      ))}
    </section>
  );
}
