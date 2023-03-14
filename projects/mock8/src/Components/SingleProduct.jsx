import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { POST_PRODUCT } from "../redux/CartReducer/CartActionTypes";
import { getSingleProduct } from "../redux/ProductReducer/ProductAction";

const SingleProduct = () => {
  const { id } = useParams();
  const { single } = useSelector((store) => store.product);
  const { cart } = useSelector((store) => store.cart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, []);

  const handleAdd = () => {
    alert("Product Added to cart successfully");
    dispatch({ type: POST_PRODUCT, payload: single });
  };
  return (
    <>
      {single.id && (
        <Flex
          h="88vh"
          w="80%"
          justifyContent={"space-evenly"}
          marginInline={"auto"}
          border="1px solid black"
          p="1rem"
          borderRadius={"1rem"}
          bgGradient="linear(45deg, lightblue,white,lightblue)"
        >
          <Image
            borderRadius={"1rem"}
            src={single.image}
            w="60%"
            marginInline={"auto"}
            mr="1rem"
          />
          <Box>
            <Text
              padding={".7rem"}
              mt="1rem"
              mb=".7rem"
              border="1px solid black"
              borderRadius={"1rem"}
            >
              Brand : {single.brand}
            </Text>
            <Text
              padding={".7rem"}
              mb=".7rem"
              border="1px solid black"
              borderRadius={"1rem"}
            >
              Title : {single.title}
            </Text>
            <Text
              padding={".7rem"}
              mb=".7rem"
              border="1px solid black"
              borderRadius={"1rem"}
            >
              Description : Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Fugiat natus voluptate esse dolorum tempore, et magni quod
              possimus quisquam totam molestias dolore ratione velit porro
              numquam corrupti quidem non eum!
            </Text>
            <Text
              padding={".7rem"}
              mb=".7rem"
              border="1px solid black"
              borderRadius={"1rem"}
            >
              Category : {single.category}
            </Text>
            <Text
              padding={".7rem"}
              mb=".7rem"
              border="1px solid black"
              borderRadius={"1rem"}
            >
              Mrp : {single.price}
            </Text>
            <Button bgColor={"lightsalmon"} onClick={handleAdd}>
              Add to Cart
            </Button>
          </Box>
        </Flex>
      )}
    </>
  );
};

export default SingleProduct;
