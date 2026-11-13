import { useLanguage } from "../context/LanguageContext";

function EnglishProficiency() {
    const { data } = useLanguage();
    const { englishProficiency } = data;

    const videoId = "syXhxqhz9IY";
    const videoUrl = `https://www.youtube-nocookie.com/embed/${videoId}`;
    const youtubeUrl = `https://youtube.com/watch?v=${videoId}`;

    return (
        <section id="english-proficiency" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
                <div className="min-w-0">
                    <h2 className="mb-5 text-3xl font-bold text-[#252B42] dark:text-[#F9FAFB]">
                        {englishProficiency.title}
                    </h2>

                    <p className="max-w-lg text-base leading-7 text-[#6B7280] dark:text-[#D1D5DB]">
                        {englishProficiency.description}
                    </p>

                    <a href={youtubeUrl} target="_blank" rel="nooponer noreferrer" className="mt-6 inline-block font-medium text-[#4731D3] underline underline-offset-4 dark:text-[#A78BFA]">
                        {englishProficiency.watchVideo}
                    </a>
                </div>
                <div className="aspect-video w-full overflow-hidden rounded-xl bg-[#F3F4F6] shadow-md dark:bg-[#242424]">
                    <iframe
                        className="h-full w-full"
                        src={videoUrl}
                        title={englishProficiency.videoTitle}
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                </div>
            </div>
        </section>
    )
}

export default EnglishProficiency;