import { useState } from "react";
import { motion } from "framer-motion";

function AppLayout() {
  const [isShifted, setIsShifted] = useState(false);
  return (
    <>
      <div className="border-2 border-blue-500 min-h-[40rem] grid grid-cols-2 gap-x-2 overflow-hidden">
        <motion.div
          className="border border-amber-300 bg-amber-700"
          animate={{ x: isShifted ? "100%" : "0%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        ></motion.div>

        <motion.div
          className="border border-amber-300 bg-red-400"
          animate={{ x: isShifted ? "-100%" : "0%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        ></motion.div>
      </div>
      <div>
        <button
          onClick={() => setIsShifted(!isShifted)}
          className="border px-5 py-2 mt-6 cursor-pointer"
        >
          Slide
        </button>
      </div>
    </>
  );
}
export default AppLayout;
