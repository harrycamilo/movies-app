import { Container, NextUIProvider, Pagination, styled } from "@nextui-org/react";
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
  return (
    <NextUIProvider theme={DarkTheme}>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <MoviesTable />
      </Suspense>
    </NextUIProvider>
  );
}

export default App;