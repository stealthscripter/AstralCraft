function GameHeader() {
  return (
    <nav className="col-span-9 py-10 font-2P text-xl">
      <ul className="grid grid-cols-9 gap-x-2 items-center">
        {/* Play Now button in the first column */}
        <li className="flex justify-center">
          <button className="border border-red-800 px-4 py-2 rounded-3xl text-base">Play Now</button>
        </li>

        {/* The Glimmering centered in the middle */}
        <li className="col-start-4 col-end-7 justify-self-center">
          <h1>The Glimmering</h1>
        </li>

        {/* Menu button in the last column */}
        <li className="col-start-9 flex justify-center text-base">
          <button>Menu</button>
        </li>
      </ul>
    </nav>
  );
}

export default GameHeader;
