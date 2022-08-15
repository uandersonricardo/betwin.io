import React, { useEffect, useState } from "react";

import { Flex, Grid, GridItem, Icon, LightMode, Text } from "@chakra-ui/react";
import { TbTrophy } from "react-icons/tb";

import { Competition, MatchInfo, Odd } from "../../../types";
import MatchRow from "../MatchRow";

type CompetitionTableProps = {
  competition: Competition;
  onOpen: (match: MatchInfo, odd: Odd, category: string) => void;
};

const CompetitionTable: React.FC<CompetitionTableProps> = ({
  competition,
  onOpen
}) => {
  return (
    <Flex direction="column" w="full">
      <Flex
        bg="gray.50"
        px="6"
        py="4"
        borderColor="gray.200"
        borderBottomWidth="1px"
        borderTopWidth="1px"
        align="center"
        color="gray.700"
        w="full"
      >
        <Icon as={TbTrophy} fontSize="4xl" mr="4" />
        <Text fontSize="lg" fontWeight="bold">
          {competition.name}
        </Text>
      </Flex>
      <LightMode>
        <Flex direction="column" bg="white" w="full" overflow="hidden">
          <Grid
            w="full"
            templateColumns="5rem 5rem 1fr 4rem 4rem 4rem"
            gap={4}
            bg="gray.50"
            borderBottom="1px solid"
            borderColor="gray.200"
            py="3"
            px="8"
            textTransform="uppercase"
            fontWeight="bold"
            fontSize="xs"
            color="gray.600"
          >
            <GridItem>Tempo</GridItem>
            <GridItem>Status</GridItem>
            <GridItem>Partida</GridItem>
            <GridItem textAlign="center" justifySelf="center">
              1
            </GridItem>
            <GridItem textAlign="center" justifySelf="center">
              X
            </GridItem>
            <GridItem textAlign="center" justifySelf="center">
              2
            </GridItem>
          </Grid>
          {competition.matches.map(match => (
            <MatchRow key={match.id} match={match} onOpen={onOpen} />
          ))}
        </Flex>
      </LightMode>
    </Flex>
  );
};

export default CompetitionTable;
