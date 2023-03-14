import { Button, Center, Flex, Grid, Select, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";
import {
  getFilteredProducts,
  getProducts,
} from "../redux/ProductReducer/ProductAction";

const Products = () => {
  const { data,isLoading } = useSelector((store) => store.product);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);

  console.log(data);

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  useEffect(() => {
    if (filter !== "" || sort !== "null") {
      dispatch(getFilteredProducts(page, filter, sort));
    } else {
      dispatch(getProducts(page));
    }
  }, [page, sort, filter]);

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };
  if(isLoading){
    return <Spinner/>
  }

  return (
    <>
      <Flex>
        <Select
          placeholder="Filter by Category"
          onChange={handleFilter}
          bgColor="lightpink"
        >
          <option value="kids">Kids</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="homedecor">HomeDecor</option>
        </Select>
        <Select placeholder="Sort" onChange={handleSort} bgColor="lightblue">
          <option value="desc">High to Low</option>
          <option value="asc">Low to High</option>
        </Select>
      </Flex>
      <Grid
        templateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(2,1fr)",
          md: "repeat(4,1fr)",
        }}
        p="1rem"
        gap="1rem"
        marginInline={"auto"}
      >
        {data.data &&
          data.data.map((product, ind) => {
            return <ProductCard data={product} key={ind} />;
          })}
      </Grid>
      <Center>
        <Button
          onClick={() => setPage((prev) => prev - 1)}
          isDisabled={page === 1}
        >
          Prev
        </Button>
        {page}
        <Button
          onClick={() => setPage((prev) => prev + 1)}
          isDisabled={page === data.totalPages}
        >
          Next
        </Button>
      </Center>
    </>
  );
};

export default Products;
