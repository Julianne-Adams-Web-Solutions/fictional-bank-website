import Image from "next/image";
import Link from "next/link";
import logo from "@/app/_public/images/logo-no-background.svg";
import Button from "@/app/_components/Button/Button";
import Navigation from "./Navigation/Navigation";

const Navbar = () => (
  <div className="navbar">
    <Image src={logo} alt="Fictional Bank Logo" width={220} height={0} />
    <div className="navbar__item-container">
      <div className="navigation-container">
        <Navigation />
      </div>
      <div className="navbar__button-container">
        <Link href="/open-account">
          <Button
            type="button"
            buttonStyle="outline"
            color="neutral"
            width="normal"
          >
            Open An Account
          </Button>
        </Link>
        <Link href="/login">
          <Button
            type="button"
            buttonStyle="solid"
            color="primary"
            width="normal"
          >
            Log In
          </Button>
        </Link>
      </div>
    </div>
  </div>
);

export default Navbar;
