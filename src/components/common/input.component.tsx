/** @jsxImportSource @emotion/react */
import { InputHTMLAttributes } from 'react';
import tw from 'twin.macro';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
}

const Input: React.FunctionComponent<InputProps> = (props) => {
  const { id, label, onChange } = props;

  return (
    <div css={tw`flex flex-col gap-y-2`}>
      <label htmlFor={id} css={tw`text-sm text-gray-500`}>
        {label}
      </label>
      <input
        {...{ id, onChange }}
        {...props}
        css={tw`p-4 border border-gray-500 rounded-xl outline-none text-sm placeholder-gray-200`}
      />
    </div>
  );
};

Input.defaultProps = {
  label: 'Label',
  type: 'text',
  placeholder: 'Placeholder...',
  value: '',
};

export default Input;
