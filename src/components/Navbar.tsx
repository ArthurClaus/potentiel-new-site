import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Accueil" },
    { to: "/about", label: "Qui suis-je" },
    { to: "/contact", label: "Contact" },
  ];

  const outilsLinks = [
    { to: "/outils", label: "Vue d'ensemble" },
    { to: "/comcolors", label: "ComColors®" },
    { to: "/ice", label: "Indice de Cohésion d'Équipe" },
    { to: "/lsp", label: "Lego Serious Play" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center space-x-2">
            <span className="text-xl font-semibold text-foreground">
              Nathalie Flament
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            
            {/* Outils et méthodes dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                <span>Outils et méthodes</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                {outilsLinks.map((link) => (
                  <DropdownMenuItem key={link.to} asChild>
                    <NavLink
                      to={link.to}
                      className="w-full cursor-pointer"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </NavLink>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <NavLink to="/contact">
              <Button variant="default" size="sm">
                Me contacter
              </Button>
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors ${
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              
              {/* Mobile Outils et méthodes */}
              <div className="space-y-2">
                <div className="text-sm font-medium text-muted-foreground">
                  Outils et méthodes
                </div>
                <div className="ml-4 space-y-2">
                  {outilsLinks.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `block text-sm transition-colors ${
                          isActive
                            ? "text-primary"
                            : "text-muted-foreground hover:text-foreground"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              </div>

              <NavLink to="/contact" onClick={() => setIsOpen(false)}>
                <Button variant="default" size="sm" className="w-full">
                  Me contacter
                </Button>
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
