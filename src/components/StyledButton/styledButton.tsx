interface StyledLinkProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isIddle?: boolean;
}

const StyledLink: React.FC<StyledLinkProps> = ({
  children,
  isIddle,
  ...rest
}) => {
  return (
    <button
      className={` text-fontColor text-sm no-underline cursor-pointer hover:underline ${
        isIddle
          ? "animate-bounce text-primaryColor font-serif-medium text-lg"
          : ""
      } ${rest.className}`}
      {...rest}>
      {children}
    </button>
  );
};

export default StyledLink;
