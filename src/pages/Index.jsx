import React, { useState } from "react";
import { Box, Flex, Heading, Input, InputGroup, InputLeftElement, Stack, Tag, Text, Button, VStack, HStack, Avatar, useColorModeValue, IconButton, FormControl, FormLabel, Textarea, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { FaSearch, FaEnvelope, FaFilter, FaUserTie } from "react-icons/fa";
import Footer from "../components/Footer";

const developers = [
  { id: 1, name: "John Doe", location: "New York, USA", technologies: ["React", "Node.js", ".NET"] },
  { id: 2, name: "Jane Smith", location: "Berlin, Germany", technologies: ["Go", "React"] },
  { id: 3, name: "Wang Wei", location: "Shanghai, China", technologies: ["React", "Node.js"] },
  // ... more developers
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDevelopers, setFilteredDevelopers] = useState(developers);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedDeveloper, setSelectedDeveloper] = useState(null);

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    if (!term) {
      setFilteredDevelopers(developers);
    } else {
      setFilteredDevelopers(developers.filter((dev) => dev.name.toLowerCase().includes(term.toLowerCase()) || dev.location.toLowerCase().includes(term.toLowerCase()) || dev.technologies.some((tech) => tech.toLowerCase().includes(term.toLowerCase()))));
    }
  };

  const handleMessageClick = (developer) => {
    setSelectedDeveloper(developer);
    onOpen();
  };

  return (
    <Box p={8}>
      <Navbar />
      <VStack spacing={8}>
        <Heading as="h1" size="xl">
          React Particles Marketplace
        </Heading>
        <Text fontSize="lg">The premier destination to find and connect with web technology talent specialized in React, Node.js, .NET, Go, and more.</Text>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<FaSearch color="gray.300" />} />
          <Input placeholder="Search by name, location or technology" value={searchTerm} onChange={handleSearchChange} />
        </InputGroup>
        <Stack direction={["column", "row"]} spacing={4} align="center">
          <Button leftIcon={<FaFilter />} colorScheme="teal" variant="solid">
            Filters
          </Button>
          {/* More filter options can be added here */}
        </Stack>
        <VStack spacing={8} align="stretch">
          {filteredDevelopers.map((developer) => (
            <Flex key={developer.id} p={5} shadow="md" borderWidth="1px" align="center" borderRadius="md" bg={useColorModeValue("white", "gray.700")}>
              <Avatar size="lg" name={developer.name} mr={6} icon={<FaUserTie fontSize="1.5rem" />} />
              <Box flex="1">
                <Heading size="md">{developer.name}</Heading>
                <Text>{developer.location}</Text>
                <HStack spacing={2} mt={2}>
                  {developer.technologies.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </HStack>
              </Box>
              <IconButton aria-label={`Message ${developer.name}`} icon={<FaEnvelope />} onClick={() => handleMessageClick(developer)} />
            </Flex>
          ))}
        </VStack>
      </VStack>
      <Footer />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contact {selectedDeveloper?.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="Your message to the developer..." />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Send Message
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Index;
