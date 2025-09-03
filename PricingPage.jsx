import React from "react";

export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      features: ["Basic chat access", "Limited daily messages", "Community support"],
    },
    {
      name: "Plus",
      price: "$9/mo",
      features: ["Priority chat access", "Unlimited messages", "Email support"],
    },
    {
      name: "Premium",
      price: "$29/mo",
      features: ["Advanced AI assistant", "Unlimited messages", "24/7 priority support", "Early feature access"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-10">
      <h1 className="text-4xl font-bold mb-6 text-center">Chat Assistant Pricing</h1>
      <p className="text-gray-600 mb-12 text-center max-w-xl">
        Choose the plan that fits your needs. Upgrade anytime as your usage grows.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {plans.map((plan, index) => (
          <div key={index} className="rounded-2xl shadow-lg hover:shadow-xl transition bg-white">
            <div className="flex flex-col items-center p-6">
              <h2 className="text-2xl font-semibold mb-2">{plan.name}</h2>
              <p className="text-3xl font-bold mb-4">{plan.price}</p>
              <ul className="mb-6 text-gray-600 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition">
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
