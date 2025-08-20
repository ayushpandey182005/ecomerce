import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle, Package, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

const OrderSuccess = () => {
  const [searchParams] = useSearchParams();
  const [verifying, setVerifying] = useState(true);
  const [verified, setVerified] = useState(false);
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    const verifyPayment = async () => {
      if (!sessionId) {
        setVerifying(false);
        return;
      }

      try {
        const { data, error } = await supabase.functions.invoke('verify-payment', {
          body: { session_id: sessionId },
        });

        if (error) throw error;

        if (data?.success) {
          setVerified(true);
          toast({
            title: "Payment successful!",
            description: "Your order has been confirmed and is being processed.",
          });
        }
      } catch (error) {
        console.error('Payment verification error:', error);
        toast({
          title: "Verification failed",
          description: "There was an issue verifying your payment. Please contact support.",
          variant: "destructive",
        });
      } finally {
        setVerifying(false);
      }
    };

    verifyPayment();
  }, [sessionId]);

  if (verifying) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto mb-4"></div>
          <h1 className="text-2xl font-bold mb-2">Verifying Payment</h1>
          <p className="text-muted-foreground">Please wait while we confirm your order...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto text-center">
        <Card>
          <CardContent className="pt-6">
            {verified ? (
              <>
                <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
                <h1 className="text-3xl font-bold mb-2 text-green-700">Order Confirmed!</h1>
                <p className="text-muted-foreground mb-6">
                  Thank you for your purchase. Your order has been successfully placed and is being processed.
                </p>
                
                <div className="bg-muted/50 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-center mb-2">
                    <Package className="h-5 w-5 text-primary mr-2" />
                    <span className="font-medium">What's next?</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    You'll receive an email confirmation shortly with your order details and tracking information.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <Button asChild className="w-full">
                    <Link to="/orders">
                      View My Orders
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  
                  <Button variant="outline" asChild className="w-full">
                    <Link to="/">Continue Shopping</Link>
                  </Button>
                </div>
              </>
            ) : (
              <>
                <div className="mx-auto h-16 w-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <Package className="h-8 w-8 text-yellow-600" />
                </div>
                <h1 className="text-2xl font-bold mb-2">Order Status Unknown</h1>
                <p className="text-muted-foreground mb-6">
                  We couldn't verify your payment status. Please check your email for confirmation or contact support.
                </p>
                
                <div className="space-y-3">
                  <Button asChild className="w-full">
                    <Link to="/orders">Check My Orders</Link>
                  </Button>
                  
                  <Button variant="outline" asChild className="w-full">
                    <Link to="/">Back to Store</Link>
                  </Button>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OrderSuccess;