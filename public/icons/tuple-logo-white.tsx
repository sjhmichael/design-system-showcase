import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#fff"
    viewBox="0 0 105 48"
    {...props}
  >
    <path
      fill="#currentColor"
      fillRule="evenodd"
      d="M18 4 0 10v19.5l6 2V37l18 6V11.5l-6 2V4zM8 32.167 18 35.5V15.608l4-1.333v25.95L8 35.56v-3.392z"
      clipRule="evenodd"
    />
    <path
      fill="#currentColor"
      d="M42.9 20.45V31h4.446V20.45h3.53v-3.392H39.39v3.393h3.51zm10.205 4.798c0 3.978 2.3 6.006 6.376 6.006 3.9 0 6.396-1.853 6.396-6.045v-8.151h-4.446v7.995c0 1.833-.39 2.73-1.95 2.73-1.58 0-1.97-.897-1.97-2.71v-8.015h-4.406v8.19z"
    />
    <path
      fill="#currentColor"
      fillRule="evenodd"
      d="M68.965 31V17.058h5.558c4.017 0 5.733 1.794 5.733 4.777v.078c0 2.906-1.93 4.544-5.538 4.544h-1.346V31h-4.407zm5.323-7.507h-.916v-3.14h.936c1.15 0 1.755.43 1.755 1.502v.078c0 1.033-.605 1.56-1.775 1.56z"
      clipRule="evenodd"
    />
    <path
      fill="#currentColor"
      d="M82.563 31V17.058h4.427v10.53h5.07V31h-9.497zm11.999-13.942V31h10.218v-3.393h-5.811v-2.086h4.368v-3.1h-4.368v-1.97h5.499v-3.393h-9.906z"
    />
  </svg>
);
export default SvgComponent;
