interface Props {

  // le paramètre n'est pas obligatoie avec "?"
  variant?:
  "display"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "lead"
  | "body-lg"
  | "body-base"
  | "body-sm"
  | "caption1"
  | "caption2"
  | "caption3"
  | "caption4";
  component?:
 "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "div"
  | "p"
  | "span"
  children: React.ReactNode;
}

import React from 'react'

function Typographie({ variant = "h3", component: Component = "div", children }: Props) {
  
  let variantStyle: string

  switch (variant) {
    case "display":
      variantStyle = ""
      break;
    case "h1":
      variantStyle = ""
      break;
}

  return (
    <Component>
      {children}
    </Component>
  )
}

export default Typographie
