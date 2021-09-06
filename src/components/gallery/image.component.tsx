/** @jsxImportSource @emotion/react */
import Button from 'components/common/button.component';
import Input from 'components/common/input.component';
import Modal from 'components/common/modal.component';
import { useState } from 'react';
import tw from 'twin.macro';
import { disableScrolling, enableScrolling } from 'utils/window.util';

export interface ImageProps {
  src: string;
  alt: string;
}

const Image: React.FunctionComponent<ImageProps> = (props) => {
  const { src, alt } = props;

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    disableScrolling();
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    enableScrolling();
    setOpenModal(false);
  };

  return (
    <div className="group" css={tw`relative overflow-hidden rounded-2xl`}>
      <img {...{ src, alt }} draggable="false" css={tw`select-none`} />
      <div
        css={tw`absolute inset-0 flex flex-col justify-between items-end pt-5 pr-5 pb-8 pl-6 bg-black bg-opacity-50 opacity-0 duration-200 group-hover:opacity-100`}
      >
        <Button
          label="delete"
          size="sm"
          variant="outline-danger"
          disabledShadow
          onClick={handleOpenModal}
        />
        <span
          className="line-clamp"
          css={tw`self-start max-w-[25ch] font-bold text-lg text-white select-none`}
        >
          Morbi consequat lectus non orci maximus on orci maximus on orci maximus on orci maximus
        </span>
      </div>
      <Modal title="Are you sure?" show={openModal} onCloseModal={handleCloseModal}>
        <form css={tw`space-y-4`}>
          <Input id="label" label="Password" type="password" placeholder="******************" />
          <div css={tw`flex justify-end items-center gap-x-6 !mt-6`}>
            <span
              css={tw`text-gray-200 cursor-pointer duration-200 hover:text-gray-600`}
              onClick={handleCloseModal}
            >
              Cancel
            </span>
            <Button label="Delete" variant="solid-danger" />
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Image;
