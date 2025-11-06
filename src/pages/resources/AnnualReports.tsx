import Hero from "@/components/Hero";

const AnnualReports = () => {
  return (
    <>
      <Hero image="/assets/hero-resources.jpg" title="Annual Reports" subtitle="Yearly highlights, impact, and financials" />
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <p className="text-muted-foreground">
            Browse annual reports. We’ll list downloadable PDFs here.
          </p>
        </div>
      </section>
    </>
  );
};

export default AnnualReports;


