import { NextUIProvider, styled } from "@nextui-org/react";
import { Suspense } from "react";
import "./App.css";
import Navbar from "./components/Header";
import MoviesTable from "./components/MoviesTable";
import { DarkTheme } from "./themes";

//const Product = lazy(() => import("./components/Product"));
//const Cart = lazy(() => import("./components/Cart"));

const Box = styled("div", {
  boxSizing: "border-box",
});

const App = () => {
  const handlePagination = (page: number) => {
    console.log(page);
  };

  const handleSearch = (title: string) => {
    console.log(title);
  };

  return (
    <NextUIProvider theme={DarkTheme}>
      <Navbar onPressSearch={handleSearch}/>
      <Suspense fallback={<div>Loading...</div>}>
        <MoviesTable onPageChange={handlePagination}/>
      </Suspense>
    </NextUIProvider>
  );
}

export default App;