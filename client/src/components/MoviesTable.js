import {
  Container,
  Image,
  Pagination,
  Row,
  Table,
  Text
} from "@nextui-org/react";
import React from "react";
import { data } from "../data";
import { RatingBadge } from "./RatingBadge";

const MoviesTable = ({ onPageChange }) => {
  const columns = React.useMemo(() => [
    { name: "", uid: "img", id: "img" },
    { name: "TITLE", uid: "title", id: "title" },
    { name: "RELEASE DATE", uid: "release_date", id: "release_date" },
    { name: "RATING", uid: "vote_average", id: "vote_average" },
    { name: "POPULARITY", uid: "popularity", id: "popularity" },
  ], []);

  const imageBaseUrl = "http://image.tmdb.org/t/p/w300";

  const renderCell = (movies, columnKey) => {
    const cellValue = movies[columnKey];
    switch (columnKey) {
      case "img":
        return (
          <Image
            src={imageBaseUrl + movies.poster_path}
            alt={movies.title}
            width={50}
            height={50}
          />
        );
      case "title":
        return (
          <Text b size={16} css={{ tt: "capitalize" }}>
            {cellValue}
          </Text>
        );
      case "release_date":
        return (
          <Text b size={13} css={{ tt: "capitalize" }}>
            {cellValue}
          </Text>
        );

      case "vote_average":
        return (
          <RatingBadge rating={cellValue} />
        );

      case "views":
        return (
          <Text b size={13} css={{ tt: "capitalize" }}>
            {cellValue}
          </Text>
        );

      default:
        return cellValue;
    }
  };

  return (
    <Container fluid>
      <Row justify="center">
        <Pagination
          css={{ pb: 10 }}
          shadow
          color={"secondary"}
          total={10}
          onChange={onPageChange}
        />
      </Row>
    <Table
      bordered
      aria-label="Example table with custom cells"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
    >
      <Table.Header columns={columns}>
        {(column) => (
          <Table.Column
          key={column.uid}
          hideHeader={false}
          align={"start"}
          >
            {column.name}
          </Table.Column>
        )}
      </Table.Header>
      <Table.Body items={data.results}>
        {(item) => {
          //prepareRow(item)
          return <Table.Row>
            {(columnKey) => (
              <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
              )}
          </Table.Row>
        }}
      </Table.Body>
    </Table>
        </Container>
  );
};

export default MoviesTable;
