export type ButtonProps = {
  variant?: "primary" | "secondary" | "tertiary"
  children: React.ReactNode
  className: string
  disabled: boolean

} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function getVariant(variant:ButtonProps['variant'], disabled: ButtonProps['disabled']) {

  let variantClasses = ''
  switch (variant) {
    case "primary":
      variantClasses = 'bg-primary text-white'
      break;
    case "secondary":
      variantClasses = 'bg-quaternary text-primary'
      break;
    case "tertiary":
      variantClasses = 'bg-tertiary text-white'
      break;
    default:
      break;
  }
  return disabled ? 'bg-disabled text-disabled' : variantClasses
}

const Button = ({variant = "primary", children, className, disabled = false, ...rest}: ButtonProps) => {
  const generalStyle = 'rounded-md px-6 py-2'
  const btn = () => {
    return <button
    className={`${getVariant(variant, disabled)} ${generalStyle} ${className}`}
    disabled={disabled}
    {...rest}
    >
      {children}
    </button>
  }

  return btn()

}

export default Button;