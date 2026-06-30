export default function Counter() {
  return (
    <div className="flex bg-background text-primary text-2xl font-bold text-center">
      <div className=" w-8 border-2 hover:bg-primary hover:text-background rounded">
        -
      </div>
      <div className=" w-8 border-y-2">0</div>
      <div className=" w-8 border-2 hover:bg-primary hover:text-background rounded">
        +
      </div>
    </div>
  );
}
