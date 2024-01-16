import Link from "next/link";

interface StyledLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  isIddle?: boolean;
}

const StyledLink: React.FC<StyledLinkProps> = ({
  children,
  isIddle,
  ...rest
}) => {
  return (
    <Link
      href={rest.href || "/"}
      className={` text-fontColor text-sm no-underline cursor-pointer hover:underline ${
        isIddle ? "animate-bounce text-primaryColor font-serif-medium text-lg" : ""
      } ${rest.className}}`}
      {...rest}>
      {children}
    </Link>
  );
};

export default StyledLink;
