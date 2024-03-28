export default function DemoSection() {
  return (
    <section style={{ backgroundColor: "#27272A", paddingTop: 1, paddingBottom: 80 }}>
      <div className="">
        <h2 className="text-green-500 text-center font-bold text-4xl font-signika-negative mt-16">
          Em-bark on Icon Adventures with CityGen!
        </h2>
        <div className="container mx-auto rounded overflow-hidden mt-10">
          <div className="flex justify-center">
            <div className="w-1/3 p-4 justify-center">
              <h4 className="mb-4 mt-1 font-bold text-xl">Create your own citys!</h4>
              <p className="text-justify text-base text-slate-300">
                Unleash your creativity with our AI urban landscape icon
                generator! Select your favorite city, archetype, style, color
                scheme, and pose to fashion the ideal, distinctive city icon.
                And the greatest aspect? Effortlessly generate a plethora of
                these delightful icons, injecting boundless urban charm into
                your endeavors!
              </p>
            </div>
            <div className="w-1/2 p-4">
              <img src="/DEMO.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
