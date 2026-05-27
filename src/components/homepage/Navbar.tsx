export default function navbar() {
  return (
    <div className="h-24 w-full flex text-text justify-between items-center px-16">
      <div className="flex">
        <img
          className="h-16 rounded-4xl"
          src="/src/assets/weblogo.png"
          alt="logo"
        />
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-primary ">pushpanjali</h1>
          <p className="text-sm font-semibold ">Flower Decor Store</p>
        </div>
      </div>

      <div className="flex border-2 border-border">
        <input
          className="h-10 rounded w-96 px-4"
          type="text"
          placeholder="Search for torans, decorations, flowers..."
        />
        <button className="h-10 w-10 bg-primary flex justify-center items-center rounded ">
          <img className="h-6" src="/src/assets/search.svg" alt="search" />
        </button>
      </div>

      <div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  );
}
