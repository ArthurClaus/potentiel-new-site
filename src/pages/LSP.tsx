import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Puzzle, Users, Lightbulb, ArrowRight, CheckCircle2, Brain, Target, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const LSP = () => {
  const benefits = [
    {
      icon: Users,
      title: "Participation à 100%",
      description: "Chaque membre de l'équipe participe activement, libérant le potentiel créatif de tous."
    },
    {
      icon: Brain,
      title: "Réflexion optimisée",
      description: "La manipulation des briques active différentes zones du cerveau pour une réflexion plus profonde."
    },
    {
      icon: Target,
      title: "Décisions efficaces",
      description: "Prenez ensemble des décisions meilleures et plus rapides grâce à une approche structurée."
    },
    {
      icon: Zap,
      title: "Communication fluide",
      description: "Les briques LEGO® créent un langage commun qui facilite l'expression et la compréhension."
    }
  ];

  const applications = [
    {
      title: "Stratégie et vision",
      description: "Définir ensemble la vision d'avenir et les orientations stratégiques de l'organisation"
    },
    {
      title: "Résolution de problèmes",
      description: "Aborder les défis complexes de manière créative et collaborative"
    },
    {
      title: "Cohésion d'équipe",
      description: "Renforcer les liens et améliorer la collaboration entre les membres"
    },
    {
      title: "Innovation",
      description: "Stimuler la créativité et générer de nouvelles idées de manière structurée"
    },
    {
      title: "Gestion du changement",
      description: "Accompagner les transformations organisationnelles en impliquant tous les acteurs"
    },
    {
      title: "Communication",
      description: "Améliorer la communication interpersonnelle et la compréhension mutuelle"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Lego Serious Play</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une méthode innovante pour libérer la créativité et optimiser la réflexion collective
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="animate-fade-in-left">
            <Card className="border-none bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                  <Puzzle className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-6">Qu'est-ce que Lego Serious Play ?</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    La méthode <strong>LEGO® SERIOUS PLAY®</strong> est un outil de jeu sérieux 
                    qui optimise la réflexion, la communication et la résolution de problèmes 
                    dans les organisations.
                  </p>
                  <p>
                    Cette approche favorise une <strong>participation à 100%</strong> de tous 
                    et toutes en libérant le potentiel créatif de chaque personne.
                  </p>
                  <p>
                    Le processus permet aussi de prendre ensemble des décisions meilleures et 
                    plus rapides grâce à l'utilisation des briques LEGO® qui créent un 
                    langage commun et impliquent activement chaque personne.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col justify-center animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">Les principes clés</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">Approche ludique et sérieuse</h4>
                  <p className="text-muted-foreground text-sm">
                    Utilise le jeu pour aborder des enjeux professionnels complexes
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">Participation universelle</h4>
                  <p className="text-muted-foreground text-sm">
                    Chaque participant contribue activement, sans hiérarchie
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">Langage commun</h4>
                  <p className="text-muted-foreground text-sm">
                    Les briques créent un vocabulaire partagé pour tous
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">Résultats concrets</h4>
                  <p className="text-muted-foreground text-sm">
                    Débouche sur des actions et décisions mesurables
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 animate-fade-in">
            Les bénéfices de Lego Serious Play
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

        {/* Applications Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 animate-fade-in">
            Applications en entreprise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((application, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 animate-fade-in border-none bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-3">{application.title}</h4>
                  <p className="text-muted-foreground text-sm">{application.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <Card className="animate-fade-in border-none bg-muted/30 mb-16">
          <CardContent className="p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
              Comment se déroule une session Lego Serious Play ?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-primary">1</span>
                </div>
                <h4 className="font-semibold text-lg mb-3">Préparation</h4>
                <p className="text-muted-foreground text-sm">
                  Définition de l'objectif et préparation de l'environnement
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-primary">2</span>
                </div>
                <h4 className="font-semibold text-lg mb-3">Construction</h4>
                <p className="text-muted-foreground text-sm">
                  Chaque participant construit son modèle avec les briques LEGO®
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-primary">3</span>
                </div>
                <h4 className="font-semibold text-lg mb-3">Partage</h4>
                <p className="text-muted-foreground text-sm">
                  Présentation et échange autour des modèles construits
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-primary">4</span>
                </div>
                <h4 className="font-semibold text-lg mb-3">Action</h4>
                <p className="text-muted-foreground text-sm">
                  Définition des actions concrètes à mettre en œuvre
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
                Prêt à libérer la créativité de votre équipe ?
              </h3>
              <p className="text-muted-foreground mb-6">
                Découvrez comment Lego Serious Play peut transformer la façon dont votre équipe 
                réfléchit, communique et prend des décisions.
              </p>
              <Link to="/contact">
                <Button size="lg">
                  Organiser une session LSP
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

export default LSP;
