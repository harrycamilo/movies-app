import {
  Image,
  Table,
  Text
} from "@nextui-org/react";
import React from "react";
import { RatingBadge } from "./RatingBadge";

type Movies = {
  page: number,
  results: any[],
  "total_pages": number,
  "total_results": number,
}

const MoviesTable = ({ movies }: { movies: any }) => {
  const columns = React.useMemo(
    () => [
      { name: "", uid: "img", id: "img" },
      { name: "TITLE", uid: "title", id: "title" },
      { name: "RELEASE DATE", uid: "release_date", id: "release_date" },
      { name: "RATING", uid: "vote_average", id: "vote_average" },
      { name: "POPULARITY", uid: "popularity", id: "popularity" },
    ],
    []
  );

  const imageBaseUrl = "http://image.tmdb.org/t/p/w300";

  const renderCell = (movies: any, columnKey: React.Key) => {
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
        return <RatingBadge rating={cellValue} />;

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
          <Table.Column key={column.uid} hideHeader={false} align={"start"}>
            {column.name}
          </Table.Column>
        )}
      </Table.Header>
      <Table.Body items={movies}>
        {(item) => {
          //prepareRow(item)
          return (
            <Table.Row>
              {(columnKey) => (
                <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
              )}
            </Table.Row>
          );
        }}
      </Table.Body>
    </Table>
  );
};

export default MoviesTable;
