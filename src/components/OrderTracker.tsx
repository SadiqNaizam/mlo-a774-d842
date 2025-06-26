import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { CheckCircle2, ChefHat, Bike, PartyPopper, Icon as LucideIcon } from 'lucide-react';

export type OrderStatus = 'confirmed' | 'kitchen' | 'delivery' | 'delivered';

interface OrderTrackerProps {
  currentStatus: OrderStatus;
}

interface Step {
  id: OrderStatus;
  title: string;
  Icon: LucideIcon;
}

const steps: Step[] = [
  { id: 'confirmed', title: 'Order Confirmed', Icon: CheckCircle2 },
  { id: 'kitchen', title: 'In the Kitchen', Icon: ChefHat },
  { id: 'delivery', title: 'Out for Delivery', Icon: Bike },
  { id: 'delivered', title: 'Delivered', Icon: PartyPopper },
];

const OrderTracker: React.FC<OrderTrackerProps> = ({ currentStatus }) => {
  console.log('OrderTracker loaded with status:', currentStatus);

  const currentStepIndex = steps.findIndex(step => step.id === currentStatus);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Track Your Order</CardTitle>
      </CardHeader>
      <CardContent className="p-6 sm:p-8">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => {
            const isCompleted = index < currentStepIndex;
            const isActive = index === currentStepIndex;

            return (
              <React.Fragment key={step.id}>
                <div className="flex flex-col items-center text-center">
                  <div
                    className={cn(
                      'flex h-12 w-12 items-center justify-center rounded-full border-2',
                      isCompleted ? 'border-green-500 bg-green-500 text-white' : '',
                      isActive ? 'border-blue-500 bg-blue-100 text-blue-600 scale-110' : '',
                      !isCompleted && !isActive ? 'border-gray-300 bg-gray-100 text-gray-400' : ''
                    )}
                  >
                    <step.Icon className="h-6 w-6" />
                  </div>
                  <p
                    className={cn(
                      'mt-2 text-xs sm:text-sm font-medium',
                      isCompleted ? 'text-gray-800' : '',
                      isActive ? 'text-blue-600' : '',
                      !isCompleted && !isActive ? 'text-gray-500' : ''
                    )}
                  >
                    {step.title}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={cn(
                      'h-1 flex-1',
                      isCompleted ? 'bg-green-500' : 'bg-gray-300'
                    )}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderTracker;