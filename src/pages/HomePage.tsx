import React from 'react';
import { Link } from 'react-router-dom';

// Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Custom Page-Specific Components
import CuisineCategoryCard from '@/components/CuisineCategoryCard';
import RestaurantCard from '@/components/RestaurantCard';

// shadcn/ui Components
import { Button } from '@/components/ui/button';

// Placeholder data for cuisine categories
const cuisineCategories = [
  { categoryName: 'Pizza', imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop', slug: 'pizza' },
  { categoryName: 'Burgers', imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop', slug: 'burgers' },
  { categoryName: 'Sushi', imageUrl: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=800&auto=format&fit=crop', slug: 'sushi' },
  { categoryName: 'Italian', imageUrl: 'https://images.unsplash.com/photo-1533777324565-a04026b24422?q=80&w=800&auto=format&fit=crop', slug: 'italian' },
  { categoryName: 'Mexican', imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop', slug: 'mexican' },
  { categoryName: 'Indian', imageUrl: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=800&auto=format&fit=crop', slug: 'indian' },
];

// Placeholder data for featured restaurants
const featuredRestaurants = [
  { slug: 'the-pizza-place', name: 'The Pizza Place', imageUrl: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=800&auto=format&fit=crop', cuisine: 'Pizza', rating: 4.5, deliveryTime: '25-35 min' },
  { slug: 'burger-joint', name: 'Burger Joint', imageUrl: 'https://images.unsplash.com/photo-1606131731446-5568d87113aa?q=80&w=800&auto=format&fit=crop', cuisine: 'Burgers', rating: 4.8, deliveryTime: '20-30 min' },
  { slug: 'sushi-sensation', name: 'Sushi Sensation', imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=800&auto=format&fit=crop', cuisine: 'Sushi', rating: 4.9, deliveryTime: '30-40 min' },
  { slug: 'pasta-paradise', name: 'Pasta Paradise', imageUrl: 'https://images.unsplash.com/photo-1598866594240-a2df5bb73d61?q=80&w=800&auto=format&fit=crop', cuisine: 'Italian', rating: 4.6, deliveryTime: '35-45 min' },
];

const HomePage = () => {
  console.log('HomePage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted/20 py-12 md:py-20 text-center">
            <div className="container">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                    Your next meal, delivered.
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Discover local favorites and get them delivered right to your door. The search bar is in the header above!
                </p>
            </div>
        </section>

        <div className="container py-8 md:py-12">
            {/* Cuisine Categories Section */}
            <section aria-labelledby="cuisine-categories-title">
                <h2 id="cuisine-categories-title" className="text-2xl md:text-3xl font-bold mb-6">
                    Explore by Cuisine
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
                    {cuisineCategories.map((category) => (
                        <CuisineCategoryCard
                            key={category.slug}
                            categoryName={category.categoryName}
                            imageUrl={category.imageUrl}
                            slug={category.slug}
                        />
                    ))}
                </div>
            </section>

            {/* Featured Restaurants Section */}
            <section aria-labelledby="featured-restaurants-title" className="mt-12 md:mt-16">
                <div className="flex justify-between items-center mb-6">
                    <h2 id="featured-restaurants-title" className="text-2xl md:text-3xl font-bold">
                        Featured Restaurants
                    </h2>
                    <Link to="/restaurant-listing">
                        <Button variant="outline">See All</Button>
                    </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuredRestaurants.map((restaurant) => (
                        <RestaurantCard
                            key={restaurant.slug}
                            slug={restaurant.slug}
                            name={restaurant.name}
                            imageUrl={restaurant.imageUrl}
                            cuisine={restaurant.cuisine}
                            rating={restaurant.rating}
                            deliveryTime={restaurant.deliveryTime}
                        />
                    ))}
                </div>
            </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;