import type { ReactNode } from "react";

interface offer {
  component: ReactNode;
  offer: string;
  info: string;
  add?: boolean;
  code?: string;
}

export default function OfferCard({
  component,
  offer,
  info,
  add,
  code,
}: offer) {
  return (
    <div className="lg:h-40 h-32 lg:w-80 w-42 bg-cover bg-[url(/src/assets/offerbg2.jpg)] px-2 rounded-2xl border-2 border-border flex pt-2 justify-evenly items-center gap-1">
      {component}
      <div>
        <h2 className="font-bold lg:text-lg text-sm  lg:w-40 w-28">{offer}</h2>
        <p className="lg:w-40 w:32 lg:text-m text-sm">{info}</p>
        {add && (
          <p className="border lg:text:lg text-sm border-dashed p-1">
            Code: <span className=" font-bold ">{code}</span>
          </p>
        )}
      </div>
    </div>
  );
}
