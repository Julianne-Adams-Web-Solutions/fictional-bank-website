import Link from "next/link";

const NavigationItem = ({
  label,
  href,
  active,
}: {
  label: string;
  href: string;
  active: boolean;
}) => {
  const className = active
    ? "navigation__item__link-active"
    : "navigation__item__link";

  return (
    <li>
      <Link href={href} className={className}>
        {label}
      </Link>
    </li>
  );
};

export default NavigationItem;
