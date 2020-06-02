import React from "react"

export default function SvgArrow({ width, rotate }) {
  return (
    <svg width={width ? width : "8px"} viewBox="0 0 12 23" xmlns="http://www.w3.org/2000/svg">
      <rect
        width="14.4277"
        height="3"
        rx="1.5"
        transform="matrix(-0.69311 -0.720832 0.69311 -0.720832 10 13.44)"
      />
      <path d="M1.03966 20.9212C0.465474 20.324 0.465474 19.3558 1.03966 18.7587L8.96033 10.5212C9.53452 9.92405 10.4655 9.92405 11.0397 10.5212V10.5212C11.6138 11.1184 11.6138 12.0865 11.0397 12.6837L3.119 20.9212C2.5448 21.5183 1.61386 21.5183 1.03966 20.9212V20.9212Z" />
    </svg>
  )
}
