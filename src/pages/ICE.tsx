import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Users, TrendingUp, ArrowRight, CheckCircle2, BarChart3, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const ICE = () => {
  const benefits = [
    {
      icon: BarChart3,
      title: "Diagnostic précis",
      description: "Mesurez objectivement la cohésion de votre équipe avec un questionnaire structuré de 72 énoncés."
    },
    {
      icon: Users,
      title: "Dynamiques collectives",
      description: "Comprenez les interactions entre les membres et identifiez les leviers d'amélioration."
    },
    {
      icon: Heart,
      title: "Bien-être au travail",
      description: "Renforcez à la fois la performance collective et le bien-être de vos collaborateurs."
    },
    {
      icon: TrendingUp,
      title: "Performance mesurable",
      description: "Transformez des dimensions intangibles en leviers concrets d'action."
    }
  ];

  const dimensions = [
    {
      title: "Clarté",
      description: "La compréhension des objectifs, rôles et attentes au sein de l'équipe"
    },
    {
      title: "Communication",
      description: "La qualité des échanges et la fluidité de l'information"
    },
    {
      title: "Connexion",
      description: "Les liens interpersonnels et la cohésion humaine"
    },
    {
      title: "Collaboration",
      description: "L'efficacité du travail en commun et la complémentarité"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">L'Indice de Cohésion d'Équipe (ICE)</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un outil diagnostic complet pour donner du souffle à votre équipe
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="animate-fade-in-left">
            <Card className="border-none bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-6">Qu'est-ce que l'ICE ?</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    L'<strong>Indice de Cohésion d'Équipe (ICE)</strong> permet de mesurer, 
                    comprendre et faire évoluer les dynamiques d'équipe de manière objective et structurée.
                  </p>
                  <p>
                    Il transforme des dimensions souvent perçues comme intangibles, telles que la clarté, 
                    la communication, la connexion et la collaboration, en leviers concrets d'action 
                    pour renforcer à la fois la performance collective et le bien-être au travail.
                  </p>
                  <p>
                    L'ICE s'appuie sur un <strong>questionnaire structuré de 72 énoncés</strong>, 
                    répartis entre les dynamiques individuelles (« Je ») et collectives (« Nous »).
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col justify-center animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">Les 4 dimensions clés</h3>
            <div className="space-y-6">
              {dimensions.map((dimension, index) => (
                <Card key={index} className="border-none bg-card">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-lg mb-2">{dimension.title}</h4>
                    <p className="text-muted-foreground">{dimension.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 animate-fade-in">
            Les bénéfices de l'ICE
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 animate-fade-in border-none bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <benefit.icon className="h-7 w-7 text-secondary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3">{benefit.title}</h4>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <Card className="animate-fade-in border-none bg-muted/30 mb-16">
          <CardContent className="p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
              Comment se déroule l'accompagnement ICE ?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-primary">1</span>
                </div>
                <h4 className="font-semibold text-lg mb-3">Diagnostic</h4>
                <p className="text-muted-foreground">
                  Administration du questionnaire ICE à tous les membres de l'équipe
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-primary">2</span>
                </div>
                <h4 className="font-semibold text-lg mb-3">Analyse</h4>
                <p className="text-muted-foreground">
                  Traitement des données et identification des axes d'amélioration prioritaires
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-primary">3</span>
                </div>
                <h4 className="font-semibold text-lg mb-3">Action</h4>
                <p className="text-muted-foreground">
                  Mise en place d'un plan d'action personnalisé et suivi des progrès
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center animate-fade-in">
          <Card className="max-w-2xl mx-auto border-none bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10">
            <CardContent className="p-8 sm:p-12">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Prêt à mesurer et améliorer la cohésion de votre équipe ?
              </h3>
              <p className="text-muted-foreground mb-6">
                Découvrez comment l'ICE peut vous aider à identifier les leviers d'amélioration 
                et transformer les dynamiques de votre équipe.
              </p>
              <Link to="/contact">
                <Button size="lg">
                  Planifier un diagnostic ICE
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

export default ICE;
