import Hero from "@/components/Hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin, Twitter, Mail } from "lucide-react";

const communityImage = "/assets/community-work.jpg";
const placeholderImage = "/images/logo.png?height=300&width=300";

const Team = () => {
  const teamMembers = [
    {
      name: "Caroline Dama",
      role: "Country Coordinator, Green World Campaign Kenya",
      bio: "Dama is the Country Coordinator of Green World Campaign Kenya. She manages grants, human resources, resource mobilization, and leads regenerative projects with indigenous coastal communities and institutions.",
      image: "/images/logo.png?height=300&width=300",
      social: {
        linkedin: "https://www.linkedin.com/in/caroline-dama-902264116/",
        twitter: "#",
        email: "dama@greenworld.org",
      },
    },
    {
      name: "Lydia Anyango",
      role: "Programs Coordinator",
      bio: "Lydia fosters a safe environment for adolescents, youth, and young mothers. She facilitates discussions on Sexual Reproductive Health and Rights (SRHR) and connects SRHR with environmental sustainability through community initiatives promoting trees and nature.",
      image: "/images/team/lydia-removebg-preview.png",
      social: {
        linkedin: "https://www.linkedin.com/in/lydia-anyango-ba7b07138/",
        twitter: "#",
        email: "lydia@greenworld.org",
      },
    },
    {
      name: "Isaac Otieno",
      role: "Monitoring, Evaluation & Learning (MEL) Specialist",
      bio: "Isaac develops systems to assess program effectiveness, analyzes data, and promotes continuous improvement to ensure impactful initiatives. He oversees data collection, employs statistical tools, and communicates findings to inform strategic decisions.",
      image: "/images/logo.png?height=300&width=300",
      social: {
        linkedin: "https://www.linkedin.com/in/isaac-otieno-216b231a2/",
        twitter: "#",
        email: "isaacnewton@greenworld.org",
      },
    },
    {
      name: "Christine Pendo",
      role: "Community Health and Development Social Worker",
      bio: "Christine empowers communities with health knowledge, including reproductive health, mental health, and life skills. She promotes nutrition and sustainable food sources, aiding climate adaptation and food security in ASAL communities.",
      image: "/images/team/pendo-removebg-preview.png",
      social: {
        linkedin: "https://www.linkedin.com/in/christine-karisa-872556225/",
        twitter: "#",
        email: "christinependo@greenworld.org",
      },
    },
    {
      name: "Mary Tsuma",
      role: "Program Officer (Samburu & Kwale)",
      bio: "Mary Tsuma oversees over 24 sites, training schools and indigenous coastal communities in arid lands. She supports model sites like Miyani Primary School, promoting regenerative agroforestry, water harvesting, and inclusive economic empowerment.",
      image: "/images/logo.png?height=300&width=300",
      social: {
        linkedin: "https://www.linkedin.com/in/mary-tsuma-26795a219/",
        twitter: "#",
        email: "#",
      },
    },
    {
      name: "Juma Gassambi",
      role: "Program Officer (Matuga & Kinango, Kwale)",
      bio: "Juma promotes environmental awareness and regenerative practices, training pupils and communities on setting up nurseries, syntropic farming, and mangrove restoration. He supports biodiversity and natural water harvesting.",
      image: "/images/logo.png?height=300&width=300",
      social: {
        linkedin: "https://www.linkedin.com/in/juma-gassambi-7aa087212/",
        twitter: "#",
        email: "#",
      },
    },
    {
      name: "Juma Kazungu",
      role: "Program Officer (Kilifi)",
      bio: "Juma promotes environmental awareness and trains communities on tree nurseries, natural water harvesting, and building food forests. He collaborates with Kenya Forest Service on mangrove restoration.",
      image: "/images/team/JUMA_KAZUNGU-removebg-preview.png",
      social: {
        linkedin: "https://www.linkedin.com/in/juma-kazungu-50b985211/",
        twitter: "#",
        email: "#",
      },
    },
    {
      name: "Lucas Kitsao",
      role: "Social Enterprise Coordinator",
      bio: "Lucas manages GWC's farm-level processing of moringa and coconut products, including virgin coconut oil, creating market access for rural communities and ensuring fair compensation. He connects producers with global markets, promoting sustainable livelihoods.",
      image: "/images/logo.png?height=300&width=300",
      social: {
        linkedin: "https://www.linkedin.com/in/lucas-kitsao-517b61211/",
        twitter: "#",
        email: "#",
      },
    },
    {
      name: "Morgan Mgute",
      role: "Social Enterprise Intern",
      bio: "Mgute specializes in the production and promotion of coconut oil within GWC's social enterprise, contributing to community empowerment and sustainable income generation.",
      image: "/images/team/morgan-removebg-preview.png",
      social: {
        linkedin: "https://www.linkedin.com/in/morgan-mgute-210579263/",
        twitter: "#",
        email: "morganmgute@greenworld.org",
      },
    },
    {
      name: "Conny Mwaka",
      role: "Community Health Worker",
      bio: "Conny serves as a bridge between health services and communities, delivering crucial information on reproductive health and life skills. She advocates for sustainable nutrition and climate-resilient agriculture to ensure food security in all regions, driving positive change from the ground up.",
      image: "/images/team/conny-removebg-preview.png",
      social: {
        linkedin: "https://www.linkedin.com/in/conny-mwaka-25a510316/",
        twitter: "#",
        email: "connymwaka0@gmail.com",
      },
    },
    {
      name: "Shanga Mbuli",
      role: "Programs Officer",
      bio: "Shanga is the GWC-K's programs officer whose role is to mainly promote environmental awareness and sustainable practices by training pupils in both public and private institutions and community groups on how to establish tree and vegetable nurseries. With a goal to ensure reforestation, food production, and biodiversity enhancement in line with GWC-K's holistic intervention model.",
      image: "/images/logo.png?height=300&width=300",
      social: {
        linkedin: "https://www.linkedin.com/in/mbuli-shanga-07547221a/",
        twitter: "#",
        email: "#",
      },
    },
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
                  <img
                    src={member.image || placeholderImage}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border border-border"
                  />
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
                  {member.social && (
                    <div className="flex items-center justify-center gap-4 mt-4">
                      {member.social.linkedin && member.social.linkedin !== "#" && (
                        <a href={member.social.linkedin} target="_blank" rel="noreferrer" aria-label={`${member.name} LinkedIn`} className="text-muted-foreground hover:text-primary transition-colors">
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {member.social.twitter && member.social.twitter !== "#" && (
                        <a href={member.social.twitter} target="_blank" rel="noreferrer" aria-label={`${member.name} Twitter`} className="text-muted-foreground hover:text-primary transition-colors">
                          <Twitter className="w-5 h-5" />
                        </a>
                      )}
                      {member.social.email && member.social.email !== "#" && (
                        <a href={`mailto:${member.social.email}`} aria-label={`${member.name} Email`} className="text-muted-foreground hover:text-primary transition-colors">
                          <Mail className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  )}
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
