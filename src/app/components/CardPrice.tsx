interface Props {
  title: string,
  description: string,
  price: string,
  galleryItems: string,
  buttonText: string,
}

export default function CardPrice({ title, description, price, galleryItems, buttonText }: any) {
  return (
    <div className="max-w-md mx-auto bg-transparent rounded-lg overflow-hidden">
      <div className="px-6 py-8 border dark:border-slate-700 bg-opacity-50 rounded-lg">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold dark:text-white mb-1 font-signika-negative">{title}</h2>
          <p className="text-sm text-zinc-400">{description}</p>
        </div>
        <div className="text-center mb-8">
          <p className="text-3xl font-bold dark:text-white mb-2 font-signika-negative">{price}</p>
          {galleryItems.map((item: string, index: number) => (
            <p key={index} className="text-sm text-zinc-400">{item}</p>
          ))}
        </div>
        <div className="text-center">
          <button className={`px-6 py-2 bg-green-600 hover:bg-green-500 text-white font-bold rounded-full `}>{buttonText}</button>
        </div>
      </div>
    </div>
  )
}