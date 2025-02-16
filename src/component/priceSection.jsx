import React from "react";

const plans = ["Free", "Plus", "Pro", "Team", "Enterprise"];
const planButtons = [
  "Get Free",
  "Get Plus",
  "Get Pro",
  "Get Team",
  "Contact Sales",
];

const essentials = [
  {
    name: "Messages and Interactions",
    values: ["Unlimited", "Unlimited", "Unlimited", "Unlimited", "Unlimited"],
  },
  {
    name: "Chat History",
    values: ["Unlimited", "Unlimited", "Unlimited", "Unlimited", "Unlimited"],
  },
  { name: "Access on web, iOS, Android", values: ["✔", "✔", "✔", "✔", "✔"] },
];

const modelQuality = [
  {
    name: "Think-4o-mini",
    values: ["Unlimited", "Unlimited", "Unlimited", "Unlimited", "Unlimited"],
  },
  {
    name: "Think-4o",
    values: ["Limited", "Up to 5x Free", "Unlimited*", "Expanded", "Expanded"],
  },
  {
    name: "Think-4 access",
    values: ["—", "Standard", "Unlimited*", "Expanded", "Expanded"],
  },
  {
    name: "ThinkAI-d",
    values: ["—", "Standard", "Unlimited*", "Standard", "Standard"],
  },
  {
    name: "ThinkAI-d-mini",
    values: ["Limited", "Standard", "Unlimited*", "Standard", "Standard"],
  },
  { name: "ThinkAI-d-mini-high", values: ["—", "✔", "✔", "✔", "✔"] },
  { name: "ThinkAI-pro mode", values: ["—", "—", "✔", "✔", "✔"] },
  {
    name: "Response Times",
    values: [
      "Limited on bandwidth & availability",
      "Fast",
      "Fast",
      "Fast",
      "Fastest",
    ],
  },
  { name: "Context Window", values: ["8K", "32K", "128K", "32K", "128K"] },
  {
    name: "Regular quality & speed updates",
    values: ["✔", "✔", "✔", "✔", "✔"],
  },
];

const PricingTable = () => {
  return (
    <div className="bg-black text-white py-12 px-6">
      <h2 className="text-center text-2xl font-bold mb-6">
        Compare features across plans
      </h2>

      {/* Header with Plan Names */}
      <div className="grid grid-cols-6 text-center border-b border-gray-700 pb-4">
        <div></div>
        {plans.map((plan, index) => (
          <div key={index} className="flex flex-col items-center">
            <h3 className="text-lg font-semibold">{plan}</h3>
            <button className="bg-gray-800 text-white px-4 py-2 rounded mt-2">
              {planButtons[index]}
            </button>
          </div>
        ))}
      </div>

      {/* Essentials Section */}
      <Section title="Essentials" data={essentials} />

      {/* Model Quality Section */}
      <Section title="Model Quality" data={modelQuality} />
    </div>
  );
};

const Section = ({ title, data }) => {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold border-b border-gray-700 pb-2">
        {title}
      </h3>
      {data.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-6 text-center py-3 border-b border-gray-800"
        >
          <div className="text-left font-medium">{item.name}</div>
          {item.values.map((value, i) => (
            <div key={i}>{value}</div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PricingTable;
