
export default function CustomCard({
    src,
    title,
    description
}: {
    src: string;
    title: string;
    description: string;
}) {
    return (
        <article className="overflow-hidden col-span-1 hover:scale-105 duration-500 border rounded-lg shadow-sm transition hover:shadow-lg dark:text-white">
            <img src={src} alt={title} className="w-full h-[300px] object-contain" />

            <div className="p-4 sm:p-6">

                <a href="#">
                    <h3 className="mt-0.5 text-lg text-gray-900 dark:text-white">
                        {title}
                    </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-white">
                    {description}

                </p>
            </div>
        </article>
    );
}