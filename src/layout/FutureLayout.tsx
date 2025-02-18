import { useSelector } from "react-redux";
import GameHeader from "../components/GameHeader";
import Hero from "../components/Hero";
import LearnMore from "../components/LearnMore";

function FutureLayout() {
  return (
    <div
      className="p-4 grid grid-cols-9 gap-x-2 min-h-screen 
    bg-[url(src/assets/backgrounds/stacked-steps-haikei.svg)] bg-slate-900 bg-blend-difference"
      style={{ backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
    >
      <GameHeader />
      <Hero />
      {/* <LearnMore /> */}
    </div>
  );
}

export default FutureLayout;
