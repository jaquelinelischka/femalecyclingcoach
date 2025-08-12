import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { planId } = await req.json()

    // PayPal OAuth - Token holen
    const auth = await fetch("https://api-m.paypal.com/v1/oauth2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${Buffer.from(
          `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`,
        ).toString("base64")}`,
      },
      body: "grant_type=client_credentials",
    })

    const { access_token } = await auth.json()

    // Subscription erstellen
    const response = await fetch("https://api-m.paypal.com/v1/billing/subscriptions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
      body: JSON.stringify({
        plan_id: planId,
        application_context: {
          return_url: "https://femalecycling.at/success",
          cancel_url: "https://femalecycling.at/cancel",
        },
      }),
    })

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error creating subscription:", error)
    return NextResponse.json({ error: "Error creating subscription" }, { status: 500 })
  }
}
