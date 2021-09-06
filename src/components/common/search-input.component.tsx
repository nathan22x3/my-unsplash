import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

export interface SearchInputProps {}

const SearchInput: React.FunctionComponent<SearchInputProps> = () => {
  return (
    <div
      className="group"
      css={tw`overflow-hidden flex items-center pr-2 pl-4 border border-gray-200 rounded-xl duration-200 hover:border-gray-600`}
    >
      <SearchIcon css={tw`text-gray-200 duration-200 group-hover:text-gray-600`} />
      <input
        type="text"
        placeholder="Search by name"
        css={tw`p-3 outline-none placeholder-gray-200`}
      />
    </div>
  );
};

export default SearchInput;
