import { Container, Pagination, Row } from '@nextui-org/react';

export const PaginationControl = ({ onPageChange }: { onPageChange: (page: number) => void }) => {
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
    </Container>
  )
}
