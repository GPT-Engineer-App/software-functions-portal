import { Container, VStack, Heading, Text, Button, Box, Image, Flex } from "@chakra-ui/react";
import { FaRocket, FaCode, FaMobileAlt, FaCloud } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center" py={10} px={6}>
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to Our Company
          </Heading>
          <Text fontSize="lg" color="gray.500">
            We provide innovative software solutions to help your business grow.
          </Text>
          <Button mt={6} colorScheme="teal" size="lg">
            Get Started
          </Button>
        </Box>

        <Flex direction={{ base: "column", md: "row" }} spacing={10} py={10}>
          <Box flex="1" textAlign="center" p={5}>
            <FaRocket size="3em" color="teal" />
            <Heading as="h3" size="lg" mt={4}>
              Innovative Solutions
            </Heading>
            <Text mt={2} color="gray.600">
              Cutting-edge technology to drive your business forward.
            </Text>
          </Box>
          <Box flex="1" textAlign="center" p={5}>
            <FaCode size="3em" color="teal" />
            <Heading as="h3" size="lg" mt={4}>
              Custom Development
            </Heading>
            <Text mt={2} color="gray.600">
              Tailored software solutions to meet your unique needs.
            </Text>
          </Box>
          <Box flex="1" textAlign="center" p={5}>
            <FaMobileAlt size="3em" color="teal" />
            <Heading as="h3" size="lg" mt={4}>
              Mobile Friendly
            </Heading>
            <Text mt={2} color="gray.600">
              Optimized for all devices, ensuring a seamless experience.
            </Text>
          </Box>
          <Box flex="1" textAlign="center" p={5}>
            <FaCloud size="3em" color="teal" />
            <Heading as="h3" size="lg" mt={4}>
              Cloud Integration
            </Heading>
            <Text mt={2} color="gray.600">
              Leveraging the power of the cloud for scalability and efficiency.
            </Text>
          </Box>
        </Flex>

        <Box textAlign="center" py={10} px={6}>
          <Heading as="h2" size="xl" mb={4}>
            About Us
          </Heading>
          <Text fontSize="lg" color="gray.500" mb={6}>
            Our company is dedicated to providing top-notch software solutions that help businesses achieve their goals. With a team of experienced developers and a passion for innovation, we are committed to delivering high-quality products and services.
          </Text>
          <Image src="/images/company-team.jpg" alt="Our Team" borderRadius="md" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;