import Hero from "@/components/Hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Leaf, Droplets } from "lucide-react";

const transformationImage = "/assets/transformation.jpg";

const Transformation = () => {
  const transformations = [
    {
      community: "Bongwe Village",
      county: "Kilifi",
      before: "Degraded farmland with poor soil quality and limited crop diversity",
      after: "Thriving agroforestry system with 15+ tree species and improved food security",
      impact: "Average household income increased by 45% through diversified farm products",
      timeline: "2018 - 2024",
      icon: <Leaf className="w-6 h-6" />
    },
    {
      community: "Mwache Mangrove Site",
      county: "Mombasa",
      before: "3 hectares of degraded mangrove area with severe coastal erosion",
      after: "Restored mangrove forest with healthy biodiversity and protected shoreline",
      impact: "Over 15,000 mangrove seedlings planted, coastal fishing yields improved by 30%",
      timeline: "2016 - 2024",
      icon: <Droplets className="w-6 h-6" />
    },
    {
      community: "Diani Youth Green Network",
      county: "Kwale",
      before: "Youth unemployment at 60%, limited environmental awareness",
      after: "Active youth environmental movement with 200+ trained champions",
      impact: "40 youth-led green businesses established, 8 schools with active eco-clubs",
      timeline: "2019 - 2024",
      icon: <Users className="w-6 h-6" />
    },
    {
      community: "Kaya Kinondo Sacred Forest",
      county: "Kwale",
      before: "Encroachment and degradation threatening 30-hectare sacred forest",
      after: "Protected forest with community-managed conservation and eco-tourism",
      impact: "Biodiversity recovered, 25 local families earning from sustainable eco-tourism",
      timeline: "2015 - 2024",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  return (
    <>
      <Hero
        image={transformationImage}
        title="Community Transformation"
        subtitle="Witnessing the journey from degradation to regeneration across coastal Kenya"
      />

      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Real change takes time, commitment, and partnership. These stories showcase the 
              remarkable transformations that occur when communities lead their own environmental 
              restoration and sustainable development journeys.
            </p>
          </div>

          {/* TODO: Restore shapefiles before/after map */}
          <section className="section-padding">
            <div className="container mx-auto container-padding">
              <div className="bg-muted/30 border border-border rounded-lg p-6 text-sm text-muted-foreground">
                Map placeholder — integrate Restore shapefile layers here for before/after visualization (e.g., MapLibre/Leaflet with shapefile → GeoJSON/tiles).
              </div>
            </div>
          </section>

          <div className="space-y-8">
            {transformations.map((story, index) => (
              <Card 
                key={index} 
                className="border-border overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="bg-muted/30">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="font-heading text-2xl mb-2">
                        {story.community}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">{story.county} County</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      {story.icon}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium mt-2">
                    Timeline: {story.timeline}
                  </p>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-heading font-semibold mb-2 text-sm uppercase tracking-wide text-muted-foreground">
                        Before
                      </h4>
                      <p className="text-sm">
                        {story.before}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold mb-2 text-sm uppercase tracking-wide text-primary">
                        After
                      </h4>
                      <p className="text-sm font-medium">
                        {story.after}
                      </p>
                    </div>
                  </div>
                  <div className="bg-accent/10 rounded-lg p-4">
                    <h4 className="font-heading font-semibold mb-2 text-sm flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-accent" />
                      Measured Impact
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {story.impact}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Roadmap */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto container-padding">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-6">
            Our Transformation Approach
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A structured, participatory process that ensures sustainable, community-owned change
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  phase: "Phase 1: Community Engagement",
                  duration: "3-6 months",
                  description: "Building trust, conducting participatory assessments, and co-designing interventions with community members"
                },
                {
                  phase: "Phase 2: Capacity Building",
                  duration: "6-12 months",
                  description: "Training in sustainable practices, establishing demonstration sites, and developing local leadership"
                },
                {
                  phase: "Phase 3: Implementation",
                  duration: "1-3 years",
                  description: "Rolling out full interventions, establishing community enterprises, and monitoring progress"
                },
                {
                  phase: "Phase 4: Sustainability",
                  duration: "Ongoing",
                  description: "Transitioning to community management, maintaining support networks, and scaling successful approaches"
                }
              ].map((phase, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className="flex-1 bg-card border border-border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-heading font-semibold">{phase.phase}</h3>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                        {phase.duration}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <h2 className="font-heading font-bold text-3xl text-center mb-12">
            Voices from Our Communities
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-border">
              <CardContent className="pt-6">
                <p className="text-muted-foreground italic mb-4">
                  "Before GWC-K, our farm produced barely enough to feed our family. Now with the 
                  trees and new techniques, we have surplus to sell at the market. My children 
                  are healthier and can stay in school."
                </p>
                <p className="font-heading font-semibold">— Mary Kadzo</p>
                <p className="text-sm text-muted-foreground">Farmer, Kilifi</p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="pt-6">
                <p className="text-muted-foreground italic mb-4">
                  "As a youth leader, I now have the knowledge and confidence to teach others 
                  about climate change. We've started three environmental clubs in our area and 
                  planted over 1,000 trees."
                </p>
                <p className="font-heading font-semibold">— James Odhiambo</p>
                <p className="text-sm text-muted-foreground">Youth Champion, Kwale</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </>
  );
};

export default Transformation;
