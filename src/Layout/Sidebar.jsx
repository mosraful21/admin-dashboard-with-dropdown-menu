import { useState } from "react";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillPeopleFill,
  BsXLg,
  BsChevronRight,
} from "react-icons/bs";

const menuItems = [
  { icon: <BsGrid1X2Fill />, title: "Dashboard", link: "/" },
  { icon: <BsFillPeopleFill />, title: " Customers", link: "/customers" },
  {
    icon: <BsGrid1X2Fill />,
    title: "Orders",
    subMenu: [
      { subTitle: "Item 1", subLink: "/item1" },
      { subTitle: "Item 2", subLink: "/item2" },
      { subTitle: "Item 3", subLink: "/item3" },
      { subTitle: "Item 4", subLink: "/item4" },
    ],
  },
  {
    icon: <BsGrid1X2Fill />,
    title: "About",
    subMenu: [
      { subTitle: "Item 1", subLink: "/item1" },
      { subTitle: "Item 2", subLink: "/item2" },
      { subTitle: "Item 3", subLink: "/item3" },
    ],
  },
  {
    icon: <BsGrid1X2Fill />,
    title: "Gallery",
    subMenu: [
      { subTitle: "Item 1", subLink: "/item1" },
      { subTitle: "Item 2", subLink: "/item2" },
    ],
  },
  {
    icon: <BsGrid1X2Fill />,
    title: "Contact",
    subMenu: [
      { subTitle: "Item 1", subLink: "/item1" },
      { subTitle: "Item 2", subLink: "/item2" },
    ],
  },
];

const Sidebar = ({ openSidebarToggle, OpenSidebar }) => {
  const [openSubMenu, setOpenSubMenu] = useState(
    new Array(menuItems.length).fill(false)
  );

  const handleSubMenuToggle = (index) => {
    const newOpenSubMenu = [...openSubMenu];
    newOpenSubMenu[index] = !newOpenSubMenu[index];
    setOpenSubMenu(newOpenSubMenu);
  };

  return (
    <aside
      id="sidebar"
      className={`${openSidebarToggle ? "sidebar-responsive" : ""}`}
    >
      <div className="sidebar-title lg:hidden">
        <div className="flex items-center text-white mt-2 text-xl font-bold gap-2">
          <BsCart3 className="text-2xl" /> SHOP
        </div>
        <span className="text-white ml-20 mt-2 cursor-pointer lg:hidden">
          <BsXLg onClick={OpenSidebar} />
        </span>
      </div>

      <div className="mt-2">
        {menuItems.map((menuItem, index) => (
          <div key={index} className="text-xl text-[#ffffffd8]">
            {menuItem.subMenu ? (
              <a
                className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-[#c6c6c62a] transition duration-300 ease"
                onClick={() => handleSubMenuToggle(index)}
              >
                <span className="flex items-center gap-2">
                  {menuItem.icon} {menuItem.title}
                </span>
                <span
                  className={`transition-transform transform ${
                    openSubMenu[index] ? "rotate-90" : "rotate-0"
                  } ease-in-out duration-500`}
                >
                  <BsChevronRight />
                </span>
              </a>
            ) : (
              <a
                href={menuItem.link}
                className="flex items-center px-4 py-2 gap-2 hover:bg-[#c6c6c62a] transition duration-300 ease"
              >
                {menuItem.icon} {menuItem.title}
              </a>
            )}

            {openSubMenu[index] && menuItem.subMenu && (
              <div className="bg-[#c6c6c60e] flex flex-col">
                {menuItem.subMenu.map((subItem, subIndex) => (
                  <a
                    key={subIndex}
                    className="pl-12 leading-10 hover:bg-[#c6c6c62a] transition duration-200 ease-in-out"
                    href={subItem.subLink}
                  >
                    {subItem.subTitle}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
