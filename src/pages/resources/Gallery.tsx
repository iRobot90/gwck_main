import Hero from "@/components/Hero";

const Gallery = () => {
  const placeholders = Array.from({ length: 9 });

  return (
    <>
      <Hero image="/assets/hero-gallery.jpg" title="Gallery" subtitle="Moments from our communities and initiatives" />
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="max-w-3xl mb-8">
            <p className="text-muted-foreground">
              Placeholder thumbnails. We’ll populate this grid with curated photos and videos.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {placeholders.map((_, idx) => (
              <div
                key={idx}
                className="aspect-[4/3] rounded-lg bg-muted/40 border border-border flex items-center justify-center text-xs text-muted-foreground"
              >
                Image {idx + 1}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;


