export default function Logo() {
  return (
    <div className="flex font-logo">
      <img
        className="lg:h-16 h-12 rounded-4xl"
        src="/src/assets/weblogo.png"
        alt="logo"
      />
      <div className="text-center">
        <h1 className="lg:text-3xl text-2xl font-bold text-primary ">
          pushpanjali
        </h1>
        <p className="text-sm font-semibold ">Flower Decor Store</p>
      </div>
    </div>
  );
}
