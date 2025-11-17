import Hero from "@/components/Hero";

const transformationImage = "/assets/transformation.jpg";

const Transformation = () => {
  return (
    <>
      <Hero
        image={transformationImage}
        title="Community Transformation"
        subtitle="Witnessing the journey from degradation to regeneration across coastal Kenya"
      />

      <section className="section-padding">
        <div className="container mx-auto container-padding space-y-8">
          <div className="rounded-lg overflow-hidden border border-border">
            <iframe src="https://restor.eco/embed/sites/7d831b15-dcdb-4e4a-beb5-9bfa651643d3/" title="MUUNGANO FARMERS" width="100%" height="648" style={{ border: "none" }} frameBorder={0}></iframe>
          </div>
          <div className="rounded-lg overflow-hidden border border-border">
            <iframe src="https://restor.eco/embed/sites/fdf922b8-3eb8-4d67-b02d-6bc58accb018/" title="YOWANI UWEZO YOUTHS" width="100%" height="648" style={{ border: "none" }} frameBorder={0}></iframe>
          </div>
          <div className="rounded-lg overflow-hidden border border-border">
            <iframe src="https://restor.eco/embed/sites/873e9722-d8ce-4f07-ae7b-386c31571767/" title="Amkeni Self Help Group" width="100%" height="648" style={{ border: "none" }} frameBorder={0}></iframe>
          </div>
          <div className="rounded-lg overflow-hidden border border-border">
            <iframe src="https://restor.eco/embed/sites/e40a593e-5a90-43fd-bfbe-09d5a01bbf92/" title="Bofu Dam Farmers" width="100%" height="648" style={{ border: "none" }} frameBorder={0}></iframe>
          </div>
        </div>
      </section>

    </>
  );
};

export default Transformation;
