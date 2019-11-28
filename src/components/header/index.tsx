import React from "react";
import { Header, Title, TitleOptions } from "./index.style";

import UsersBtns from "./Users_Btns/users_btns";
import SubMenu from "./SubMenu/submenu";

export default function HeaderWrapper() {
  return (
    <Header submenu>
      <Title>
        Designers <TitleOptions className="fas fa-ellipsis-h"></TitleOptions>
      </Title>
      <UsersBtns />
      <SubMenu />
    </Header>
  );
}
