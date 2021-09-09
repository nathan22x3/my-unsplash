/** @jsxImportSource @emotion/react */
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { fetchWithLimit, selectLimit, selectNextCursor } from 'app/photo-slice';
import { ReactComponent as LoadingIcon } from 'assets/icons/loading.svg';
import Footer from 'components/containers/footer.container';
import NavBar from 'components/containers/navbar.container';
import { useState } from 'react';
import tw from 'twin.macro';

export interface MainLayoutProps {}

const MainLayout: React.FunctionComponent<MainLayoutProps> = (props) => {
  const { children } = props;

  const dispatch = useAppDispatch();
  const limit = useAppSelector(selectLimit);
  const next_cursor = useAppSelector(selectNextCursor);

  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore: React.UIEventHandler<HTMLDivElement> = (e) => {
    if (!next_cursor) return;

    const target = e.target as HTMLDivElement;
    if (target.scrollTop + target.clientHeight >= target.scrollHeight) {
      setIsLoading(true);

      setTimeout(() => {
        dispatch(fetchWithLimit({ limit, next_cursor }));
        setIsLoading(false);
      }, 1000);
    }
  };

  return (
    <div
      css={tw`overflow-y-auto relative flex flex-col items-center h-screen px-24 pb-8 mx-auto`}
      onScroll={handleLoadMore}
    >
      <NavBar />
      {children}
      {isLoading && (
        <div css={tw`mb-16`}>
          <LoadingIcon css={tw`w-10 h-10 text-blue animate-spin`} />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default MainLayout;
