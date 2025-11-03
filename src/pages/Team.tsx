import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";
import Hero from "@/components/Hero";
import communityImage from "@/assets/community-work.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Khamis Mbwana",
      role: "Executive Director",
      bio: "Environmental scientist with 15+ years leading community conservation initiatives."
    },
    {
      name: "Amina Hassan",
      role: "Programs Coordinator",
      bio: "Specializes in participatory development and community engagement strategies."
    },
    {
      name: "John Mwangi",
      role: "Agroforestry Lead",
      bio: "Agronomist focused on sustainable farming systems and climate adaptation."
    },
    {
      name: "Grace Wanjiru",
      role: "Youth & Education Officer",
      bio: "Passionate about empowering young environmental champions across Kenya."
    },
    {
      name: "Omar Said",
      role: "Forest Conservation Specialist",
      bio: "Works with traditional communities on Kaya forest protection and restoration."
    },
    {
      name: "Fatuma Ali",
      role: "Community Outreach Manager",
      bio: "Builds partnerships and ensures community voices guide all programs."
    }
  ];

  return (
    <>
      <Hero
        image={communityImage}
        title="Our Team"
        subtitle="Dedicated professionals working alongside communities for environmental restoration"
      />

      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              GWC-K's team combines environmental expertise with deep community connections. 
              We work collaboratively with community members, traditional leaders, and local 
              organizations to drive lasting change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <Card 
                key={index} 
                className="border-border hover:shadow-lg transition-smooth animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="font-heading text-xl text-center">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-center font-medium text-primary">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Partners */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto container-padding">
          <h2 className="font-heading font-bold text-3xl text-center mb-6">
            Community Leadership
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our work is guided by traditional elders, community leaders, and grassroots 
            organizations who know their lands and needs best.
          </p>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            <Card className="border-border">
              <CardHeader className="text-center">
                <CardTitle className="font-heading text-lg">Traditional Elders</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Kaya forest custodians and traditional knowledge keepers who guide 
                  our conservation approaches
                </p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardHeader className="text-center">
                <CardTitle className="font-heading text-lg">Youth Leaders</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Young environmental champions driving peer education and community 
                  mobilization
                </p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardHeader className="text-center">
                <CardTitle className="font-heading text-lg">Farmer Associations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Local agricultural groups implementing and sharing sustainable farming 
                  practices
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </>
  );
};

export default Team;
