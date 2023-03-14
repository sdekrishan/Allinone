import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ data }) => {
  const navigate = useNavigate();
  const handleProduct = () => {
    navigate(`/product/${data.id}`);
  };
  return (
    <Box
      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
      onClick={handleProduct}
      p="1rem"
      _hover={{bgGradient:"linear(135deg, lightpink,white,lightpink)"}}
      transition='all .8s ease'
      borderRadius={"1rem"}
      bgGradient="linear(45deg, lightblue,white,lightblue)"
    >
      <Image
        borderRadius={"1rem"}
        src={data.image}
        w="100%"
        marginInline={"auto"}
      />
      <Text
        padding={".7rem"}
        mt="1rem"
        mb=".7rem"
        border="1px solid black"
        borderRadius={"1rem"}
      >
        Brand : {data.brand}
      </Text>
      <Text
        padding={".7rem"}
        mb=".7rem"
        border="1px solid black"
        borderRadius={"1rem"}
      >
        Title : {data.title}
      </Text>
      <Text
        padding={".7rem"}
        mb=".7rem"
        border="1px solid black"
        borderRadius={"1rem"}
      >
        Category : {data.category}
      </Text>
      <Text
        padding={".7rem"}
        mb=".7rem"
        border="1px solid black"
        borderRadius={"1rem"}
      >
        Mrp : {data.price}
      </Text>
      <Button bgColor={"lightsalmon"}>Details</Button>
    </Box>
  );
};

export default ProductCard;
