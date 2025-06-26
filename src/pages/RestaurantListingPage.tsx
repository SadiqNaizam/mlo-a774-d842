import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import RestaurantCard from '@/components/RestaurantCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

// Placeholder data for restaurants
const restaurants = [
  {
    slug: 'sushi-zen',
    name: 'Sushi Zen',
    imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=800&auto=format&fit=crop',
    cuisine: 'Japanese',
    rating: 4.8,
    deliveryTime: '20-30 min',
  },
  {
    slug: 'pizza-palace',
    name: 'Pizza Palace',
    imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop',
    cuisine: 'Italian',
    rating: 4.5,
    deliveryTime: '30-40 min',
  },
  {
    slug: 'taco-fiesta',
    name: 'Taco Fiesta',
    imageUrl: 'https://images.unsplash.com/photo-1565299589934-1f72150b431b?q=80&w=800&auto=format&fit=crop',
    cuisine: 'Mexican',
    rating: 4.6,
    deliveryTime: '25-35 min',
  },
  {
    slug: 'burger-bliss',
    name: 'Burger Bliss',
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop',
    cuisine: 'American',
    rating: 4.3,
    deliveryTime: '20-30 min',
  },
  {
    slug: 'curry-house',
    name: 'Curry House',
    imageUrl: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=800&auto=format&fit=crop',
    cuisine: 'Indian',
    rating: 4.9,
    deliveryTime: '35-45 min',
  },
  {
    slug: 'the-green-bowl',
    name: 'The Green Bowl',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop',
    cuisine: 'Salads',
    rating: 4.7,
    deliveryTime: '15-25 min',
  },
];

const RestaurantListingPage = () => {
  console.log('RestaurantListingPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-gray-50/50">
      <Header />

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Filter & Sort</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Sort By */}
                <div className="space-y-2">
                  <Label htmlFor="sort-by">Sort by</Label>
                  <Select>
                    <SelectTrigger id="sort-by">
                      <SelectValue placeholder="Recommended" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recommended">Recommended</SelectItem>
                      <SelectItem value="rating">Rating: High to Low</SelectItem>
                      <SelectItem value="delivery-time">Delivery Time: Fastest</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Separator />

                {/* Rating */}
                <div className="space-y-2">
                  <Label htmlFor="rating-slider">Rating</Label>
                  <Slider
                    id="rating-slider"
                    defaultValue={[4]}
                    max={5}
                    step={0.5}
                  />
                  <p className="text-sm text-muted-foreground">4.0 stars & up</p>
                </div>

                <Separator />

                {/* Dietary Options */}
                <div className="space-y-4">
                  <h4 className="font-semibold">Dietary</h4>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="vegetarian" />
                    <Label htmlFor="vegetarian">Vegetarian</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="vegan" />
                    <Label htmlFor="vegan">Vegan</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="gluten-free" />
                    <Label htmlFor="gluten-free">Gluten-Free</Label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Restaurant Grid */}
          <div className="lg:col-span-3">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
              Found {restaurants.length} Restaurants
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {restaurants.map((restaurant) => (
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
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RestaurantListingPage;