import React from "react";

import {
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack
} from "@chakra-ui/react";

const RightAside: React.FC = () => (
  <Flex as="aside" direction="column" bg="gray.900" color="white" minW="72">
    <Flex
      direction="column"
      p="6"
      borderBottom="1px solid"
      borderBottomColor="gray.700"
    >
      <Heading fontSize="md" fontWeight="bold" mb="4">
        Partidas ao vivo
      </Heading>
      <HStack spacing={4}>
        <Button variant="outline" borderRadius="full" w="16" h="16">
          <Image src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/103.png&h=200&w=200" />
        </Button>
        <Button variant="outline" borderRadius="full" w="16" h="16">
          <Image src="https://upload.wikimedia.org/wikipedia/pt/4/4b/S%C3%A3o_Paulo_Futebol_Clube.png" />
        </Button>
        <Button variant="outline" borderRadius="full" w="16" h="16">
          <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/2048px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png" />
        </Button>
      </HStack>
    </Flex>
    <Flex
      direction="column"
      p="6"
      borderBottom="1px solid"
      borderBottomColor="gray.700"
    >
      <Heading fontSize="md" fontWeight="bold" mb="4">
        Países
      </Heading>
      <VStack>
        <Flex align="center" justify="start" w="full" py="2">
          <Image
            src="http://geo5.net/imagens/Bandeira-da-Alemanha-2000px.png"
            h="12"
            w="12"
            fit="cover"
            borderRadius="full"
            mr="4"
          />
          <Flex direction="column">
            <Text fontSize="sm" color="white" fontWeight="bold">
              Alemanha
            </Text>
            <Text fontSize="sm" color="gray.500">
              Bundesliga, Ligue 1
            </Text>
          </Flex>
        </Flex>
        <Flex align="center" justify="start" w="full" py="2">
          <Image
            src="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/2-bandeira-do-brasil.jpg"
            h="12"
            w="12"
            fit="cover"
            borderRadius="full"
            mr="4"
          />
          <Flex direction="column">
            <Text fontSize="sm" color="white" fontWeight="bold">
              Brasil
            </Text>
            <Text fontSize="sm" color="gray.500">
              Série A, Série B
            </Text>
          </Flex>
        </Flex>
        <Flex align="center" justify="start" w="full" py="2">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/255px-Flag_of_England.svg.png"
            h="12"
            w="12"
            fit="cover"
            borderRadius="full"
            mr="4"
          />
          <Flex direction="column">
            <Text fontSize="sm" color="white" fontWeight="bold">
              Inglaterra
            </Text>
            <Text fontSize="sm" color="gray.500">
              Premier League, Ligue 1
            </Text>
          </Flex>
        </Flex>
      </VStack>
    </Flex>
    <Flex
      direction="column"
      p="6"
      borderBottom="0px solid"
      borderBottomColor="gray.700"
    >
      <Heading fontSize="md" fontWeight="bold" mb="4">
        Ligas
      </Heading>
      <VStack>
        <Flex align="center" justify="start" w="full" py="2">
          <Image
            src="https://seeklogo.com/images/P/premier-league-logo-64B77E2F2E-seeklogo.com.png"
            h="12"
            w="12"
            fit="cover"
            borderRadius="full"
            mr="4"
          />
          <Flex direction="column">
            <Text fontSize="sm" color="white" fontWeight="bold">
              Premier League
            </Text>
            <Text fontSize="sm" color="gray.500">
              Futebol
            </Text>
          </Flex>
        </Flex>
        <Flex align="center" justify="start" w="full" py="2">
          <Image
            src="https://e7.pngegg.com/pngimages/985/30/png-clipart-2018-campeonato-brasileiro-serie-a-campeonato-brasileiro-serie-b-campeonato-brasileiro-serie-c-brazil-1959-campeonato-brasileiro-serie-a-football-text-logo.png"
            h="12"
            w="12"
            fit="cover"
            borderRadius="full"
            mr="4"
          />
          <Flex direction="column">
            <Text fontSize="sm" color="white" fontWeight="bold">
              Série A
            </Text>
            <Text fontSize="sm" color="gray.500">
              Futebol
            </Text>
          </Flex>
        </Flex>
        <Flex align="center" justify="start" w="full" py="2">
          <Image
            src="data:image/png;base64,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"
            h="12"
            w="12"
            fit="cover"
            borderRadius="full"
            mr="4"
          />
          <Flex direction="column">
            <Text fontSize="sm" color="white" fontWeight="bold">
              La Liga
            </Text>
            <Text fontSize="sm" color="gray.500">
              Futebol
            </Text>
          </Flex>
        </Flex>
        <Flex align="center" justify="start" w="full" py="2">
          <Image
            src="https://seeklogo.com/images/R/Roland_Garros-logo-7ED1E8BBFF-seeklogo.com.png"
            h="12"
            w="12"
            fit="cover"
            borderRadius="full"
            mr="4"
          />
          <Flex direction="column">
            <Text fontSize="sm" color="white" fontWeight="bold">
              Roland Garros
            </Text>
            <Text fontSize="sm" color="gray.500">
              Tênis
            </Text>
          </Flex>
        </Flex>
      </VStack>
    </Flex>
  </Flex>
);

export default RightAside;
