import Masonry from 'react-masonry-css';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

export interface GalleryProps {}

const Gallery: React.FunctionComponent<GalleryProps> = (props) => {
  const { children } = props;

  return (
    <Masonry
      breakpointCols={3}
      className="masonry"
      columnClassName="masonry-column"
      css={tw`my-12`}
    >
      {children}
    </Masonry>
  );
};

export default Gallery;
