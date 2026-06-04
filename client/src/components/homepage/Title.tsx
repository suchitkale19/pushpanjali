import { GiFlowers } from "react-icons/gi";

interface sectionTitle {
  name: string;
  para: string;
}

export default function Title({ name, para }: sectionTitle) {
  return (
    <div className="flex flex-col items-center gap-2 text-text py-8">
      <div className="flex items-center  gap-3">
        <GiFlowers size={30} color="#1b422c" />
        <h1 className="text-primary text-4xl font-semibold font-logo">
          {name}
        </h1>
        <GiFlowers size={30} color="#1b422c" />
      </div>
      <p>{para}</p>
    </div>
  );
}
