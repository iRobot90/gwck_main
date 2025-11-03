import {
  TreePine, 
  GraduationCap, 
  Leaf, 
  Sprout, 
  Heart, 
  Users, 
  Droplets,
  ExternalLink 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";

const youthImage = "/assets/youth-education.jpg";

const Initiatives = () => {
  const initiatives = [
    {
      id: "climate-literacy",
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Climate Literacy & Youth Empowerment",
      motivation: "Young people are at the forefront of climate change impacts yet often lack the knowledge and tools to respond effectively.",
      activities: [
        "School-based climate education programs",
        "Youth environmental clubs and leadership training",
        "Community awareness campaigns",
        "Peer-to-peer education initiatives",
        "Green career pathways and skills development"
      ],
      outcomes: "Over 10,000 youth equipped with climate knowledge, hundreds trained as environmental champions, and measurable behavior change in communities."
    },
    {
      id: "agroecology",
      icon: <Leaf className="w-6 h-6" />,
      title: "Agroecology & Sustainable Livelihoods",
      motivation: "Coastal communities face declining soil fertility, water scarcity, and limited economic opportunities, creating a need for sustainable farming approaches.",
      activities: [
        "Training in agroforestry and permaculture techniques",
        "Support for indigenous seed systems",
        "Farmer field schools and demonstration plots",
        "Market linkages for sustainable products",
        "Climate-smart agriculture practices"
      ],
      outcomes: "Improved soil health, increased crop yields, diversified income streams, and enhanced food security for farming families."
    },
    {
      id: "afforestation",
      icon: <TreePine className="w-6 h-6" />,
      title: "Afforestation, Reforestation & Kaya Forest Restoration",
      motivation: "Sacred Kaya forests and coastal woodlands have been severely degraded, threatening biodiversity, cultural heritage, and ecosystem services.",
      activities: [
        "Community-led tree planting initiatives",
        "Native species nursery establishment",
        "Kaya forest boundary demarcation and protection",
        "Collaboration with traditional forest elders",
        "Ecosystem monitoring and research"
      ],
      outcomes: "Over 500,000 trees planted, multiple Kaya forests under improved protection, and enhanced community stewardship of forest resources."
    },
    {
      id: "systems-approach",
      icon: <Droplets className="w-6 h-6" />,
      title: "Systems-Based Approach to Resilience",
      motivation: "Environmental, social, and economic challenges are interconnected and require holistic solutions.",
      activities: [
        "Integrated watershed management",
        "Mangrove restoration and coastal protection",
        "Community-based adaptation planning",
        "Multi-stakeholder partnerships",
        "Indigenous knowledge integration"
      ],
      outcomes: "Strengthened community resilience, improved ecosystem health, and sustainable natural resource management systems."
    },
    {
      id: "food-security",
      icon: <Sprout className="w-6 h-6" />,
      title: "Food Security & Agroforestry",
      motivation: "Malnutrition and food insecurity remain significant challenges in coastal communities, exacerbated by climate variability.",
      activities: [
        "Promotion of indigenous and drought-resistant crops",
        "Kitchen garden establishment",
        "Nutrition education and cooking demonstrations",
        "School feeding programs with local produce",
        "Food processing and value addition"
      ],
      outcomes: "Improved household nutrition, reduced food insecurity, and enhanced agricultural biodiversity."
    }
  ];

  const specialPrograms = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Maternal Health & Family Planning",
      description: "Integrating reproductive health services with environmental programs to support women's wellbeing and sustainable population growth."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Nutrition Project",
      description: "Community-based nutrition education combined with home gardens to combat malnutrition and improve child health outcomes."
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Social Enterprise: Cold-Pressed Coconut Oil",
      description: "Supporting women's cooperatives in producing high-quality coconut oil, creating income while utilizing local resources sustainably."
    }
  ];

  return (
    <>
      <Hero
        image={youthImage}
        title="Our Initiatives"
        subtitle="Comprehensive programs addressing environmental restoration and community development"
      />

      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our initiatives are designed to create lasting impact through integrated approaches 
              that address the root causes of environmental degradation and social vulnerability.
            </p>
          </div>

          <div className="space-y-12">
            {initiatives.map((initiative, index) => (
              <Card key={initiative.id} className="border-border animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                      {initiative.icon}
                    </div>
                    <div>
                      <CardTitle className="font-heading text-2xl mb-2">
                        {initiative.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        <span className="font-medium text-foreground">Why it matters: </span>
                        {initiative.motivation}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-heading font-semibold mb-3">Key Activities</h4>
                      <ul className="space-y-2">
                        {initiative.activities.map((activity, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold mb-3">Outcomes & Impact</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {initiative.outcomes}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto container-padding">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-4">
            Special Programs
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Targeted interventions addressing specific community needs
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {specialPrograms.map((program, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    {program.icon}
                  </div>
                  <CardTitle className="font-heading text-xl">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{program.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AIRS Program */}
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="container mx-auto container-padding text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
            AIRS Program
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Our flagship Agricultural Innovation and Resilience Systems program integrates 
            all our initiatives into a comprehensive approach to sustainable development.
          </p>
          <Button 
            size="lg" 
            variant="outline" 
            asChild 
            className="bg-transparent border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary"
          >
            <a 
              href="https://www.airsgreenworld.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Visit AIRS Portal
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </section>

    </>
  );
};

export default Initiatives;
