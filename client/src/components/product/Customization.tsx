import { FaWhatsapp } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";

export default function Customization() {
  return (
    <div className="lg:w-1/4 w-full flex flex-col gap-2 justify-center items-center px-4">
      <h1 className="text-2xl font-semibold text-primary font-logo">
        Need Customization?
      </h1>
      <p>
        We customize every detail to match your vision. Share your ideas with us
        !
      </p>
      <button className="flex bg-transparent hover:bg-hover w-full justify-center items-center gap-2 px-4 py-2 text-text font-semibold hover:text-background border-2 border-primary rounded-lg">
        <FaWhatsapp /> Chat with our Expert
      </button>
      <p>Or</p>
      <p className="flex items-center gap-2 hover:underline underline-offset-2">
        <IoCallOutline /> Call Us: +918779334733
      </p>
    </div>
  );
}
