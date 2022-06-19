import { Sub } from "../types";

type Props = {
  subs: Array<Sub>;
};

const List = ({ subs }: Props) => {
  const renderList = (): JSX.Element[] => {
    return subs.map(({ avatar, description, nick, subMonths }) => {
      return (
        <li key={nick}>
          <img src={avatar} alt={`avatar de ${nick}`} />
          <ul>
            <li>
              <b>Nombre: </b>
              <span>{nick}</span>
            </li>
            <li>
              <b>Descripción: </b>
              <span>{description?.substring(0, 20)}</span>
            </li>
            <li>
              <b>Meses suscrito: </b>
              <span>{subMonths}</span>
            </li>
          </ul>
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};

export default List;
