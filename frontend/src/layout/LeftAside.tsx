import React from "react";

import {
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text
} from "@chakra-ui/react";

const LeftAside: React.FC = () => (
  <Flex as="aside" direction="column" bg="gray.800" color="white" minW="80">
    <Flex
      direction="column"
      p="6"
      borderBottom="1px solid"
      borderBottomColor="gray.700"
    >
      <Heading fontSize="xl" fontWeight="bold">
        Últimas apostas
      </Heading>
      <Text fontSize="sm" color="gray.500">
        Veja as últimas apostas em futebol
      </Text>
    </Flex>
    <Flex
      direction="column"
      p="6"
      flex="auto"
      align="center"
      justify="center"
      color="gray.400"
      bg="blackAlpha.300"
    >
      Nenhuma aposta encontrada
    </Flex>
    <Flex
      direction="column"
      px="6"
      pt="6"
      borderTop="1px solid"
      borderTopColor="gray.700"
    >
      <Heading fontSize="lg" fontWeight="bold">
        Partida em destaque
      </Heading>
    </Flex>
    <SimpleGrid columns={3} spacing={2} p="6">
      <Flex direction="column" justify="center" align="center">
        <Image
          src="https://upload.wikimedia.org/wikipedia/pt/9/98/Reals_Madrid.png"
          fallbackSrc="https://upload.wikimedia.org/wikipedia/en/thumb/6/67/FIFA_Nations_World_Champion_Badge.svg/1200px-FIFA_Nations_World_Champion_Badge.svg.png"
          h="24"
          w="24"
          objectFit="contain"
          objectPosition="center"
          mb="2"
        />
        <Text fontWeight="bold" textAlign="center" fontSize="sm">
          Real Madrid
        </Text>
      </Flex>
      <Flex direction="column" justify="center" align="center">
        <Text fontWeight="bold" fontSize="sm" color="gray.300">
          La Liga
        </Text>
        <Text fontWeight="bold" fontSize="4xl">
          5 : 4
        </Text>
      </Flex>
      <Flex direction="column" justify="center" align="center">
        <Image
          src="https://upload.wikimedia.org/wikipedia/pt/thumb/4/43/FCBarcelona.svg/1200px-FCBarcelona.svg.png"
          h="24"
          w="24"
          objectFit="contain"
          objectPosition="center"
          mb="2"
        />
        <Text fontWeight="bold" textAlign="center" fontSize="sm">
          Barcelona
        </Text>
      </Flex>
      <Flex direction="column" justify="center" align="center" mt="4">
        <Button variant="outline" size="sm">
          2.14
        </Button>
      </Flex>
      <Flex direction="column" justify="center" align="center" mt="4">
        <Button variant="outline" size="sm">
          1.32
        </Button>
      </Flex>
      <Flex direction="column" justify="center" align="center" mt="4">
        <Button variant="outline" size="sm">
          1.09
        </Button>
      </Flex>
    </SimpleGrid>
  </Flex>
);

export default LeftAside;
