import { useState } from "react";
import { Button } from "./ui/button";
import { Play, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet";

const Header = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About Me", href: "#" },
    { label: "Streaming Videos", href: "#" },
    { label: "Pages", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md header" 
      style={{
        marginRight:"2rem", 
        marginLeft:"2rem", 
        borderBottomLeftRadius: "20px",  
        borderBottomRightRadius: "20px",
      }}
    >
      <div className="container mx-auto px-4 py-4 header-container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Play className="w-8 h-8 text-primary fill-primary" />
            <span className="text-2xl font-bold text-foreground">Influtics</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href} 
                className="text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Follow Button */}
          <Button className=" lg:flex bg-gradient-to-r from-primary to-secondary text-white">
            + Follow Me
          </Button>

          {/* Mobile Menu Button */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-lg text-foreground hover:text-primary transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
