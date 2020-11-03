import {
  Box,
  Flex,
  Heading,
  Stat,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/core";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next Github Stats</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box as="main" mt={5}>
        <Heading as="h1" textAlign="center" size="2xl" mb={5}>
          Scott's GitHub
        </Heading>
        <Flex justify="center">
          <Box w="300px" p={5} ml={8} mb={3} borderWidth="1px" rounded="lg">
            <Stat>
              <StatLabel>
                <Text fontSize="xl">GitHub Stars</Text>
              </StatLabel>
              <StatNumber>10</StatNumber>
            </Stat>
          </Box>
          <Box w="300px" p={5} ml={8} mb={3} borderWidth="1px" rounded="lg">
            <Stat>
              <StatLabel>
                <Text fontSize="xl">GitHub Stars</Text>
              </StatLabel>
              <StatNumber>10</StatNumber>
            </Stat>
          </Box>
          <Box w="300px" p={5} ml={8} mb={3} borderWidth="1px" rounded="lg">
            <Stat>
              <StatLabel>
                <Text fontSize="xl">GitHub Stars</Text>
              </StatLabel>
              <StatNumber>10</StatNumber>
            </Stat>
          </Box>
        </Flex>
      </Box>
    </div>
  );
}
