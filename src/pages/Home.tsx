import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, Briefcase, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Home = () => {
  const services = [
    {
      icon: Users,
      title: "Accompagnement individuel",
      description: "Découvrez votre personnalité et développez votre potentiel",
    },
    {
      icon: Heart,
      title: "Accompagnement de couple",
      description: "Renforcez votre relation grâce à une meilleure compréhension mutuelle",
    },
    {
      icon: Briefcase,
      title: "Formation en entreprise",
      description: "Optimisez la coopération et la performance de vos équipes",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.85)), url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Révélez le meilleur de{" "}
              <span className="text-primary">vous-même</span> et de{" "}
              <span className="text-secondary">vos équipes</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8">
              Coach et formatrice certifiée Comcolors®, j'accompagne les individus,
              les couples et les entreprises vers une meilleure compréhension de soi
              et une coopération harmonieuse.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
                <Button size="lg" className="w-full sm:w-auto">
                  Découvrir mes services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Me contacter
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Des accompagnements sur mesure
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Que vous soyez un individu en quête de développement personnel, un
              couple souhaitant renforcer sa relation, ou une entreprise cherchant à
              améliorer la cohésion d'équipe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 animate-fade-in border-none bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" variant="outline">
                Voir tous les services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 rounded-3xl p-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Prêt·e à transformer votre quotidien ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contactez-moi pour un premier échange et découvrez comment le modèle
              Comcolors® peut vous aider.
            </p>
            <Link to="/contact">
              <Button size="lg">
                Prendre rendez-vous
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
