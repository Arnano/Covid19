import { useState } from "react";
import { Logo } from "../components/Logo";

import {
  Spinner,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Icon,
  Button,
  Box,
  PseudoBox
} from "@chakra-ui/core";

const Search = ({ onHandleClick, countriesLoading, countriesData }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setOpen] = useState(false);
  const [list, setList] = useState([]);
  const [slug, setSlug] = useState("");

  if (countriesLoading || !countriesData) return <Logo />;

  const onHandleChange = e => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);
    setOpen(false);

    if (searchValue.length >= 3) {
      setOpen(true);
      const listFiltered = countriesData.getCountries.filter(country =>
        country.Country.toLowerCase().includes(searchValue.toLowerCase())
      );
      return setList(listFiltered);
    }

    return setList([]);
  };

  return (
    <div className="search">
      <InputGroup size="md" maxWidth="960px">
        <InputLeftElement children={<Icon name="search" color="gray.300" />} />
        <Input
          backgroundColor="gray.100"
          pr="4.5rem"
          type={"text"}
          onChange={e => onHandleChange(e)}
          value={searchTerm}
          placeholder="Search"
        />
        <InputRightElement width="unset">
          <Button
            h="2.5rem"
            size="sm"
            variantColor="green"
            borderBottomLeftRadius="0"
            borderTopLeftRadius="0"
            variant="solid"
            onClick={() => onHandleClick(slug)}
          >
            Search
          </Button>
        </InputRightElement>
      </InputGroup>

      {!!list.length && isOpen && (
        <Box borderWidth="1px" rounded="md" overflow="hidden">
          <PseudoBox px={4} py={2} bg="gray.100" borderTopWidth="1px">
            Select a country
          </PseudoBox>
          {list.map(item => (
            <PseudoBox
              key={item.Slug}
              px={4}
              py={2}
              bg="white"
              borderTopWidth="1px"
              _first={{ borderTopWidth: 0 }}
              cursor="pointer"
              _hover={{ backgroundColor: "gray.50" }}
              onClick={() => {
                setSearchTerm(item.Country);
                setSlug(item.Slug);
                setOpen(false);
              }}
            >
              {item.Country}
            </PseudoBox>
          ))}
        </Box>
      )}
    </div>
  );
};

// export default withApollo(Search);
export default Search;
