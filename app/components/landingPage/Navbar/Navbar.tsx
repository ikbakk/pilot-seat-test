import NavbarItem from './NavbarItem';

const LandingPageNavbar = () => {
  return (
    <header className="fixed left-1/2 top-2 flex w-fit -translate-x-1/2 transform items-center justify-center gap-12 rounded-full px-8 py-2 text-white backdrop-blur-md">
      <h1 className="text-5xl">Logo</h1>
      <ul className="flex items-center justify-center gap-12 font-semibold">
        <NavbarItem title="Pages" />
        <NavbarItem title="Components" />
        <NavbarItem title="Pricing" />
        <NavbarItem title="FAQ" />
      </ul>
    </header>
  );
};

export default LandingPageNavbar;
