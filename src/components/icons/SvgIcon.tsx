
import { SVGProps, FC } from "react";

const SvgIcon: FC<SVGProps<SVGSVGElement>> = ({ children, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props}>
      {children}
    </svg>
  );
};

export default SvgIcon;
