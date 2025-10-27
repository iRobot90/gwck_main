import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import communityImage from "@/assets/community-work.jpg";
import { MapPin, Calendar, Target } from "lucide-react";

const WhoWeAre = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <Hero
        image={communityImage}
        title="Who We Are"
        subtitle="Building resilience through environmental restoration and community empowerment"
      />

      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="font-heading font-bold text-3xl mb-6">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Green World Campaign Kenya (GWC-K) was established in 2010 and officially registered 
                in 2011 as a non-profit organization dedicated to environmental conservation and 
                community development. Born from a vision to address the interconnected challenges of 
                environmental degradation and poverty in coastal Kenya, we have grown into a trusted 
                partner for communities across three counties.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
                <div className="bg-card border border-border rounded-lg p-6 text-center">
                  <Calendar className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-semibold text-xl mb-2">Established</h3>
                  <p className="text-muted-foreground">2010</p>
                  <p className="text-sm text-muted-foreground mt-2">Registered 2011</p>
                </div>
                
                <div className="bg-card border border-border rounded-lg p-6 text-center">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-semibold text-xl mb-2">Coverage</h3>
                  <p className="text-muted-foreground">3 Counties</p>
                  <p className="text-sm text-muted-foreground mt-2">Mombasa, Kilifi, Kwale</p>
                </div>
                
                <div className="bg-card border border-border rounded-lg p-6 text-center">
                  <Target className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-semibold text-xl mb-2">Focus</h3>
                  <p className="text-muted-foreground">Holistic Impact</p>
                  <p className="text-sm text-muted-foreground mt-2">Environment & Livelihoods</p>
                </div>
              </div>

              <h2 className="font-heading font-bold text-3xl mb-6 mt-12">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We work to regenerate degraded landscapes, combat climate change, and improve 
                livelihoods across coastal Kenya. Our approach integrates environmental restoration 
                with community empowerment, recognizing that sustainable change requires addressing 
                both ecological and social dimensions.
              </p>

              <h2 className="font-heading font-bold text-3xl mb-6 mt-12">Our Approach</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                GWC-K employs a systems-based approach that recognizes the interconnections between 
                environmental health, community wellbeing, and economic opportunity. We work directly 
                with communities to:
              </p>
              <ul className="list-disc list-inside space-y-3 text-muted-foreground mb-6">
                <li>Restore degraded forests and coastal ecosystems</li>
                <li>Promote sustainable agricultural practices and food security</li>
                <li>Empower youth through climate literacy and environmental education</li>
                <li>Support community-based enterprises and livelihood diversification</li>
                <li>Preserve indigenous knowledge and cultural heritage</li>
                <li>Build resilience to climate change impacts</li>
              </ul>

              <h2 className="font-heading font-bold text-3xl mb-6 mt-12">Geographic Focus</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our work spans three counties along Kenya's coast, each with unique environmental 
                and social contexts:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-muted/50 rounded-lg p-6">
                  <h3 className="font-heading font-semibold text-xl mb-3">Mombasa</h3>
                  <p className="text-sm text-muted-foreground">
                    Urban environmental restoration, mangrove protection, and school-based 
                    climate education programs
                  </p>
                </div>
                <div className="bg-muted/50 rounded-lg p-6">
                  <h3 className="font-heading font-semibold text-xl mb-3">Kilifi</h3>
                  <p className="text-sm text-muted-foreground">
                    Kaya forest conservation, agroforestry systems, and community-based 
                    natural resource management
                  </p>
                </div>
                <div className="bg-muted/50 rounded-lg p-6">
                  <h3 className="font-heading font-semibold text-xl mb-3">Kwale</h3>
                  <p className="text-sm text-muted-foreground">
                    Food security initiatives, indigenous crop restoration, and sustainable 
                    livelihood development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhoWeAre;
