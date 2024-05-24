import { Box, Container, Flex, Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box as="nav" bg="gray.800" color="white" py={4}>
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
          <Heading as="h1" size="lg">Financial Times</Heading>
          <HStack spacing={8}>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Home</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>World</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Business</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Tech</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Markets</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Main Headline Section */}
      <Box as="section" bg="gray.100" py={16}>
        <Container maxW="container.lg">
          <Heading as="h2" size="2xl" mb={4}>Main Headline</Heading>
          <Text fontSize="lg">This is the main headline section where the most important news will be displayed.</Text>
        </Container>
      </Box>

      {/* Featured Articles Section */}
      <Box as="section" py={16}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={8}>Featured Articles</Heading>
          <VStack spacing={8}>
            <Box bg="gray.50" p={8} borderRadius="md" shadow="md" w="100%">
              <Heading as="h3" size="lg" mb={4}>Article 1</Heading>
              <Text>This is a brief description of the first featured article.</Text>
            </Box>
            <Box bg="gray.50" p={8} borderRadius="md" shadow="md" w="100%">
              <Heading as="h3" size="lg" mb={4}>Article 2</Heading>
              <Text>This is a brief description of the second featured article.</Text>
            </Box>
            <Box bg="gray.50" p={8} borderRadius="md" shadow="md" w="100%">
              <Heading as="h3" size="lg" mb={4}>Article 3</Heading>
              <Text>This is a brief description of the third featured article.</Text>
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={8}>
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center" flexDirection={{ base: "column", md: "row" }}>
            <Text>&copy; 2023 Financial Times</Text>
            <HStack spacing={8} mt={{ base: 4, md: 0 }}>
              <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Contact</Link>
              <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Privacy Policy</Link>
              <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Terms of Service</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Container>
  );
};

export default Index;