import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, MapPin, UtensilsCrossed } from 'lucide-react';

const LiveMapView: React.FC = () => {
  console.log('LiveMapView loaded');

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center">
          <MapPin className="mr-2 h-5 w-5 text-primary" />
          Live Delivery Map
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-gray-200">
          {/* Placeholder for a map tile layer */}
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('https://api.maptiler.com/maps/streets-v2/256/1/1/0.png?key=get_your_own_key')" }}
            aria-label="Map of delivery area"
          ></div>
          <div className="absolute inset-0 bg-gray-500/10"></div>


          {/* SVG for the route path */}
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path
              d="M 20 25 L 80 75"
              stroke="#6b7280"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              fill="none"
              strokeLinecap="round"
            />
          </svg>

          {/* Restaurant Icon */}
          <div className="absolute top-[25%] left-[20%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer">
            <div className="bg-white p-2 rounded-full shadow-lg transition-transform group-hover:scale-110">
              <UtensilsCrossed className="h-6 w-6 text-orange-500" />
            </div>
            <span className="text-xs font-semibold mt-1 bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded">Restaurant</span>
          </div>

          {/* User's Home Icon */}
          <div className="absolute top-[75%] left-[80%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer">
             <div className="bg-white p-2 rounded-full shadow-lg transition-transform group-hover:scale-110">
              <Home className="h-6 w-6 text-blue-500" />
            </div>
            <span className="text-xs font-semibold mt-1 bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded">Your Location</span>
          </div>

          {/* Courier Icon with animation */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="relative">
              <div className="absolute -inset-2.5 rounded-full bg-primary/30 animate-ping"></div>
              <div className="relative bg-primary p-3 rounded-full shadow-lg ring-2 ring-white">
                <MapPin className="h-6 w-6 text-primary-foreground" />
              </div>
            </div>
             <span className="text-sm font-bold mt-2 bg-primary text-primary-foreground px-2 py-1 rounded-md shadow-lg">Courier</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LiveMapView;