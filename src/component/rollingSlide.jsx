import { motion } from "framer-motion";
import { useState } from "react";

const MarqueeRow = ({ items, direction }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="flex space-x-4 overflow-hidden whitespace-nowrap"
      animate={{
        x: direction === "right" ? ["-100%", "100%"] : ["100%", "-100%"],
      }}
      transition={{
        repeat: Infinity,
        duration: 20, // Slow scrolling speed
        ease: "linear",
        pauseWhenHovered: true, // Keeps animation paused on hover
      }}
      style={{ display: "flex" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ animationPlayState: "paused" }} // Smooth pause on hover
    >
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-[#1f1f1f] text-white px-6 py-3 rounded-lg shadow-md min-w-[250px] max-w-[300px] truncate"
        >
          {item}
        </div>
      ))}
    </motion.div>
  );
};

const StaggeredMarquee = () => {
  return (
    <div className="bg-black py-10 space-y-6">
      <MarqueeRow
        items={[
          "Write a text inviting my neighbors to a barbecue",
          "Give me ideas for what to do with my kids' art",
          "Help me study vocabulary for a college entrance exam",
          "Write a message that goes with a kitten gif for a friend on a rough day",
        ]}
        direction="right"
      />
      <MarqueeRow
        items={[
          "Help me pick an outfit that will look good on camera",
          "Write an email to request a quote from local plumbers",
          "Create a charter to start a film club",
        ]}
        direction="left"
      />
      <MarqueeRow
        items={[
          "Design a programming game to teach basics in a fun way",
          "Make up a story about Sharky, a tooth-brushing shark superhero",
          "Explain nostalgia to a kindergartener",
        ]}
        direction="right"
      />
    </div>
  );
};

export default StaggeredMarquee;
