import MainButton from "./MainButton";

export default function ImageButton() {
  return (
    <div className="w-md h-60 mb-2 rounded-4xl bg-cover bg-center bg-[url(/src/assets/offer.png)]">
      <div className="w-full h-full flex justify-center items-end pb-4 rounded-4xl  bg-linear-to-l from-green-950 via-transparent  to-green-950 t0-10%">
        <MainButton name={"Explore Collection"} bg={"primary"} />
      </div>
    </div>
  );
}
