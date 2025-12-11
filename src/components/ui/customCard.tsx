import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
export default function CustomCard({
  src,
  title,
  description,
  id,
}: {
  src: string;
  title: string;
  description: string;
  id?: string;
}) {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div
      data-aos={
        id === "1" ? "fade-right" : id === "2" ? "fade-up" : "fade-left"
      }
      className="overflow-hidden col-span-1 hover:scale-105 duration-500 border rounded-lg shadow-sm transition hover:shadow-lg dark:text-white"
    >
      <img src={src} alt={title} className="w-full h-[300px] object-contain" />

      <div className="p-4 sm:p-6">
        <Link to="#">
          <h3 className="mt-0.5 text-lg text-gray-900 dark:text-white">
            {title}
          </h3>
        </Link>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-white">
          {description}
        </p>
      </div>
    </div>
  );
}
