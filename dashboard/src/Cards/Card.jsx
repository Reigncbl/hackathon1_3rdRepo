import React, { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import TableauReport from 'tableau-react';

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
  return (
    <motion.div
      layoutId="expandableCard"
      onClick={setExpanded}
      className={`h-32 w-72 rounded-3xl bg-[#b0ffb7] dark:bg-slate-700 p-4 cursor-pointer shadow-md border-black`}
    >
      <div className="flex flex-col justify-between h-full">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-semibold">{param.value} <span className="text-base">Users</span></span>
          <param.png className="w-8 h-8" />
        </div>
        <div>
          <p className="font-semibold text-lg">{param.title}</p>
          <p className="text-sm">{param.percent} <span>higher than last week</span></p>
        </div>
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
        <TableauReport
          url={param.url}
          options={{
            hideTabs: false,
            hideToolbar: false,
            height: 500,
            width: 500,
          }}
        />
      </div>
    </motion.div>
  );
}

export default Card;
