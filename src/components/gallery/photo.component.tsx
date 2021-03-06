/** @jsxImportSource @emotion/react */
import photoApi from 'apis/photo.api';
import { useAppDispatch } from 'app/hooks';
import { deletePhotoById } from 'app/photo-slice';
import Button from 'components/common/button.component';
import Input from 'components/common/input.component';
import Modal from 'components/common/modal.component';
import { Photo as IPhoto } from 'interfaces/photo.interface';
import { useState } from 'react';
import tw from 'twin.macro';
import { disableScrolling, enableScrolling } from 'utils/browser.util';

export interface PhotoProps extends IPhoto {}

const Photo: React.FunctionComponent<PhotoProps> = (props) => {
  const { _id, label, url } = props;

  const dispatch = useAppDispatch();
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    disableScrolling();
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    enableScrolling();
    setOpenModal(false);
  };

  const handleDeletePhoto: React.MouseEventHandler = async (e) => {
    e.preventDefault();

    try {
      await photoApi.deleteById(_id);
      handleCloseModal();
      dispatch(deletePhotoById(_id));
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  return (
    <div className="group" css={tw`relative overflow-hidden rounded-2xl`}>
      <img src={url} alt={label} draggable="false" css={tw`select-none`} />
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
          {label}
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
            <Button label="Delete" variant="solid-danger" onClick={handleDeletePhoto} />
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Photo;
