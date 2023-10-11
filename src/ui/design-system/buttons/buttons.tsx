import clsx from "clsx";
interface Props {
  size?: "small" | "medium" | "large";
  variant?: "accent" | "secondary" | "outline" | "disabled" | "ico";
  icon?: any;
  iconTheme?: "accent" | "secondary" | "gray";
  iconPosition?: "left" | "right";
  disabled?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
}

export const Buttons = ({
  size = "medium",
  variant = "accent",
  icon,
  iconTheme = "accent",
  iconPosition = "right",
  disabled,
  isLoading,
  children,
}: Props) => {
  let variantStyle: string = "",
    sizeStyle: string = "",
    icoSize: number = 0;
  switch (variant) {
    case "accent": //Default
      variantStyle = "bg-primary hover:bg-primary-400/80 text-white rounded";
      break;
    case "secondary":
      variantStyle = "bg-primary hover:bg-primary-300/80 text-white rounded";
      break;
    case "outline":
      variantStyle =
        "bg-white hover:bg-gray-400/50 border border-gray-500 text-gray-900 rounded";
      break;
    case "disabled":
      variantStyle =
        "bg-gray-400 border border-gray-500 text-gray-600 cursor-not-allowed";
      break;
    case "ico":
      variantStyle = "";
      break;
  }

  switch (size) {
    case "small":
      sizeStyle = "text-caption3 py-[14px] px-[12px] font-medium";
      break;

    case "medium": //Default
      sizeStyle = "text-caption2 py-[18px] px-[15px] font-medium";
      break;
    case "large":
      sizeStyle = "text-caption1 py-[22px] px-[18px] font-medium";
      break;
  }

  return (
    <button
      type="button"
      className={clsx(variantStyle, sizeStyle, icoSize, "")}
      disabled={disabled}
    >
      {icon && variant === "ico" ? <></> : <>{children}</>}
    </button>
  );
};
