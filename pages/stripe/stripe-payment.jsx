import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51PGGuiSDCnkBztKNiPdWsd3pblSKxiHPpkeDndI6XTgktEeFPLegrlDhgXHFvsrBAYQ5wfTDu3JDlKXF9Q8ea1Qc00QohKWzcd');
 
 const payment = async () => {

    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
        lineItems: [{
          price: 'price_1PGJSWSDCnkBztKNdhERmO8M', // Replace with the ID of your price
          quantity: 1,
        }],
        mode: 'payment',
        successUrl: `${window.location.origin}/ultimate-boot-camp-confirmation`,
        cancelUrl: window.location.origin,
      });
      if (error) {
        console.error('Error redirecting to checkout:', error);
      }
}

export default payment 