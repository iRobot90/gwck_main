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


