import List from "./List";

const Navlist = ({ list, className }) => {
  return (
    <ul className={className}>
      {list.map((l, idx) => {
        return <List key={idx} item={l} className={"list-anchor"} />;
      })}
    </ul>
  );
};

export default Navlist;
