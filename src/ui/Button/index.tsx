import cn from "classnames";
import "./style.scss";

interface IProps {
  primary?: boolean;
  label?: string;
  size?: "small" | "medium" | "large";
  backgroundColor?: string;
}

export function Button(props: IProps) {
  const { primary, label, backgroundColor, size } = props;

  const mode = primary ? "button-primary" : "button-secondary";
  const sizeClass = size ? `button-${size}` : "";

  return (
    <button
      className={cn("index-button", mode, sizeClass)}
      style={{ backgroundColor: backgroundColor }}
    >
      {label}
    </button>
  );
}
