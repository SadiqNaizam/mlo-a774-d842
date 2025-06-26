import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Star, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface RestaurantCardProps {
  slug: string;
  name: string;
  imageUrl: string;
  cuisine: string;
  rating: number;
  deliveryTime: string; // e.g., "25-35 min"
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  slug,
  name,
  imageUrl,
  cuisine,
  rating,
  deliveryTime,
}) => {
  console.log('RestaurantCard loaded for:', name);

  return (
    <Link to={`/restaurant-menu/${slug}`} className="block group">
      <Card className="w-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <CardHeader className="p-0">
          <AspectRatio ratio={16 / 9}>
            <img
              src={imageUrl || 'https://via.placeholder.com/400x225?text=Restaurant'}
              alt={`Photo of ${name}`}
              className="object-cover w-full h-full"
            />
          </AspectRatio>
        </CardHeader>
        <CardContent className="p-4 space-y-2">
          <div className="flex justify-between items-start">
            <CardTitle className="text-lg font-bold group-hover:text-orange-600">{name}</CardTitle>
            <Badge variant="outline">{cuisine}</Badge>
          </div>
          <div className="flex items-center text-sm text-muted-foreground gap-4">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-500" />
              <span>{rating.toFixed(1)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{deliveryTime}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default RestaurantCard;