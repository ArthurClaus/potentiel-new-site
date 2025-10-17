import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import nathaliePortrait from "@/assets/nathalie-portrait.jpg";

const About = () => {
  const values = [
    "Bienveillance et écoute active",
    "Professionnalisme et expertise",
    "Respect de l'unicité de chacun",
    "Approche pratique et concrète",
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">À propos</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez mon parcours et ma passion pour le développement humain
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="animate-fade-in-left">
            <img
              src={nathaliePortrait}
              alt="Nathalie Flament"
              className="rounded-2xl shadow-lg w-full object-cover aspect-square"
            />
          </div>

          <div className="flex flex-col justify-center animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Nathalie Flament</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Passionnée par l'humain et convaincue que chaque personne possède un
                potentiel unique, j'ai choisi de me former au coaching et à
                l'accompagnement en développement personnel.
              </p>
              <p>
                Certifiée dans le modèle <strong>Comcolors®</strong>, je me suis
                spécialisée dans la compréhension des personnalités et des modes de
                communication. Cette approche me permet d'accompagner mes clients avec
                des outils concrets et efficaces.
              </p>
              <p>
                Basée en Belgique, j'interviens auprès d'individus, de couples et
                d'entreprises désireux d'améliorer leur bien-être, leur communication
                et leur coopération.
              </p>
              <p>
                Mon objectif ? Vous aider à mieux vous comprendre, à valoriser vos
                forces et à construire des relations plus harmonieuses, tant dans
                votre vie personnelle que professionnelle.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <Card className="animate-fade-in border-none bg-muted/30">
          <CardContent className="p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
              Mes valeurs
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg">{value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
