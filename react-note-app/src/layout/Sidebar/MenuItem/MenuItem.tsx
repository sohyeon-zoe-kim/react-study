import { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import { useAppDisPatch } from "../../../hooks/redux";
import { toggleMenu } from "../../../store/menu/menuSlice";

interface MenuItemProps {
  icon: ReactElement;
  title: string;
  link: string;
  navState: string;
  shouldPageMove: boolean;
}

const MenuItem = ({
  icon,
  title,
  link,
  navState,
  shouldPageMove,
}: MenuItemProps) => {
  const dispatch = useAppDisPatch();
  return (
    <li onClick={() => dispatch(toggleMenu(false))}>
      <NavLink
        to={link}
        state={navState}
        className={
          shouldPageMove
            ? ({ isActive }) => (isActive ? "active-item" : "inactive-item")
            : ""
        }
      >
        <span>{icon}</span>
        <span>{title}</span>
      </NavLink>
    </li>
  );
};

export default MenuItem;
