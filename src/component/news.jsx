import React from "react";

const LatestNews = ({ articles = [] }) => {
  if (!Array.isArray(articles)) {
    console.error("Invalid articles data:", articles);
    return <p className="text-red-500">Error loading news articles.</p>;
  }

  return (
    <div className="bg-[#1f1f1f] text-white p-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Latest News</h2>
        <button className="text-gray-400 hover:text-white">View all</button>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-4">
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <div key={index} className="flex gap-4 items-center">
              <img
                src={article.image || "https://via.placeholder.com/100"}
                alt={article.title}
                className="w-28 h-28 object-cover rounded-md"
              />
              <div>
                <p className="text-gray-400 text-sm">
                  {article.category} • {article.date} • {article.readTime}
                </p>
                <h3 className="text-lg font-medium">{article.title}</h3>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 mt-4">No news available.</p>
        )}
      </div>
    </div>
  );
};

const articlesData = [
  {
    title: "Global Markets Rally Amid Economic Recovery",
    category: "Business",
    date: "Feb 14, 2025",
    readTime: "4 min read",
    image: "/public/images/market.png", // Example image URL
  },
  {
    title: "New Species Discovered in the Amazon Rainforest",
    category: "Science",
    date: "Feb 13, 2025",
    readTime: "6 min read",
    image: "/public/images/spider.png", // Example image URL
  },
  // Add more articles as needed
];

const NewsSection = () => {
  return <LatestNews articles={articlesData} />;
};

export default NewsSection;
