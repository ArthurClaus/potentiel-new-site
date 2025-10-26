import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Target, Users, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import comcolorsIllustration from "@/assets/comcolors-illustration.jpg";

const Comcolors = () => {
  const benefits = [
    {
      icon: Palette,
      title: "Comprendre sa personnalité",
      description:
        "Identifiez vos forces, vos modes de communication et vos besoins fondamentaux.",
    },
    {
      icon: Target,
      title: "Améliorer sa communication",
      description:
        "Adaptez votre communication pour mieux vous faire comprendre et comprendre les autres.",
    },
    {
      icon: Users,
      title: "Renforcer la coopération",
      description:
        "Valorisez les complémentarités au sein de votre équipe ou de votre couple.",
    },
    {
      icon: TrendingUp,
      title: "Développer son potentiel",
      description:
        "Utilisez vos talents naturels et travaillez sur vos axes de développement.",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Le modèle Comcolors®</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un outil puissant pour mieux se connaître et coopérer efficacement
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="animate-fade-in-left">
            <img
              src={comcolorsIllustration}
              alt="Illustration Comcolors"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Qu'est-ce que Comcolors® ?</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>Comcolors®</strong> est un modèle de personnalité innovant et
                accessible qui permet de mieux comprendre son propre fonctionnement et
                celui des autres.
              </p>
              <p>
                Basé sur une approche visuelle et ludique, il identifie{" "}
                <strong>6 types de personnalité</strong> représentés par des couleurs.
                Chacun d'entre nous possède un profil unique, avec une couleur
                dominante et des couleurs secondaires.
              </p>
              <p>
                Ce modèle permet de prendre conscience de nos forces, de nos modes de
                communication préférés, de nos besoins et de nos réactions face au
                stress.
              </p>
              <p>
                Spécialement adapté aux organisations, Comcolors® offre des clés concrètes 
                pour améliorer la coopération d'équipe et optimiser les performances collectives.
              </p>
            </div>
          </div>
        </div>

        {/* Origin and Innovation Section */}
        <Card className="animate-fade-in border-none bg-muted/30 mb-16">
          <CardContent className="p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
              Origine et innovation du modèle Comcolors®
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-4">Origine du modèle</h4>
                <p className="text-muted-foreground mb-4">
                  Comcolors® a été développé par des experts en psychologie et en management, 
                  combinant les meilleures approches de la psychologie des couleurs et de 
                  l'analyse comportementale.
                </p>
                <p className="text-muted-foreground">
                  Le modèle s'appuie sur des recherches approfondies en psychologie cognitive 
                  et sociale, offrant une approche scientifique rigoureuse tout en restant 
                  accessible et pratique.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-4">Pourquoi c'est innovant ?</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Approche visuelle :</strong> Utilise les couleurs comme langage universel</li>
                  <li>• <strong>Simplicité d'usage :</strong> Accessible sans formation préalable</li>
                  <li>• <strong>Rapidité :</strong> Diagnostic en quelques minutes</li>
                  <li>• <strong>Efficacité prouvée :</strong> Résultats mesurables en entreprise</li>
                  <li>• <strong>Reconnaissance internationale :</strong> Certifications et prix remportés</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Benefits Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 animate-fade-in">
            Les bénéfices de Comcolors®
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
        <Card className="animate-fade-in border-none bg-muted/30 mb-16">
          <CardContent className="p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
              Applications en entreprise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-3">Cohésion d'équipe</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Comprendre les complémentarités</li>
                  <li>• Valoriser les différences</li>
                  <li>• Améliorer la collaboration</li>
                  <li>• Renforcer l'esprit d'équipe</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3">Management et leadership</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Adapter son style de management</li>
                  <li>• Optimiser la communication</li>
                  <li>• Développer l'intelligence collective</li>
                  <li>• Prévenir les conflits</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3">Performance collective</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Optimiser les processus de travail</li>
                  <li>• Améliorer la productivité</li>
                  <li>• Stimuler l'innovation</li>
                  <li>• Favoriser le bien-être au travail</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center animate-fade-in">
          <Card className="max-w-2xl mx-auto border-none bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10">
            <CardContent className="p-8 sm:p-12">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Envie d'en savoir plus ?
              </h3>
              <p className="text-muted-foreground mb-6">
                Découvrez comment le modèle Comcolors® peut vous aider à atteindre vos
                objectifs personnels ou professionnels.
              </p>
              <Link to="/contact">
                <Button size="lg">
                  Réserver un premier échange
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

export default Comcolors;
