import { useAppDispatch, useAppSelector } from 'app/hooks';
import { fetchWithLimit, selectLimit, selectNextCursor } from 'app/photo-slice';
import Footer from 'components/containers/footer.container';
import NavBar from 'components/containers/navbar.container';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

export interface MainLayoutProps {}

const MainLayout: React.FunctionComponent<MainLayoutProps> = (props) => {
  const { children } = props;

  const dispatch = useAppDispatch();
  const limit = useAppSelector(selectLimit);
  const next_cursor = useAppSelector(selectNextCursor);

  const handleScroll: React.UIEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLDivElement;
    if (target.scrollTop + target.clientHeight >= target.scrollHeight) {
      console.log('loading moreeeee');
      dispatch(fetchWithLimit({ limit, next_cursor }));
    }
  };

  return (
    <div
      css={tw`overflow-y-auto relative max-w-screen-8xl max-h-screen px-24 pb-8 mx-auto`}
      onScroll={handleScroll}
    >
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
