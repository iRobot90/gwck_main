
import Hero from "@/components/Hero";
import InitiativeCard from "@/components/InitiativeCard";
import MetricCard from "@/components/MetricCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TreePine, GraduationCap, Leaf, Droplets, Sprout } from "lucide-react";

const heroImage = "/assets/hero-main.jpg";

const Index = () => {
  return (
    <>
      <Hero
        image={heroImage}
        title="Regenerating Landscapes. Co-creating Local Solutions"
        subtitle="Driving environmental regeneration and community Knowledge sharing across coastal Kenya"
      >
        <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link to="/who-we-are">Explore Our Impact</Link>
        </Button>
      </Hero>

      {/* Introduction */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 animate-fade-in-up">
              Building a Sustainable Future
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in">
              Since 2010, Green World Campaign Kenya has been at the forefront of environmental restoration and community development across Mombasa, Kilifi, and Kwale. We co-create solutions with the indigenous coastal communities to address the interconnected challenges of environmental degradation and food security improving livelihoods of indigenous coastal communities, some of whom are in arid and semi arid land
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto container-padding">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <MetricCard
              value="4M+"
              label="Trees planted in Kilifi, Mombasa and Kwale counties"
              icon={<TreePine className="w-8 h-8" />}
            />
            <MetricCard
              value="100"
              label="Schools engaged"
              icon={<Sprout className="w-8 h-8" />}
            />
            <MetricCard
              value="70K+"
              label="Pupils engaged each year"
              icon={<GraduationCap className="w-8 h-8" />}
            />
            <MetricCard
              value="40"
              label="Youth groups"
              icon={<Leaf className="w-8 h-8" />}
            />
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-4">
            Our Pillars
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Five interconnected approaches to environmental restoration and community empowerment
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <InitiativeCard
              title="Agroforestry"
              description="Integrating trees with crops to improve soil health, increase food security, and boost farmer incomes."
              icon={<TreePine className="w-6 h-6" />}
            />
            <InitiativeCard
              title="Climate Literacy"
              description="Empowering youth and communities with knowledge to understand and act on climate change."
              icon={<GraduationCap className="w-6 h-6" />}
            />
            <InitiativeCard
              title="Kaya Forests"
              description="Protecting and restoring sacred indigenous forests that are vital to biodiversity and cultural heritage."
              icon={<TreePine className="w-6 h-6" />}
            />
            <InitiativeCard
              title="Mangrove Restoration"
              description="Rehabilitating coastal mangrove ecosystems that protect shorelines and support marine life."
              icon={<Droplets className="w-6 h-6" />}
            />
            <InitiativeCard
              title="Food Security"
              description="Building resilient food systems through sustainable agriculture and indigenous crop varieties."
              icon={<Sprout className="w-6 h-6" />}
            />
            <InitiativeCard
              title="Systems Approach"
              description="Creating holistic solutions that address environmental, social, and economic challenges together."
              icon={<Leaf className="w-6 h-6" />}
            />
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild variant="default">
              <Link to="/initiatives">Learn More About Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto container-padding text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
            Join Us in Creating Change
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Whether you're a donor, partner organization, or community member, 
            there are many ways to support our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Partner With Us</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/communities">See Our Communities</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;

