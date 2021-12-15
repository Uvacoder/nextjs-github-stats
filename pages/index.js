import {
  Box,
  Flex,
  Heading,
  Stat,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import useSWR from "swr";

async function fetcher(...arg) {
  const res = await fetch(...arg);

  return res.json();
}

export default function Home() {
  const { data } = useSWR("/api/github?username=uvacoder", fetcher);

  return (
    <div>
      <Head>
        <title>Next Github Stats</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box as="main" mt={5}>
        <Heading as="h1" textAlign="center" size="2xl" mb={5}>
          Dr. Kimble's GitHub
        </Heading>
        <Flex justify="center">
          <Box w="300px" p={5} ml={8} mb={3} borderWidth="1px" rounded="lg">
            <Stat>
              <StatLabel>
                <Text fontSize="xl">Github Stars</Text>
              </StatLabel>
              <StatNumber>{data ? data.stars : "Loading"}</StatNumber>
            </Stat>
          </Box>
          <Box w="300px" p={5} ml={8} mb={3} borderWidth="1px" rounded="lg">
            <Stat>
              <StatLabel>
                <Text fontSize="xl">Github Followers</Text>
              </StatLabel>
              <StatNumber>{data ? data.followers : "Loading"}</StatNumber>
            </Stat>
          </Box>
          <Box w="300px" p={5} ml={8} mb={3} borderWidth="1px" rounded="lg">
            <Stat>
              <StatLabel>
                <Text fontSize="xl">Repos Starred</Text>
              </StatLabel>
              <StatNumber>{data ? data.starred : "Loading"}</StatNumber>
            </Stat>
          </Box>
        </Flex>
      </Box>
    </div>
  );
}
