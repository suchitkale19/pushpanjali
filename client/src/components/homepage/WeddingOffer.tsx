export default function WeddingOffer() {
  return (
    <div className="px-10 h-fit w-fit flex flex-col gap-4 items-center">
      <div className="flex  items-center gap-2">
        <div className="h-0.5 w-20 bg-gold"></div>
        <h2>WEDDING SEASON SPECIAL</h2>
        <div className="h-0.5 w-20 bg-gold"></div>
      </div>
      <h1 className="text-5xl font-extrabold font-logo">
        UP To <span className="text-gold font-body font-semibold">25%</span> OFF
      </h1>
      <p className="p-2 font-logo font-bold rounded-2xl w-fit text-lg  bg-[#bea656] text-primary">
        ON WEDDDING DECORATIONS
      </p>
      <p className="w-fit h-fit text-xl p-2 border-2 border-dashed border-gold">
        USE CODE: <span className="font-bold text-accent">SHAADI25</span>
      </p>
    </div>
  );
}
