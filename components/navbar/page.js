import MenuItem from "./item";

export default function Navbar() {
  return (
    <div className="sticky top-0 bg-white z-50">
      <div className="ps-3 py-3 flex flex-col justify-between md:flex-row">
        <img className="w-40 h-auto" src="/logo.jpg" />
        {/* <h1 className="text-4xl font-extrabold text-gray-900">ESG Master</h1> */}
        <MenuItem />
      </div>
    </div>
  );
}
