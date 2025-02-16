import { Link } from "react-router-dom";
import ChatShowcase from "./chatShowcase";
import StaggeredMarquee from "./rollingSlide";
import NewsSection from "./news";
import { motion } from "framer-motion";

const MainContaint = () => {
  return (
    <>
      <main className="flex-1 flex flex-col items-center justify-center text-center p-6">
        <motion.h1
          className="text-6xl font-bold text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Think Bot
        </motion.h1>

        <motion.h2
          className="text-2xl mt-4 font-semibold text-white"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          Get answers. Find inspiration. Be more productive.
        </motion.h2>

        <motion.p
          className="mt-4 text-gray-400 text-lg max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Free to use. Easy to try. Just ask and ThinkBot can help with writing,
          learning, brainstorming, and more.
        </motion.p>

        <motion.div
          className="mt-6 space-x-4 flex"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        >
          <Link to="/chat">
            <motion.button
              className="bg-[#1f1f1f] text-white px-6 py-3 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Start now
            </motion.button>
          </Link>
          <Link to="/download">
            <motion.button
              className="bg-[#1f1f1f] text-white px-6 py-3 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Download the app &gt;
            </motion.button>
          </Link>
        </motion.div>
      </main>
      <StaggeredMarquee />
      <ChatShowcase />
      <NewsSection />
    </>
  );
};

export default MainContaint;
