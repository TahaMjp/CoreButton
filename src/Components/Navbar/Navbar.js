import Searchbox from "./Searchbox/Searchbox";

const Navbar = () => {
  return (
    <div className="w-full border-b-2 border-black p-3 sticky top-0 bg-white">
      <Searchbox />
    </div>
  );
};

export default Navbar;
