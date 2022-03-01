import { FC, SVGProps } from 'react';

const Logo: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width={18}
    height={18}
    fill="none"
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 2a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm4 0a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a1 1 0 1 0 0-2H8a2 2 0 0 1-2-2V4a2 2 0 0 0-2-2Zm6 0a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1.5a1 1 0 1 1 0 2H9a1 1 0 1 0 0 2h5a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-1.5a1 1 0 1 1 0-2H15a1 1 0 1 0 0-2h-5Z"
    />
  </svg>
);

export default Logo;
