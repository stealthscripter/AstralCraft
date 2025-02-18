import GameHeader from "../components/GameHeader";
import Hero from "../components/Hero";

function FutureLayout() {
  return (
    <div
      className="p-4 grid grid-cols-9 min-h-screen gap-x-2 
    bg-[url(src/assets/backgrounds/stacked-steps-haikei.svg)] bg-slate-900 bg-blend-difference"
      style={{ backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
    >
      <GameHeader />
      <Hero />
    </div>
  );
}

export default FutureLayout;
