import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ShoppingCart } from 'lucide-react';

interface MenuItemCardProps {
  id: string | number;
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
  onAddToCart: (id: string | number) => void;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({
  id,
  name,
  description,
  price,
  imageUrl,
  onAddToCart,
}) => {
  const { toast } = useToast();
  console.log('MenuItemCard loaded for:', name);

  const handleAddToCartClick = () => {
    onAddToCart(id);
    toast({
      title: "Added to cart",
      description: `${name} has been successfully added to your cart.`,
    });
  };

  return (
    <Card className="w-full p-4 transition-all hover:shadow-md">
      <div className="flex justify-between items-start gap-4">
        {/* Content Section */}
        <div className="flex flex-col flex-grow">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{description}</p>
          <div className="flex items-center mt-4">
            <span className="text-base font-bold text-gray-800">${price.toFixed(2)}</span>
          </div>
        </div>

        {/* Image and Add to Cart Section */}
        <div className="flex flex-col items-end flex-shrink-0">
          {imageUrl && (
            <div className="w-24 h-24 md:w-28 md:h-28 mb-2 rounded-md overflow-hidden bg-gray-100">
              <img
                src={imageUrl}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <Button onClick={handleAddToCartClick} size={imageUrl ? 'default' : 'lg'} className="w-full md:w-auto mt-auto">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default MenuItemCard;