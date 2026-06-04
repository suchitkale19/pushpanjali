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
    <div className="h-40 w-80  bg-cover bg-[url(/src/assets/offerbg2.jpg)] rounded-2xl border-2 border-border flex pt-2 justify-evenly items-center">
      {component}
      <div>
        <h2 className="font-bold w-40">{offer}</h2>
        <p className="w-40">{info}</p>
        {add && (
          <p className="border border-dashed p-1">
            Use Code: <span className="font-bold ">{code}</span>
          </p>
        )}
      </div>
    </div>
  );
}
