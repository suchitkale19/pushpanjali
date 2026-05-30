export default function Logo() {
  return (
    <div className="flex font-logo">
      <img
        className="h-16 rounded-4xl"
        src="/src/assets/weblogo.png"
        alt="logo"
      />
      <div className="text-center">
        <h1 className="text-3xl font-bold text-primary ">pushpanjali</h1>
        <p className="text-sm font-semibold ">Flower Decor Store</p>
      </div>
    </div>
  );
}
