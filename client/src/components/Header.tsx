import { Button, FormElement, Image, Input, Link, Navbar, Text } from "@nextui-org/react";
import { useState } from "react";
import { Logo } from "./Logo";

const Header = ({ onPressSearch }: {onPressSearch: Function}) => {
  const [titleFilter, setTitleFilter] = useState('');

  const handleFilter = (e: React.ChangeEvent<FormElement>) => {
    setTitleFilter(e?.currentTarget?.value);
  }

  return (
    <Navbar variant={'static'}>
      <Navbar.Brand>
        <Logo />
      </Navbar.Brand>
      <Navbar.Content>
        <Input 
          aria-label="Search by movie title"
          type="search" 
          placeholder="Movie Title" 
          status="primary" 
          clearable
          onChange={handleFilter}
        />
        <Navbar.Item>
          <Button auto color={'secondary'}
            onPress={() => onPressSearch(titleFilter)}
          >
            Search
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
}

export default Header;
