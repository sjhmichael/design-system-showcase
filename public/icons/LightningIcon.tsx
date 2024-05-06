import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 176 176"
    fill="#currentColor"
    {...props}
  >
    <path
      fill="#currentColor"
      d="m25.573 96.447 83.439-86.116c2.82-2.91 7.683-.264 6.77 3.684L104.898 61.1A4 4 0 0 0 108.795 66h38.273c3.505 0 5.315 4.187 2.914 6.74l-86.893 92.428c-2.8 2.979-7.737.334-6.81-3.647l12.437-53.383a4 4 0 0 0-3.896-4.907H28.445c-3.533 0-5.331-4.246-2.872-6.784Z"
    />
  </svg>
);
export default SvgComponent;
