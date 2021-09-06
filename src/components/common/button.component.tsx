/** @jsxImportSource @emotion/react */
import tw, { TwStyle } from 'twin.macro';

export interface ButtonProps {
  label?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  transparent?: boolean;
  disabledShadow?: boolean;
}

type Color = 'primary' | 'success' | 'danger';
type Style = 'solid' | 'outline';

type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonVariant = `${Style}-${Color}`;

const buttonSizes: Record<ButtonSize, TwStyle> = {
  sm: tw`px-3 py-1 text-xs`,
  md: tw`px-4 py-3`,
  lg: tw`px-5 py-4`,
};

const buttonVariants: Record<ButtonVariant, TwStyle> = {
  'solid-primary': tw`bg-blue text-white`,
  'solid-success': tw`bg-green text-white`,
  'solid-danger': tw`bg-red text-white`,
  'outline-primary': tw`border-blue text-blue hover:(bg-blue text-white)`,
  'outline-success': tw`border-green text-green hover:(bg-green text-white)`,
  'outline-danger': tw`border-red text-red hover:(bg-red text-white)`,
};

const Button: React.FunctionComponent<ButtonProps> = (props) => {
  const { label, size, variant, transparent, disabledShadow } = props;

  return (
    <button
      className={!disabledShadow ? 'with-inherit-shadow' : ''}
      css={[
        tw`relative px-4 py-3 border border-transparent rounded-xl text-sm font-noto-sans duration-200`,
        buttonSizes[size as ButtonSize],
        buttonVariants[variant as ButtonVariant],
        transparent && tw`!bg-transparent`,
      ]}
    >
      <span>{label}</span>
    </button>
  );
};

Button.defaultProps = {
  label: 'Button',
  size: 'md',
  variant: 'solid-primary',
  transparent: false,
  disabledShadow: false,
};

export default Button;
