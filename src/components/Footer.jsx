import React from "react";
import { Box, Text, Link, Stack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" mt={12} py={6} borderTopWidth={1} borderTopColor="gray.200" textAlign="center">
      <Stack spacing={4}>
        <Text>&copy; {new Date().getFullYear()} React Particles Marketplace. All rights reserved.</Text>
        <Stack direction="row" spacing={6} justifyContent="center">
          <Link href="#">About Us</Link>
          <Link href="#">Contact</Link>
          <Link href="#">Terms of Service</Link>
          <Link href="#">Privacy Policy</Link>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
