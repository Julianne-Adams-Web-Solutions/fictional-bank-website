export type ButtonStyle = "solid" | "outline" | "light" | "ghost";
export type ButtonColor = "primary" | "secondary" | "neutral";
export type ButtonWidth = "normal" | "wide";

/**
 * A simple button component.
 *
 * @param type - The type of button.
 * @param buttonStyle - The button's style.
 * @param color - The button's main color. For solid buttons, this is the background color. For outline buttons, this is the text and outline color.
 * @param children - The text that will be displayed on the button.
 *
 * NOTE: The prop "buttonStyle" is named that instead of simply "style" because
 *       "style" is a reserved prop name in React and cannot be used for arbitrary props.
 */
const Button = ({
  type,
  buttonStyle,
  color,
  width = "normal",
  children,
}: {
  type: string;
  buttonStyle: ButtonStyle;
  color: ButtonColor;
  width: ButtonWidth | undefined;
  children: React.ReactNode;
}) => (
  <button
    type={type === "submit" ? "submit" : "button"}
    className={`button ${buttonStyle} ${color} ${width}`}
  >
    {children}
  </button>
);

export default Button;
