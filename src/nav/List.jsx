import Navlist from "./Navlist";

const List = ({ item, className }) => {
  if (typeof item === "string") {
    return (
      <li>
        <a href="" className={className}>
          {item}
        </a>
      </li>
    );
  }

  return (
    <>
      <li className={"dropdown list-anchor"}>
        {item.label}
        <Navlist list={item.sublinks} className={"dropdown-menu"} />
      </li>
    </>
  );
};

export default List;
