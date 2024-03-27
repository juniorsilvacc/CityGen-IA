interface Props {
  imageUrl: string;
}

export default function ImgPreview({ imageUrl }: Props) {
  return (
    <section className="container mx-auto px-4 flex items-center justify-center sm:px-8">
      <img
        src={imageUrl}
        alt="Imagem Selecionada"
        className="rounded-2xl w-64"
      />
    </section>
  );
}
