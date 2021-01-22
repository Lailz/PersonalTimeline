import memories from "../memories";

const Itemslist = () => {
  const memoList = memories.map((memo) => {
    return <Items key={memo.id} memo={memo} />;
  });
  return <List>{memoList}</List>;
};

export default Itemslist;
