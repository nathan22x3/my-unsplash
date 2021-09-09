/** @jsxImportSource @emotion/react */
import photoApi from 'apis/photo.api';
import { useAppDispatch } from 'app/hooks';
import { addNewPhoto } from 'app/photo-slice';
import { ReactComponent as Logo } from 'assets/images/logo.svg';
import Button from 'components/common/button.component';
import Input from 'components/common/input.component';
import Modal from 'components/common/modal.component';
import SearchInput from 'components/common/search-input.component';
import { Photo } from 'interfaces/photo.interface';
import { useReducer, useState } from 'react';
import tw from 'twin.macro';
import { disableScrolling, enableScrolling } from 'utils/browser.util';

export interface NavBarProps {}

const NavBar: React.FunctionComponent<NavBarProps> = () => {
  const dispatch = useAppDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [photo, setPhoto] = useReducer(
    (state: Photo, newState: { [key in keyof Photo]?: string }) =>
      ({
        ...state,
        ...newState,
      } as Photo),
    { label: '', url: '' } as Photo
  );

  const handleOpenModal = () => {
    disableScrolling();
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    enableScrolling();
    setOpenModal(false);
  };

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { name, value } = target;
    setPhoto({ [name]: value });
  };

  const handleAddPhoto: React.MouseEventHandler = async (e) => {
    e.preventDefault();

    try {
      const newPhoto = await photoApi.addNew(photo);
      dispatch(addNewPhoto(newPhoto));
      setPhoto({ label: '', url: '' });
      handleCloseModal();
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  return (
    <nav
      css={tw`sticky z-20 top-0 flex items-center justify-between w-full max-w-screen-8xl py-8 bg-white`}
    >
      <div css={tw`flex items-center gap-x-4`}>
        <Logo />
        <SearchInput />
      </div>
      <Button label="Add a photo" variant="solid-success" onClick={handleOpenModal} />
      <Modal title="Add a new photo" show={openModal} onCloseModal={handleCloseModal}>
        <form css={tw`space-y-4`}>
          <Input
            id="label"
            name="label"
            value={photo.label}
            label="Label"
            placeholder="Your image label"
            onChange={handleInputChange}
          />
          <Input
            id="url"
            name="url"
            value={photo.url}
            label="Photo URL"
            placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r..."
            onChange={handleInputChange}
          />
          <div css={tw`flex justify-end items-center gap-x-6 !mt-6`}>
            <span
              css={tw`text-gray-200 cursor-pointer duration-200 hover:text-gray-600`}
              onClick={handleCloseModal}
            >
              Cancel
            </span>
            <Button label="Submit" variant="solid-success" onClick={handleAddPhoto} />
          </div>
        </form>
      </Modal>
    </nav>
  );
};

export default NavBar;
