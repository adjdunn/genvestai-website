"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold text-primary font-display">
          GenVest AI
        </Link>
        <nav className="hidden md:flex space-x-6">
          {['Home', 'About', 'Blog', 'Videos', 'Contact'].map((item) => (
            <Link
              key={item}
              href={item === 'Home' ? '/' : `#${item.toLowerCase()}`}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {item}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <Button className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90">
            Get Started
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-background py-4 px-4">
          <nav className="flex flex-col space-y-4">
            {['Home', 'About', 'Blog', 'Videos', 'Contact'].map((item) => (
              <Link
                key={item}
                href={item === 'Home' ? '/' : `#${item.toLowerCase()}`}
                className="text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;