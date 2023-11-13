import Image from "next/image";
import heroImage from "../../_public/images/hero.jpg";
import LoginForm from "./LoginForm/LoginForm";

const Hero = () => (
  <div className="hero">
    <div className="image-gradient" />
    <Image
      priority
      src={heroImage}
      alt="Hero image"
      layout="fill"
      objectFit="cover"
      objectPosition="center"
      className="hero-image"
    />
    <div className="content-container">
      <h1 className="hero-text">
        World&apos;s leading traditional bank for over 50 years.
      </h1>
      <div className="login-form-container">
        <LoginForm />
      </div>
    </div>
  </div>
);

export default Hero;
