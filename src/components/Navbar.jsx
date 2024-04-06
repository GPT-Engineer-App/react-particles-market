import React from "react";
import { Box, Flex, Spacer, Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="gray.100" py={4}>
      <Flex alignItems="center" maxW="container.lg" mx="auto">
        <Link to="/">
          <Image src="/path/to/logo.png" alt="React Particles Logo" />
        </Link>
        <Spacer />
        <Button colorScheme="teal" mr={4}>
          Sign Up
        </Button>
        <Button colorScheme="teal" variant="outline">
          Log In
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
