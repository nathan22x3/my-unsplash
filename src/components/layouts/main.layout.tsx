import Footer from 'components/containers/footer.container';
import NavBar from 'components/containers/navbar.container';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

export interface MainLayoutProps {}

const MainLayout: React.FunctionComponent<MainLayoutProps> = (props) => {
  const { children } = props;

  return (
    <div css={tw`max-w-screen-8xl px-24 py-8 mx-auto`}>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
