import React, { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";

// parent Card

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  );
};

// Compact Card
function CompactCard({ param, setExpanded }) {
  const Png = param.png;
  return (
    <motion.div
      layoutId="expandableCard"
      onClick={setExpanded}
      className="w-auto h-32 z-10 rounded-xl bg-white bg-opacity-50 shadow-md p-2"
    >
      <div>
        <span>{param.title}</span>
      </div>
    </motion.div>
  );
}

// Expanded Card
function ExpandedCard({ param, setExpanded }) {

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-10"
      layoutId="expandableCard"
    >
      <div className="w-3/5 h-3/5 flex flex-col items-center justify-between p-4 rounded-xl bg-white shadow-md">
        <div onClick={setExpanded} className="flex justify-end cursor-pointer">
          exit
        </div>
      </div>
    </motion.div>
  );
};
export default Card;