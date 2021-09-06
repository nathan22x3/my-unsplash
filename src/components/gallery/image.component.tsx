/** @jsxImportSource @emotion/react */
import Button from 'components/common/button.component';
import tw from 'twin.macro';

export interface ImageProps {
  src: string;
  alt: string;
}

const Image: React.FunctionComponent<ImageProps> = (props) => {
  const { src, alt } = props;

  return (
    <div className="group" css={tw`relative overflow-hidden rounded-2xl`}>
      <img {...{ src, alt }} draggable="false" css={tw`select-none`} />
      <div
        css={tw`absolute inset-0 flex flex-col justify-between items-end pt-5 pr-5 pb-8 pl-6 bg-black bg-opacity-50 opacity-0 duration-200 group-hover:opacity-100`}
      >
        <Button label="delete" size="sm" variant="outline-danger" disabledShadow />
        <span
          className="line-clamp"
          css={tw`self-start max-w-[25ch] font-bold text-lg text-white select-none`}
        >
          Morbi consequat lectus non orci maximus on orci maximus on orci maximus on orci maximus
        </span>
      </div>
    </div>
  );
};

export default Image;
