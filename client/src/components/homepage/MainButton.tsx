export default function MainButton({ name, bg }: { name: string; bg: string }) {
  return (
    <button
      className={`flex bg-${bg} hover:bg-hover lg:w-fit w-52 justify-center px-4 py-2 text-background rounded-lg`}
    >
      {name}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#fffaf0"
      >
        <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
      </svg>
    </button>
  );
}
