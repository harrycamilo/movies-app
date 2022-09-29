import { Container, NextUIProvider, styled, Text } from "@nextui-org/react";
import { lazy, Suspense, useState } from "react";
import useFetch from "react-fetch-hook";
import Navbar from "./components/Header";
import { DarkTheme } from "./themes";
import "./App.css";
import { Loader } from "./components/Loader";
import { PaginationControl } from "./components/PaginationControl";

const MoviesTable = lazy(() => import("./components/MoviesTable"));

const Box = styled("div", {
  boxSizing: "border-box",
});

const App = () => {
  const [url, setUrl] = useState(process.env.REACT_APP_API_URL || '');
  const { isLoading, data, error } = useFetch(url, {
    depends: [url]
  });

  const handlePagination = (page: number) => {
    console.log(page);
  };

  const handleSearch = (title: string) => {
    console.log(title);
  };

  return (
    <NextUIProvider theme={DarkTheme}>
      <Navbar onPressSearch={handleSearch}/>
      {error
        ? <Container>
          <Text>Something went wrong</Text>
        </Container>
        : isLoading
          ? <Loader />
          : <>
            <PaginationControl onPageChange={handlePagination}/>
            <Suspense fallback={<Loader />}>
              <MoviesTable movies={(data as any).results} />
            </Suspense>
          </>
      }
    </NextUIProvider>
  );
}

export default App;