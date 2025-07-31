import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface CarNotificationRequest {
  carDetails: {
    make: string;
    model: string;
    year: number;
    price: number;
  };
  sellerEmail: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { carDetails, sellerEmail }: CarNotificationRequest = await req.json();

    const emailResponse = await resend.emails.send({
      from: "CarsRus <onboarding@resend.dev>",
      to: ["carsrus88@outlook.com"],
      subject: "New Car Listed on CarsRus",
      html: `
        <h1>New Car Listed on CarsRus</h1>
        <p>A new car has been listed on the website and is awaiting approval.</p>
        <h2>Car Details:</h2>
        <ul>
          <li><strong>Make:</strong> ${carDetails.make}</li>
          <li><strong>Model:</strong> ${carDetails.model}</li>
          <li><strong>Year:</strong> ${carDetails.year}</li>
          <li><strong>Price:</strong> Rs ${carDetails.price.toLocaleString()}</li>
        </ul>
        <h2>Seller Information:</h2>
        <p><strong>Email:</strong> ${sellerEmail}</p>
        <p>Please log in to the admin panel to approve or reject this listing.</p>
      `,
    });

    console.log("Notification email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-car-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);