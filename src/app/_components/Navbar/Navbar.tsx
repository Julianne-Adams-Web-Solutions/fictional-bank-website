import Image from "next/image";
import logo from "@/app/_public/images/logo-no-background.svg";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Image src={logo} alt="Fictional Bank Logo" width={220} />
    </div>
  );
};

export default Navbar;
