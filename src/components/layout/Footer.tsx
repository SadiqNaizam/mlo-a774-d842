import React from 'react';
import { Link } from 'react-router-dom';
import { UtensilsCrossed, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  console.log('Footer loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/40 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4 col-span-1 md:col-span-1">
            <div className="flex items-center gap-2">
              <UtensilsCrossed className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">DelishFlow</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your favorite food, delivered fast to your door.
            </p>
          </div>

          {/* Links Sections */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 col-span-1 md:col-span-3">
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Company</h3>
              <nav className="flex flex-col space-y-2">
                <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link>
                <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Careers</Link>
                <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Legal</h3>
              <nav className="flex flex-col space-y-2">
                <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
                <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Support</h3>
              <nav className="flex flex-col space-y-2">
                <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">FAQ</Link>
                <Link to="/restaurant-listing" className="text-sm text-muted-foreground hover:text-primary transition-colors">Restaurants</Link>
              </nav>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} DelishFlow. All rights reserved.
          </p>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <Link to="#" aria-label="Facebook">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link to="#" aria-label="Twitter">
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link to="#" aria-label="Instagram">
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;