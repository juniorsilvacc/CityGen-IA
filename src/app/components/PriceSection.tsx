import CardPrice from "./CardPrice";

export default function PriceSection() {
  return (
    <section className="container mx-auto px-4 items-center justify-between sm:px-8 mt-20">
      <h2 className="text-green-500 text-center font-bold text-4xl font-signika-negative mb-10">Pricing</h2>

      <div className="flex">
        <CardPrice 
          title="Pro" 
          description="For professional use and advanced features." 
          price="Free"
          galleryItems={["5 included credits", "Personal Gallery", "Downloadable PNGs"]}
          buttonText="Get Started" 
        />
        <CardPrice 
          title="Premium" 
          description="Perfect for advanced users and pet art lovers." 
          price="$9.99/month"
          galleryItems={["100 included credits", "Personal Gallery", "Downloadable PNGs", "No Watermark"]}
          buttonText="Coming soon"
        />
        <CardPrice 
          title="Professional" 
          description="Perfect for businesses and advanced users looking." 
          price="$19.99/month"
          galleryItems={["Unlimited credits", "Personal Gallery", "Downloadable PNGs", "No Watermark", "Hi-Res Downloadable PNGs"]}
          buttonText="Coming soon"
        />
      </div>
    </section>
  )
}