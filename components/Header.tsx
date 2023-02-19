import { SlMenu, SlMagnifier } from "react-icons/sl";

const Header = () => {
  return (
    <section className="w-full absolute bg-transparent pt-20 z-10">
      <nav className="grid place-items-center grid-cols-3">
        <div className="">Moth</div>
        <div className="flex flex-row items-center gap-4">
          <span className="">search</span>
          <SlMagnifier
            className="p-2 rounded-full bg-gray-50 cursor-pointer"
            color="black"
            size={30}
          />
        </div>
        <div className="flex flex-row items-center gap-4">
          <span>menu</span>
          <SlMenu
            className="p-2 rounded-full bg-gray-50 cursor-pointer"
            color="black"
            size={30}
          />
        </div>
      </nav>
    </section>
  );
};
export default Header;
