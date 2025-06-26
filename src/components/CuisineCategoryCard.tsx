import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface CuisineCategoryCardProps {
  /** The display name of the category (e.g., "Pizza") */
  categoryName: string;
  /** The URL for the category's representative image */
  imageUrl: string;
  /** A URL-friendly slug for the category (e.g., "pizza") */
  slug: string;
}

const CuisineCategoryCard: React.FC<CuisineCategoryCardProps> = ({ categoryName, imageUrl, slug }) => {
  console.log(`CuisineCategoryCard loaded for: ${categoryName}`);

  return (
    <Link to={`/restaurant-listing?category=${slug}`} className="block group focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-lg">
      <Card className="w-full overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
        <AspectRatio ratio={16 / 9}>
          <img
            src={imageUrl || 'https://via.placeholder.com/400x225'}
            alt={`Image for ${categoryName} category`}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
        </AspectRatio>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold text-center text-gray-800 dark:text-gray-100">
            {categoryName}
          </h3>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CuisineCategoryCard;