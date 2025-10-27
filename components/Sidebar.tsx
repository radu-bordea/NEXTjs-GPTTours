import MemberProfile from "./MemberProfile";
import NavLinks from "./NavLinks";
import SidebarHeader from "./SidebarHeader";

const SideBar = () => {
  return (
    <div className="px-4 w-80 h-screen bg-base-300 py-12 flex flex-col">
      {/* first row */}
      <SidebarHeader />
      {/* second row */}
      <NavLinks />
      {/* third row */}
      <MemberProfile />
    </div>
  );
};

export default SideBar;
