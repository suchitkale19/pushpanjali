interface svg {
  path: string;
  name: string;
}

export default function ButtonSVG({ path, name }: svg) {
  return (
    <button className="flex gap-1 text-text font-semibold items-center text-sm  p-2 rounded-xl hover:bg-secondary transition-all ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#2d2a26"
      >
        <path d={path} />
      </svg>
      <h1 className="hidden lg:block">{name}</h1>
    </button>
  );
}
