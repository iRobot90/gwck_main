import Hero from "@/components/Hero";

const Gallery = () => {
  return (
    <>
      <Hero image="/assets/hero-gallery.jpg" title="Gallery" subtitle="Moments from our communities and initiatives" />
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <p className="text-muted-foreground">
            Photo and video highlights will be showcased here.
          </p>
        </div>
      </section>
    </>
  );
};

export default Gallery;


