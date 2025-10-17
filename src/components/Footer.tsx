import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nathalie Flament</h3>
            <p className="text-muted-foreground text-sm">
              Coach et formatrice en développement personnel
            </p>
            <p className="text-muted-foreground text-sm mt-2">
              Spécialiste Comcolors®
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:contact@nathalie-flament.be"
                className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                contact@nathalie-flament.be
              </a>
              <a
                href="tel:+32123456789"
                className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" />
                +32 123 456 789
              </a>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2" />
                Belgique
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <div className="space-y-2">
              <a
                href="/"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Accueil
              </a>
              <a
                href="/about"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                À propos
              </a>
              <a
                href="/services"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Services
              </a>
              <a
                href="/comcolors"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Comcolors®
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nathalie Flament. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
