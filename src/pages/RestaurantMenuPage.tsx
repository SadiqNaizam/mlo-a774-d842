import React from 'react';

// Custom Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MenuItemCard from '@/components/MenuItemCard';

// shadcn/ui Components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge';
import { Button } from '@/components/ui/button';

// Icons
import { Star, MapPin } from 'lucide-react';

// Placeholder Data for the restaurant and menu
const restaurantData = {
  name: "Sushi Heaven",
  address: "123 Ocean Drive, Anytown, USA",
  rating: 4.8,
  cuisine: "Japanese",
  heroImageUrl: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2070&auto=format&fit=crop",
  logoUrl: "https://images.unsplash.com/photo-1627932341901-a14b5a29550b?q=80&w=1964&auto=format&fit=crop",
};

const menuItems = [
  { id: 1, name: "Edamame", description: "Steamed young soybeans, lightly salted. A perfect healthy starter.", price: 5.50, category: "Appetizers", imageUrl: "https://images.unsplash.com/photo-1599408013012-b0a7a063c52e?q=80&w=2070&auto=format&fit=crop" },
  { id: 2, name: "Pork Gyoza", description: "Pan-fried Japanese dumplings filled with seasoned pork and vegetables.", price: 7.00, category: "Appetizers", imageUrl: "https://images.unsplash.com/photo-1626202157924-a914c6e7e6f8?q=80&w=2070&auto=format&fit=crop" },
  { id: 3, name: "California Roll", description: "Classic roll with imitation crab, avocado, and cucumber, wrapped in seaweed and rice.", price: 8.00, category: "Sushi Rolls", imageUrl: "https://images.unsplash.com/photo-1617196034183-42499049193b?q=80&w=1964&auto=format&fit=crop" },
  { id: 4, name: "Spicy Tuna Roll", description: "A fiery mix of minced tuna, spicy mayo, and cucumber.", price: 9.50, category: "Sushi Rolls", imageUrl: "https://images.unsplash.com/photo-1611141659556-3a5a415a9bbe?q=80&w=2070&auto=format&fit=crop" },
  { id: 5, name: "Dragon Roll", description: "Eel and cucumber topped with thinly-sliced avocado and eel sauce.", price: 14.00, category: "Sushi Rolls", imageUrl: "https://images.unsplash.com/photo-1625944022833-c5a4a753683a?q=80&w=2070&auto=format&fit=crop" },
  { id: 6, name: "Mochi Ice Cream", description: "A small, round confection consisting of a soft, pounded sticky rice cake (mochi) formed around an ice cream filling.", price: 6.00, category: "Desserts", imageUrl: "https://images.unsplash.com/photo-1625201943839-862241774852?q=80&w=2070&auto=format&fit=crop" },
];

const menuCategories = ["Appetizers", "Sushi Rolls", "Desserts"];

const RestaurantMenuPage = () => {
  console.log('RestaurantMenuPage loaded');

  const handleAddToCart = (itemId: string | number) => {
    console.log(`Adding item ${itemId} to cart.`);
    // In a real app, this would dispatch an action to a global state (e.g., Redux, Zustand)
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        {/* Restaurant Hero Section */}
        <section className="relative h-48 md:h-64 bg-cover bg-center" style={{ backgroundImage: `url(${restaurantData.heroImageUrl})` }}>
          <div className="absolute inset-0 bg-black/50" />
        </section>

        {/* Restaurant Info Section */}
        <div className="container -mt-16 md:-mt-20 relative z-10">
          <div className="bg-background p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-start md:items-center gap-6">
            <Avatar className="h-24 w-24 md:h-28 md:w-28 border-4 border-background">
              <AvatarImage src={restaurantData.logoUrl} alt={restaurantData.name} />
              <AvatarFallback>{restaurantData.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-grow">
              <h1 className="text-3xl md:text-4xl font-bold">{restaurantData.name}</h1>
              <div className="flex items-center gap-4 text-muted-foreground mt-2">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{restaurantData.address}</span>
                </div>
                <Badge variant="default" className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-300" />
                  <span>{restaurantData.rating}</span>
                </Badge>
                <Badge variant="secondary">{restaurantData.cuisine}</Badge>
              </div>
            </div>
          </div>
        </div>
        
        {/* Menu Items Section */}
        <section className="container py-12">
          {menuCategories.map(category => {
            const itemsInCategory = menuItems.filter(item => item.category === category);
            if (itemsInCategory.length === 0) return null;

            return (
              <div key={category} className="mb-12">
                <h2 className="text-2xl font-bold border-b pb-2 mb-6">{category}</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {itemsInCategory.map(item => (
                    <MenuItemCard
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      description={item.description}
                      price={item.price}
                      imageUrl={item.imageUrl}
                      onAddToCart={handleAddToCart}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RestaurantMenuPage;