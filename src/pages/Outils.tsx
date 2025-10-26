import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Target, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const Outils = () => {
  const outils = [
    {
      icon: Palette,
      title: "ComColors®",
      description: "Un modèle de personnalité innovant pour comprendre et optimiser les dynamiques d'équipe",
      link: "/comcolors",
      features: [
        "6 types de personnalité représentés par des couleurs",
        "Compréhension des modes de communication",
        "Optimisation de la coopération en équipe",
        "Certification internationale reconnue"
      ]
    },
    {
      icon: Target,
      title: "Indice de Cohésion d'Équipe (ICE)",
      description: "Un outil diagnostic complet pour mesurer et renforcer la cohésion de vos équipes",
      link: "/ice",
      features: [
        "Questionnaire structuré de 72 énoncés",
        "Mesure des dynamiques individuelles et collectives",
        "Transformation des dimensions intangibles en leviers concrets",
        "Amélioration de la performance et du bien-être"
      ]
    },
    {
      icon: Users,
      title: "Lego Serious Play",
      description: "Une méthode innovante pour libérer la créativité et optimiser la réflexion collective",
      link: "/lsp",
      features: [
        "Participation à 100% de tous les membres",
        "Libération du potentiel créatif",
        "Prise de décisions plus rapides et efficaces",
        "Langage commun grâce aux briques LEGO®"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Outils et méthodes</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Découvrez les trois outils certifiés que j'utilise pour accompagner vos équipes 
            vers une meilleure cohésion, performance et bien-être au travail.
          </p>
        </div>

        {/* Introduction Section */}
        <Card className="animate-fade-in border-none bg-muted/30 mb-16">
          <CardContent className="p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
              Accompagnement d'équipes : un enjeu crucial
            </h2>
            <div className="max-w-4xl mx-auto space-y-4 text-muted-foreground">
              <p>
                Dans un monde professionnel en constante évolution, les organisations font face à des défis 
                majeurs : maintenir la cohésion d'équipe, optimiser la communication, et créer un environnement 
                de travail où chacun peut s'épanouir et contribuer pleinement.
              </p>
              <p>
                Les équipes performantes ne naissent pas par hasard. Elles se construisent grâce à une 
                compréhension fine des dynamiques humaines, des outils adaptés et un accompagnement 
                personnalisé qui respecte les spécificités de chaque organisation.
              </p>
              <p>
                C'est pourquoi j'ai choisi de me spécialiser dans <strong>trois méthodes certifiées</strong> 
                qui, combinées, offrent une approche complète pour transformer vos équipes et révéler 
                leur plein potentiel.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Tools Grid */}
        <div className="space-y-12 mb-16">
          {outils.map((outil, index) => (
            <Card
              key={index}
              className="animate-fade-in border-none bg-card hover:shadow-lg transition-shadow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 sm:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <outil.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{outil.title}</h3>
                    <p className="text-muted-foreground mb-6">{outil.description}</p>
                    <Link to={outil.link}>
                      <Button size="lg" className="w-full sm:w-auto">
                        En savoir plus
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>

                  <div className="lg:col-span-2">
                    <h4 className="font-semibold mb-4 text-lg">
                      Points clés de cette méthode :
                    </h4>
                    <ul className="space-y-3">
                      {outil.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in">
          <Card className="max-w-2xl mx-auto border-none bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10">
            <CardContent className="p-8 sm:p-12">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Prêt à transformer votre équipe ?
              </h3>
              <p className="text-muted-foreground mb-6">
                Découvrez comment ces outils peuvent s'adapter aux spécificités de votre organisation 
                et accompagner vos équipes vers l'excellence.
              </p>
              <Link to="/contact">
                <Button size="lg">
                  Planifier un échange
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

export default Outils;
