import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Heart, Briefcase, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Accompagnement individuel",
      description:
        "Un parcours personnalisé pour mieux vous connaître et développer votre potentiel.",
      details: [
        "Bilan de personnalité Comcolors®",
        "Identification de vos forces et axes de développement",
        "Amélioration de votre communication",
        "Développement de la confiance en soi",
        "Gestion des émotions et du stress",
      ],
    },
    {
      icon: Heart,
      title: "Accompagnement de couple",
      description:
        "Renforcez votre relation grâce à une meilleure compréhension mutuelle.",
      details: [
        "Analyse des profils de personnalité de chaque partenaire",
        "Compréhension des différences et complémentarités",
        "Amélioration de la communication dans le couple",
        "Résolution des conflits",
        "Renforcement de la complicité",
      ],
    },
    {
      icon: Briefcase,
      title: "Formation en entreprise",
      description:
        "Des formations sur mesure pour optimiser la performance et le bien-être de vos équipes.",
      details: [
        "Cohésion d'équipe et intelligence collective",
        "Management et leadership",
        "Communication interpersonnelle",
        "Gestion du stress et prévention du burn-out",
        "Développement des soft skills",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Mes services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des accompagnements personnalisés basés sur le modèle Comcolors® pour
            vous aider à atteindre vos objectifs
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="animate-fade-in border-none bg-card hover:shadow-lg transition-shadow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 sm:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>

                  <div className="lg:col-span-2">
                    <h4 className="font-semibold mb-4 text-lg">
                      Ce que je vous propose :
                    </h4>
                    <ul className="space-y-3">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <Card className="max-w-2xl mx-auto border-none bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10">
            <CardContent className="p-8 sm:p-12">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Une question ? Un projet ?
              </h3>
              <p className="text-muted-foreground mb-6">
                N'hésitez pas à me contacter pour discuter de vos besoins et voir
                comment je peux vous accompagner.
              </p>
              <Link to="/contact">
                <Button size="lg">
                  Me contacter
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Services;
