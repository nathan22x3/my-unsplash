import { ReactComponent as Logo } from 'assets/images/logo.svg';
import Button from 'components/common/button.component';
import Input from 'components/common/input.component';
import Modal from 'components/common/modal.component';
import SearchInput from 'components/common/search-input.component';
import { useState } from 'react';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import { disableScrolling, enableScrolling } from 'utils/window.util';

export interface NavBarProps {}

const NavBar: React.FunctionComponent<NavBarProps> = () => {
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
    <nav css={tw`sticky z-20 top-0 flex items-center justify-between py-8 bg-white`}>
      <div css={tw`flex items-center gap-x-4`}>
        <Logo />
        <SearchInput />
      </div>
      <Button label="Add a photo" variant="solid-success" onClick={handleOpenModal} />
      <Modal title="Add a new photo" show={openModal} onCloseModal={handleCloseModal}>
        <form css={tw`space-y-4`}>
          <Input id="label" label="Label" placeholder="Your image label" />
          <Input
            id="url"
            label="Photo URL"
            placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r..."
          />
          <div css={tw`flex justify-end items-center gap-x-6 !mt-6`}>
            <span
              css={tw`text-gray-200 cursor-pointer duration-200 hover:text-gray-600`}
              onClick={handleCloseModal}
            >
              Cancel
            </span>
            <Button label="Submit" variant="solid-success" />
          </div>
        </form>
      </Modal>
    </nav>
  );
};

export default NavBar;
