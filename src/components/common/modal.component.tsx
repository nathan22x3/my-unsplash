/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

export interface ModalProps {
  title?: string;
  show?: boolean;
  onCloseModal: () => void;
}

const Modal: React.FunctionComponent<ModalProps> = (props) => {
  const { title, show, onCloseModal, children } = props;

  return show ? (
    <div
      css={tw`fixed inset-0 z-50 flex justify-center backdrop-blur-sm items-center bg-black bg-opacity-25 duration-200`}
      onClick={onCloseModal}
    >
      <div css={tw`w-[620px] rounded-xl px-8 py-6 bg-white`} onClick={(e) => e.stopPropagation()}>
        <h2 css={tw`mb-5 text-2xl text-gray-600`}>{title}</h2>
        {children}
      </div>
    </div>
  ) : (
    <div css={tw`sr-only`} />
  );
};

Modal.defaultProps = {
  title: 'Modal title',
  show: true,
};

export default Modal;
