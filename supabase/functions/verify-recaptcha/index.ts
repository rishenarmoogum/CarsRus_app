import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface RecaptchaVerificationRequest {
  recaptchaResponse: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { recaptchaResponse }: RecaptchaVerificationRequest = await req.json();

    if (!recaptchaResponse) {
      return new Response(
        JSON.stringify({ success: false, error: "reCAPTCHA response is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Verify reCAPTCHA with Google
    const secretKey = "6LeHpqUrAAAAACF_LsdvgoQp3woihvJiTbmGBgZz";
    const verificationURL = `https://www.google.com/recaptcha/api/siteverify`;
    
    const formData = new FormData();
    formData.append('secret', secretKey);
    formData.append('response', recaptchaResponse);

    const response = await fetch(verificationURL, {
      method: 'POST',
      body: formData,
    });

    const verificationResult = await response.json();

    if (verificationResult.success) {
      return new Response(
        JSON.stringify({ success: true, message: "reCAPTCHA verification successful" }),
        {
          status: 200,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    } else {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: "reCAPTCHA verification failed",
          details: verificationResult['error-codes'] || []
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

  } catch (error: any) {
    console.error("Error in verify-recaptcha function:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);