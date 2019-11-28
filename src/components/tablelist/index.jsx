import React from "react";
import {
  Card,
  Header,
  Table,
  HeaderCell,
  List,
  Row,
  Cell,
  Image,
  Pill,
  Button
} from "./index.style";

export default function TableList() {
  return (
    <Card>
      <Table>
        <Header>
          <tr>
            <HeaderCell>Image</HeaderCell>
            <HeaderCell>Name</HeaderCell>
            <HeaderCell>Size</HeaderCell>
            <HeaderCell>Uploaded By</HeaderCell>
            <HeaderCell>Tag</HeaderCell>
            <HeaderCell>Date</HeaderCell>
            <HeaderCell></HeaderCell>
          </tr>
        </Header>
        <List>
          <Row>
            <Cell>
              <Image rounded size="30px" src="http://lorempixel.com/100/100/" />
            </Cell>
            <Cell black>Redesign Brief 2019.pdf</Cell>
            <Cell>159 KB</Cell>
            <Cell>Mattie Blooman</Cell>
            <Cell>
              <Pill color="yellow">Marketing</Pill>
            </Cell>
            <Cell>08 Jan 2019</Cell>
            <Cell>
              <Button color="lightGray">Action</Button>{" "}
            </Cell>
          </Row>
          <Row>
            <Cell>
              <Image rounded size="30px" src="http://lorempixel.com/100/100/" />
            </Cell>
            <Cell black>Redesign Brief 2019.pdf</Cell>
            <Cell>159 KB</Cell>
            <Cell>Mattie Blooman</Cell>
            <Cell>
              <Pill color="blue">Design</Pill>
            </Cell>
            <Cell>08 Jan 2019</Cell>
            <Cell>
              <Button color="lightGray">Action</Button>{" "}
            </Cell>
          </Row>
          <Row>
            <Cell>
              <Image rounded size="30px" src="http://lorempixel.com/100/100/" />
            </Cell>
            <Cell black>Redesign Brief 2019.pdf</Cell>
            <Cell>159 KB</Cell>
            <Cell>Mattie Blooman</Cell>
            <Cell>
              <Pill color="orange">Development</Pill>
            </Cell>
            <Cell>08 Jan 2019</Cell>
            <Cell>
              <Button color="lightGray">Action</Button>
            </Cell>
          </Row>
        </List>
      </Table>
    </Card>
  );
}
