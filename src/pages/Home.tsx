import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, Briefcase, ArrowRight, Palette, Target, Star, Quote } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Home = () => {
  const outils = [
    {
      icon: Palette,
      title: "ComColors®",
      description: "Modèle de personnalité pour optimiser les dynamiques d'équipe",
    },
    {
      icon: Target,
      title: "Indice de Cohésion d'Équipe",
      description: "Diagnostic complet pour mesurer et renforcer la cohésion",
    },
    {
      icon: Users,
      title: "Lego Serious Play",
      description: "Méthode innovante pour libérer la créativité collective",
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
              Révélez le potentiel de{" "}
              <span className="text-primary">vos équipes</span> et{" "}
              <span className="text-secondary">votre organisation</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8">
              Coach et formatrice certifiée, j'accompagne les organisations et entreprises 
              vers une meilleure cohésion d'équipe, performance collective et bien-être au travail 
              grâce à trois méthodes certifiées.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/outils">
                <Button size="lg" className="w-full sm:w-auto">
                  Découvrir mes outils
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

      {/* Tools Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Trois outils certifiés pour vos équipes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des méthodes éprouvées et reconnues pour accompagner vos organisations 
              vers l'excellence collective et le bien-être au travail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {outils.map((outil, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 animate-fade-in border-none bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <outil.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{outil.title}</h3>
                  <p className="text-muted-foreground">{outil.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/outils">
              <Button size="lg" variant="outline">
                Découvrir tous les outils
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ils m'ont fait confiance
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez les témoignages d'organisations qui ont transformé leurs équipes 
              grâce à mes accompagnements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder testimonials - à remplacer par de vrais témoignages */}
            <Card className="animate-fade-in border-none bg-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <Quote className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Entreprise A</h4>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "L'accompagnement a transformé notre équipe. Nous avons gagné en cohésion 
                  et en performance. Un investissement qui porte ses fruits."
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in border-none bg-card" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <Quote className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Organisation B</h4>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "Les outils utilisés nous ont permis de mieux comprendre nos dynamiques 
                  d'équipe et d'améliorer significativement notre communication."
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in border-none bg-card" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <Quote className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Société C</h4>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "Une approche professionnelle et des résultats concrets. Notre équipe 
                  est plus soudée et plus efficace qu'avant."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 rounded-3xl p-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Prêt à transformer votre équipe ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contactez-moi pour un premier échange et découvrez comment mes outils 
              certifiés peuvent accompagner votre organisation vers l'excellence.
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
