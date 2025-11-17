import Hero from "@/components/Hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Gallery = () => {
  const gallery: Record<string, { event: string; image?: string }[]> = {
    "2025": [
      { event: "Kaya Forest Restoration Summit", image: "/assets/gallery/kaya-2025.jpg" },
      { event: "Youth Climate Literacy Expo", image: "/assets/gallery/youth-expo-2025.jpg" },
    ],
    "2024": [
      { event: "Mangrove Planting – Tudor Creek", image: "/assets/gallery/mangrove-tudor-2024.jpg" },
      { event: "Agroforestry Training – Kilifi", image: "/assets/gallery/agroforestry-kilifi-2024.jpg" },
    ],
    "2023": [
      { event: "School Greening Program – Mombasa" },
      { event: "Community Seed Fair – Kwale" },
    ],
  };

  return (
    <>
      <Hero image="/assets/hero-gallery.jpg" title="Gallery" subtitle="Moments from our communities and initiatives" />
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          {Object.keys(gallery).sort((a, b) => Number(b) - Number(a)).map((year) => (
            <div key={year} className="mb-12">
              <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6">{year}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gallery[year].map((item, idx) => (
                  <Card key={`${year}-${idx}` } className="border-border overflow-hidden">
                    {item.image ? (
                      <div className="aspect-[4/3] bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }} />
                    ) : (
                      <div className="aspect-[4/3] bg-muted/40 border-b border-border flex items-center justify-center text-xs text-muted-foreground">
                        Image coming soon
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="font-heading text-lg">{item.event}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Event documentation and images.</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Gallery;



