const EnterpriseSection = () => {
  return (
    <div className="bg-black text-white py-16 px-6 md:px-20">
      {/* Title & Description */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold">Powering Enterprises at Scale</h2>
        <p className="text-gray-400 mt-4">
          Secure, reliable, and optimized AI solutions for businesses of all
          sizes.
        </p>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {/* Feature 1 */}
        <div className="p-6 bg-[#1f1f1f] rounded-lg text-center">
          <h3 className="text-xl font-semibold">Enterprise Security</h3>
          <p className="text-gray-400 mt-2">
            Industry-leading security & compliance to protect your data.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="p-6 bg-[#1f1f1f] rounded-lg text-center">
          <h3 className="text-xl font-semibold">Custom Integrations</h3>
          <p className="text-gray-400 mt-2">
            Seamlessly connect with your existing tools and workflows.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="p-6 bg-[#1f1f1f] rounded-lg text-center">
          <h3 className="text-xl font-semibold">Scalable Performance</h3>
          <p className="text-gray-400 mt-2">
            AI solutions designed to scale with your enterprise needs.
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12">
        <button className="bg-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-500 transition">
          Contact Sales
        </button>
      </div>
    </div>
  );
};

export default EnterpriseSection;
