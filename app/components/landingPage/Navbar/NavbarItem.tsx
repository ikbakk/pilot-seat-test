type NavbarItemProps = {
  title: string;
};

const NavbarItem = ({ title }: NavbarItemProps) => {
  return (
    <li className="rounded-full p-2 px-4 text-sm outline-2 outline-gray-700 hover:cursor-pointer hover:outline">
      {title}
    </li>
  );
};

export default NavbarItem;
