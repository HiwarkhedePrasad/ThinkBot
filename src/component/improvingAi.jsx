const ImprovingAI = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold">An always-improving</h1>
        <p className="text-lg text-gray-400">
          AI assistant that acts like a team member
        </p>
      </section>

      {/* Navigation Tabs */}
      <div className="flex justify-center space-x-6 text-gray-400 mb-12">
        {["Duolingo", "IDEO", "Outset", "Smartups"].map((tab, index) => (
          <button key={index} className="hover:text-white transition">
            {tab}
          </button>
        ))}
      </div>

      {/* Feature Sections */}
      <div className="space-y-16 px-6 md:px-20">
        {/* First Feature */}
        <div className="flex flex-col md:flex-row items-center">
          <img
            src="/images/members.png"
            alt="Feature 1"
            className="w-full md:w-1/2 rounded-lg"
          />
          <div className="md:ml-10 mt-6 md:mt-0">
            <h2 className="text-2xl font-semibold">
              ThinkBot that's built for work
            </h2>
            <ul className="list-disc text-gray-400 ml-5 mt-3 space-y-2">
              <li>Seamless integrations with workplace apps</li>
              <li>Advanced security & privacy controls</li>
              <li>Optimized for business performance</li>
            </ul>
          </div>
        </div>

        {/* Second Feature */}
        <div className="flex flex-col md:flex-row-reverse items-center">
          <img
            src="/images/output.png"
            alt="Feature 2"
            className="w-full md:w-1/2 rounded-lg"
          />
          <div className="md:mr-10 mt-6 md:mt-0">
            <h2 className="text-2xl font-semibold">
              Supercharge your team’s performance
            </h2>
            <p className="text-gray-400 mt-3">
              Enhance productivity with real-time AI suggestions and detailed
              analytics.
            </p>
          </div>
        </div>

        {/* Trusted by Companies Section */}
      </div>
    </div>
  );
};

export default ImprovingAI;
