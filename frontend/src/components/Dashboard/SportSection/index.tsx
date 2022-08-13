import React, { useEffect, useState } from "react";

import {
  Flex,
  Heading,
  Icon,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack
} from "@chakra-ui/react";

import { Sport } from "../../../screens/Dashboard";
import SportIcon from "../../Common/SportIcon";
import CompetitionTable from "../CompetitionTable";

type SportSectionProps = {
  sport: Sport;
};

const SportSection: React.FC<SportSectionProps> = ({ sport }) => {
  return (
    <Flex
      as="section"
      direction="column"
      bg="white"
      w="full"
      overflow="hidden"
      borderTop="1px solid"
      borderTopColor="gray.200"
    >
      <Flex align="center" mb="4" px="6" pt="6">
        <Icon fontSize="6xl" mr="4" as={SportIcon} sport={sport.id} />
        <Flex direction="column">
          <Heading fontSize="2xl" fontWeight="bold">
            {sport.name}
          </Heading>
          <Text fontSize="md" color="gray.500">
            Veja as partidas em destaque
          </Text>
        </Flex>
      </Flex>
      <Tabs colorScheme="pink">
        <TabList
          px="6"
          bg="white"
          borderColor="gray.200"
          borderBottomWidth="1px"
        >
          <Tab
            _selected={{ color: "pink.500", borderColor: "pink.500" }}
            fontWeight="semibold"
          >
            Todos os jogos
          </Tab>
          <Tab
            _selected={{ color: "pink.500", borderColor: "pink.500" }}
            fontWeight="semibold"
          >
            Ao vivo
          </Tab>
          <Tab
            _selected={{ color: "pink.500", borderColor: "pink.500" }}
            fontWeight="semibold"
          >
            Encerrados
          </Tab>
          <Tab
            _selected={{ color: "pink.500", borderColor: "pink.500" }}
            fontWeight="semibold"
          >
            A seguir
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel p="0">
            <VStack spacing="8" bg="gray.100">
              {sport.competitions.map(competition => (
                <CompetitionTable
                  key={competition.id}
                  competition={competition}
                />
              ))}
            </VStack>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
          <TabPanel>
            <p>four!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default SportSection;
