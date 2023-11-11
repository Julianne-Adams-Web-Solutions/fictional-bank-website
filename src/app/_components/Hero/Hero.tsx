import Image from "next/image";
import heroImage from "../../_public/images/hero.jpg";

const Hero = () => (
  <div className="hero">
    <Image
      priority
      src={heroImage}
      alt="Hero image"
      layout="fill"
      objectFit="cover"
      objectPosition="center"
      className="hero-image"
    />
  </div>
);

export default Hero;
