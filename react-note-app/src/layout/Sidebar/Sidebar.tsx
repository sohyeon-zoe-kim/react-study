import React from "react";
import { Container, ItemsBox, MainBox, StyledLogo } from "./Sidebar.styles";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/redux";
import { FaArchive, FaLightbulb, FaTag, FaTrash } from "react-icons/fa";
import getStandardName from "../../utils/getStandardName";
import { toggleTagsModal } from "../../store/modal/modalSlice";
import { MdEdit } from "react-icons/md";
import { v4 } from "uuid";
import MenuItem from "./MenuItem/MenuItem";

const items = [
  { icon: <FaArchive />, title: "Archive", id: v4() },
  { icon: <FaTrash />, title: "Trash", id: v4() },
];

const Sidebar = () => {
  const dispatch = useDispatch();
  const { tagsList } = useAppSelector((state) => state.tags);
  const { pathname } = useLocation();
  const { isOpen } = useAppSelector((state) => state.menu);

  if (pathname === "/404") return null;
  return (
    <Container openMenu={isOpen ? "open" : ""}>
      <MainBox openMenu={isOpen ? "open" : ""}>
        <StyledLogo>
          <h1>Keep</h1>
        </StyledLogo>
        <ItemsBox>
          {/* note item */}
          <MenuItem
            icon={<FaLightbulb />}
            title={"Notes"}
            link={"/"}
            navState={"notes"}
            shouldPageMove={true}
          />
          {/* tag items */}
          {tagsList?.map(({ tag, id }) => (
            <MenuItem
              key={id}
              icon={<FaTag />}
              title={getStandardName(tag)}
              link={`/tag/${tag}`}
              navState={`${tag}`}
              shouldPageMove={true}
            />
          ))}
          {/* edit tag item */}
          <li
            className="sidebar__edit-item"
            onClick={() =>
              dispatch(toggleTagsModal({ type: "edit", view: true }))
            }
          >
            <span>
              <MdEdit />
            </span>
            <span>Edit Notes</span>
          </li>
          {/* other items */}
          {items.map(({ icon, title, id }) => (
            <MenuItem
              key={id}
              icon={icon}
              title={title}
              link={`/${title.toLocaleLowerCase()}`}
              navState={`${title}`}
              shouldPageMove={true}
            />
          ))}
        </ItemsBox>
      </MainBox>
    </Container>
  );
};

export default Sidebar;
