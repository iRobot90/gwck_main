import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Hero from "@/components/Hero";
import { MapPin, Users, Sprout } from "lucide-react";
import { Link } from "react-router-dom";

const communityImage = "/assets/community-work.jpg";

const Communities = () => {
  const communities = [
    {
      name: "Mombasa Communities",
      county: "Mombasa",
      population: "25,000+",
      focus: ["Mangrove restoration", "Urban greening", "School programs"],
      description: "Working with urban and peri-urban communities to restore coastal ecosystems and build climate awareness among youth.",
      image: communityImage
    },
    {
      name: "Kilifi Villages",
      county: "Kilifi",
      population: "40,000+",
      focus: ["Kaya forest protection", "Agroforestry", "Traditional knowledge"],
      description: "Partnering with traditional communities to protect sacred forests while developing sustainable livelihood alternatives.",
      image: communityImage
    },
    {
      name: "Kwale Districts",
      county: "Kwale",
      population: "30,000+",
      focus: ["Food security", "Indigenous crops", "Water management"],
      description: "Supporting rural farming communities to enhance food security and adapt to climate change through sustainable agriculture.",
      image: communityImage
    }
  ];

  return (
    <>
      <Hero
        image={communityImage}
        title="Our Communities"
        subtitle="Building partnerships across coastal Kenya for lasting environmental and social change"
      />

      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              GWC-K works directly with communities across three coastal counties, engaging over 
              95,000 people in environmental restoration and sustainable development initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {communities.map((community, index) => (
              <Card 
                key={index} 
                className="border-border overflow-hidden group hover:shadow-xl transition-smooth animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div 
                  className="h-48 bg-cover bg-center group-hover:scale-105 transition-smooth"
                  style={{ backgroundImage: `url(${community.image})` }}
                />
                <CardHeader>
                  <CardTitle className="font-heading text-2xl mb-2">
                    {community.name}
                  </CardTitle>
                  <CardDescription>
                    <div className="flex items-center gap-2 text-sm mb-2">
                      <MapPin className="w-4 h-4" />
                      {community.county} County
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4" />
                      {community.population} people engaged
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {community.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-heading font-semibold text-sm flex items-center gap-2">
                      <Sprout className="w-4 h-4 text-primary" />
                      Focus Areas
                    </h4>
                    <ul className="space-y-1">
                      {community.focus.map((area, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          {area}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-3xl mb-6 text-center">
              Community-Centered Approach
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-heading font-semibold text-xl mb-4">Local Leadership</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We work alongside community leaders, elders, and local organizations to ensure 
                  that our programs are culturally appropriate and community-owned. Traditional 
                  knowledge guides our environmental restoration efforts.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-heading font-semibold text-xl mb-4">Participatory Design</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Communities are active participants in designing, implementing, and monitoring 
                  all programs. This ensures initiatives address real needs and build local capacity 
                  for long-term sustainability.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-heading font-semibold text-xl mb-4">Economic Empowerment</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Environmental restoration creates economic opportunities through sustainable 
                  enterprises, improved agricultural productivity, and new green livelihood pathways 
                  for community members.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-heading font-semibold text-xl mb-4">Youth Engagement</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Young people are central to our work, serving as environmental champions, peer 
                  educators, and future leaders. Youth bring energy, innovation, and commitment to 
                  community transformation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto container-padding text-center">
          <h2 className="font-heading font-bold text-3xl mb-6">
            See Community Transformation in Action
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Explore the journeys of communities that have transformed degraded landscapes 
            into thriving ecosystems.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/transformation">View Transformation Stories</Link>
          </Button>
        </div>
      </section>

    </>
  );
};

export default Communities;
