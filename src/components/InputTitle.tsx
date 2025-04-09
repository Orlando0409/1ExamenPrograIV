import { useProductContext } from "../context/productContext";

const InputTitle = () => {
  const { searchTitle, setSearchTitle } = useProductContext();

  return (
    <input
      type="text"
      placeholder="Input field / Filter by title"
      value={searchTitle}
      onChange={(e) => setSearchTitle(e.target.value)}
    />
  );
};

export default InputTitle;
