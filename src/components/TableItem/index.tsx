import * as C from "./styles";
import { Item } from "../../types/Item";
import { formatDate } from "../../helpers/dataFilter";
import { Categories } from "../../data/Categories";

type Props = {
  item: Item;
};

const TableItem = ({ item }: Props) => {
  return (
    <C.tableLine>
      <C.tableColumn>{formatDate(item.date)}</C.tableColumn>
      <C.tableColumn>
        <C.category color={Categories[item.category].color}>
          {Categories[item.category].title}
        </C.category>
      </C.tableColumn>
      <C.tableColumn>{item.title}</C.tableColumn>
      <C.tableColumn>
        <C.value color={Categories[item.category].expense ? "red" : "green"}>
          R$ {item.value}
        </C.value>
      </C.tableColumn>
    </C.tableLine>
  );
};

export default TableItem;
