export default function CommentsSection() {
  return (
    <section className="container px-4 pt-16 sm:px-8 mx-auto">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-left text-green-500 font-bold text-4xl font-signika-negative">
          What our users say
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-10 lg:min-h-[250px] lg:grid-cols-3 lg:gap-6">
          <div className="ml-5 flex flex-col justify-between border-l-2 dark:border-slate-700">
            <blockquote className="pl-6 italic">
              &quot;I&apos;m over the moon with CityGen! This creatively
              ingenious tool effortlessly generates the most captivating city
              icons, transforming my design ventures into an exhilarating and
              enjoyable experience.&quot;
            </blockquote>
          </div>
          <div className="ml-5 flex flex-col justify-between border-l-2 dark:border-slate-700">
            <blockquote className="pl-6 italic">
              &quot;CityGen is an absolute delight! It&apos;s a wellspring of
              creativity that seamlessly translates my ideas into charming
              city-centric illustrations. A heartfelt thanks to the developers
              for enriching my art with greater engagement and enjoyment!&quot;
            </blockquote>
          </div>
          <div className="ml-5 flex flex-col justify-between border-l-2 dark:border-slate-700">
            <blockquote className="pl-6 italic">
              &quot;I&apos;m genuinely amazed by CityGen! It&apos;s remarkably user-friendly
              and generates the most delightful city icons, instantly elevating
              my design projects. It feels like I&apos;ve stumbled upon a hidden gem
              that imbues charm and personality into all my creations!&quot;
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
