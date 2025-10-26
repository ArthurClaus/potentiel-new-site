import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import nathaliePortrait from "@/assets/nathalie-portrait.jpg";

const About = () => {
  const certifications = [
    "Certifiée ComColors®",
    "Certifiée Indice de Cohésion d'Équipe (ICE)",
    "Certifiée Lego Serious Play",
    "Formation en Analyse Transactionnelle",
    "Communication Non Violente",
    "Programmation Neuro-Linguistique",
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-8">QUI SUIS-JE ?</h1>
          <p className="text-lg text-muted-foreground mx-auto">
          "Potentiel" est l'aboutissement d'un parcours qui m'a menée de l'enseignement à la formation d'adultes et au coaching d'équipes, en passant par une expérience de 9 ans dans la gestion de projets et d'équipes dans le secteur non-marchand.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 mb-16">
          <div className="animate-fade-in-left">
            <img
              src={nathaliePortrait}
              alt="Nathalie Flament"
              className="rounded-2xl shadow-lg w-3/4 object-cover aspect-square"
            />
          </div>

          <div className="flex flex-col justify-center animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Mon parcours</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                La plus grande partie de mon expérience professionnelle est issue du secteur de la formation et de la pédagogie. Après huit ans d'enseignement dans le secondaire supérieur, j'ai exercé une fonction de formatrice et responsable de projets pédagogiques au sein d'une structure non-marchande.
              </p>
              <p>
                Ce détachement pédagogique m'a permis de découvrir la gestion de projet et le travail en équipe avec des partenaires extérieurs. Il m'a surtout permis d'expérimenter les pédagogies non-formelles et actives, et de participer à l'élaboration et l'animation de diverses formations à destination des responsables d'équipes et de projets. J'ai également conçu et animé des dispositifs d'accompagnement pour ce public et leurs équipes.
              </p>
              <p>
                En 2017, je suis certifiée coach et formatrice Comcolors®. Depuis, j'ai enrichi mon expertise en me certifiant sur l'<strong>Indice de Cohésion d'Équipe (ICE)</strong> et la méthode <strong>Lego Serious Play</strong>.
              </p>
              <p>
                Aujourd'hui, je me spécialise dans l'accompagnement d'organisations et d'entreprises, en utilisant ces trois outils certifiés pour transformer les dynamiques d'équipe, améliorer la cohésion et optimiser les performances collectives.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="flex flex-col items-center">
          <Card className="animate-fade-in border-none bg-muted/30 w-full max-w-4xl">
            <CardContent className="p-8 sm:p-12">
              <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
                Mes certifications et formations
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {certifications.map((certification, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg">{certification}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <div className="mt-8 max-w-4xl">
            <p className="text-base leading-relaxed text-center">
              *Je m'appuie également sur une large palette d'outils complémentaires dont la pensée métaphorique, l'Appreciative Inquiry, des techniques basées sur la créativité et l'intelligence collective pour offrir un accompagnement sur mesure à chaque organisation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
