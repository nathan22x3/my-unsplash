import { ReactComponent as Logo } from 'assets/images/logo.svg';
import Button from 'components/common/button.component';
import SearchInput from 'components/common/search-input.component';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

export interface NavBarProps {}

const NavBar: React.FunctionComponent<NavBarProps> = () => {
  return (
    <nav css={tw`flex items-center justify-between`}>
      <div css={tw`flex items-center gap-x-4`}>
        <Logo />
        <SearchInput />
      </div>
      <Button label="Add a photo" variant="outline-success" />
    </nav>
  );
};

export default NavBar;
