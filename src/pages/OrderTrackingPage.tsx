import React, { useState, useEffect } from 'react';

// Custom Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import OrderTracker, { OrderStatus } from '@/components/OrderTracker';
import LiveMapView from '@/components/LiveMapView';

// shadcn/ui Components
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Icons
import { Package, Clock, User, FileText, Star } from 'lucide-react';

// Placeholder data for past orders
const pastOrders = [
  {
    id: '#DF54321',
    date: '2024-07-20',
    restaurant: 'Sushi Palace',
    total: '$45.50',
    status: 'Delivered',
  },
  {
    id: '#DF54119',
    date: '2024-07-15',
    restaurant: 'Pizza Planet',
    total: '$32.00',
    status: 'Delivered',
  },
];

const OrderTrackingPage: React.FC = () => {
  console.log('OrderTrackingPage loaded');
  const [currentStatus, setCurrentStatus] = useState<OrderStatus>('confirmed');

  useEffect(() => {
    const statuses: OrderStatus[] = ['confirmed', 'kitchen', 'delivery', 'delivered'];
    let index = 0;

    const interval = setInterval(() => {
      index++;
      if (index < statuses.length) {
        setCurrentStatus(statuses[index]);
      } else {
        clearInterval(interval);
      }
    }, 4000); // Progress every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 w-full">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* Left/Main Column for Tracking */}
            <div className="lg:col-span-2 space-y-8">
              <OrderTracker currentStatus={currentStatus} />
              <LiveMapView />
            </div>

            {/* Right/Sidebar Column for Details */}
            <div className="lg:col-span-1 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="h-5 w-5" />
                    Order Summary
                  </CardTitle>
                  <CardDescription>Order #DF67890 from <strong>Tuna Roll House</strong></CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-sm">
                    <p><strong>2x</strong> Tuna Roll</p>
                    <p><strong>1x</strong> Salmon Nigiri</p>
                  </div>
                  <div className="border-t pt-4 flex justify-between items-center font-bold">
                    <span>Total</span>
                    <span>$28.75</span>
                  </div>
                   <Button className="w-full" variant="outline">
                    <FileText className="mr-2 h-4 w-4"/> View Receipt
                   </Button>
                </CardContent>
              </Card>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="past-orders">
                  <AccordionTrigger className="text-lg font-semibold">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5" /> Past Orders
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 pt-2">
                    {pastOrders.map((order) => (
                      <Card key={order.id} className="bg-gray-50/50">
                        <CardContent className="p-4 flex justify-between items-center">
                          <div>
                            <p className="font-semibold">{order.restaurant}</p>
                            <p className="text-sm text-muted-foreground">{order.date} &bull; {order.id}</p>
                          </div>
                          <div className="text-right">
                             <Badge variant="default" className="bg-green-100 text-green-800">{order.status}</Badge>
                             <p className="font-bold mt-1">{order.total}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" /> Need Help?
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col space-y-3">
                  <Button variant="outline">Contact Restaurant</Button>
                  <Button variant="secondary">Contact Support</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderTrackingPage;