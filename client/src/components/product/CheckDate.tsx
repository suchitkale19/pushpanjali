export default function CheckDate() {
  return (
    <div className="flex flex-col text-text pr-8 gap-2">
      <label className="font-semibold">Select Delivery Date</label>
      <div>
        <input
          className="w-3/4 rounded-lg h-10 text-lg px-2 "
          type="date"
          placeholder="Select your delivery date"
        />
        <p className="text-sm">Earliest available delivery : One day after</p>
      </div>
    </div>
  );
}
