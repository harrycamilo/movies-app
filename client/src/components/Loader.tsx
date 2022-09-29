import React from 'react';
import { Container, Loading } from "@nextui-org/react";

export const Loader = () => {
  return (
    <Container fluid>
        <Loading type="spinner" size="xl" color={"secondary"}/>
    </Container>
  )
}
