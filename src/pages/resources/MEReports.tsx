import Hero from "@/components/Hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const MEReports = () => {
  const placeholderReports = [
    { title: "Baseline Assessment", year: 2022 },
    { title: "Midterm Evaluation", year: 2023 },
    { title: "Endline Evaluation", year: 2024 },
  ];

  return (
    <>
      <Hero image="/assets/hero-resources.jpg" title="M&E Reports" subtitle="Monitoring & Evaluation insights from our programs" />
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mb-10">
            <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">Story Maps</h2>
            <p className="text-muted-foreground mb-4">Interactive story maps showcasing our work:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <a
                  className="text-primary hover:underline"
                  href="https://gwc-k.maps.arcgis.com/apps/MapJournal/index.html?appid=f8886ce4d13240248cf60711fca925c3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Map Journal Story Map
                </a>
              </li>
              <li>
                <a
                  className="text-primary hover:underline"
                  href="https://storymaps.arcgis.com/stories/fc5c15d48dfb4a41924812ee13328302"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ArcGIS StoryMaps: GWC-K
                </a>
              </li>
            </ul>
          </div>
          <div className="max-w-3xl mb-8">
            <p className="text-muted-foreground">
              Placeholder list. Download links and summaries will be added here.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {placeholderReports.map((r, idx) => (
              <Card key={idx} className="border-border">
                <CardHeader>
                  <CardTitle className="font-heading text-lg">{r.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">Year: {r.year}</p>
                </CardHeader>
                <CardContent className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">Summary coming soon.</p>
                  <Button variant="outline" disabled>
                    Download (soon)
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MEReports;



