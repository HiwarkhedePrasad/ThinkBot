const PrivacyCommitment = () => {
  return (
    <div className="bg-black text-white py-16 px-6 md:px-20">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-10">
        Our commitment to data privacy, security, and partnership
      </h2>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300">
        {/* Data Privacy & Security */}
        <div className="bg-[#1f1f1f] p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">
            Data privacy and security
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Data encryption in transit and at rest</li>
            <li>Secure cloud infrastructure</li>
            <li>Access control policies</li>
            <li>Compliance with major security standards</li>
          </ul>
        </div>

        {/* Administrative Controls */}
        <div className="bg-[#1f1f1f] p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">
            Administrative controls
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Role-based access</li>
            <li>Audit logs & activity monitoring</li>
            <li>Custom user permissions</li>
          </ul>
        </div>

        {/* OpenAI Support for Campus */}
        <div className="bg-[#1f1f1f] p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">
            OpenAI support for campus
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Custom AI solutions for education</li>
            <li>Collaborations with institutions</li>
            <li>Dedicated enterprise support</li>
          </ul>
        </div>
      </div>

      {/* Quote Section */}
      <div className="mt-16 text-center max-w-2xl mx-auto">
        <p className="italic text-gray-400 text-lg">
          "The introduction of OpenAI’s product for education, in the form of
          THinkBot Edu, is enormously important. It helps us protect our student
          privacy, research output, and supports security requirements."
        </p>
        <p className="mt-4 text-gray-500">
          — Notable University Research Director
        </p>
      </div>

      {/* CTA Section */}
      <div className="mt-16 bg-[#222] py-10 text-center rounded-lg">
        <h3 className="text-2xl font-semibold">
          Bring ThinkBot Edu to your campus
        </h3>
        <button className="mt-4 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-full font-semibold transition">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default PrivacyCommitment;
