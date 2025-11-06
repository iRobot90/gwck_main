import Hero from "@/components/Hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AnnualReports = () => {
  const placeholderYears = [2022, 2023, 2024];

  return (
    <>
      <Hero image="/assets/hero-resources.jpg" title="Annual Reports" subtitle="Yearly highlights, impact, and financials" />
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="max-w-3xl mb-8">
            <p className="text-muted-foreground">
              Placeholder entries. Each report will include highlights and a downloadable PDF.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {placeholderYears.map((year) => (
              <Card key={year} className="border-border">
                <CardHeader>
                  <CardTitle className="font-heading text-lg">Annual Report {year}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="text-sm list-disc pl-4 text-muted-foreground">
                    <li>Key achievements — coming soon</li>
                    <li>Financials summary — coming soon</li>
                    <li>Download link — coming soon</li>
                  </ul>
                  <Button variant="outline" disabled>
                    Download PDF (soon)
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

export default AnnualReports;


