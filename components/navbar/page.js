import MenuItem from "./item";

export default function Navbar() {
  return (
    <>
      <div className="bg-green-500 p-5 flex flex-col justify-between md:flex-row">
        <h1 className="text-3xl font-extrabold text-slate-100">ESG Master</h1>
        <MenuItem />
      </div>
    </>
  );
}
