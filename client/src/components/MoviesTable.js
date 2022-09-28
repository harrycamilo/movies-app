import { Table, Image, Text } from "@nextui-org/react";
import { data } from "../data";

const MoviesTable = () => {
  const columns = [
    { name: "", uid: "img" },
    { name: "TITLE", uid: "title" },
    { name: "RELEASE DATE", uid: "release_date" },
    { name: "RATING", uid: "vote_average" },
    { name: "POPULARITY", uid: "popularity" },
  ];

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
          <Text b size={13} css={{ tt: "capitalize" }}>
            {cellValue}
          </Text>
        );
      case "release_date":
        return (
          <Text b size={13} css={{ tt: "capitalize" }}>
            {cellValue}
          </Text>
        );

      case "rating":
        return (
          <Text b size={13} css={{ tt: "capitalize" }}>
            {cellValue}
          </Text>
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
    <Table
      bordered
      aria-label="Example table with custom cells"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
      selectionMode="none"
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
        {(item) => (
          <Table.Row>
            {(columnKey) => (
              <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
            )}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  );
};

export default MoviesTable;
