import Image from "next/image";
import logo from "@/app/_public/images/logo-no-background.svg";

const Navbar = () => {
  return (
    <div>
      <Image src={logo} alt="Fictional Bank Logo" width={220} />
    </div>
  );
};

export default Navbar;
