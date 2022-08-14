import React, { useEffect, useState } from "react";

import {
  Badge,
  Button,
  Flex,
  Icon,
  LightMode,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr
} from "@chakra-ui/react";
import { TbTrophy } from "react-icons/tb";

import { Competition } from "../../../types";
import { getDate, getHours } from "../../../utils/date";
import { pad } from "../../../utils/string";
import MatchRow from "../MatchRow";

type CompetitionTableProps = {
  competition: Competition;
};

const CompetitionTable: React.FC<CompetitionTableProps> = ({ competition }) => {
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
        <TableContainer w="full">
          <Table bg="white">
            <Thead>
              <Tr bg="gray.50" display="flex" w="full">
                <Th maxW="6" borderColor="gray.200" flex="1">
                  Tempo
                </Th>
                <Th maxW="6" borderColor="gray.200" flex="1">
                  Status
                </Th>
                <Th borderColor="gray.200" flex="4">
                  Partida
                </Th>
                <Th borderColor="gray.200" flex="1"></Th>
                <Th borderColor="gray.200" flex="4"></Th>
                <Th textAlign="center" maxW="4" borderColor="gray.200" flex="1">
                  1
                </Th>
                <Th textAlign="center" maxW="4" borderColor="gray.200" flex="1">
                  X
                </Th>
                <Th textAlign="center" maxW="4" borderColor="gray.200" flex="1">
                  2
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {competition.matches.map(match => (
                <MatchRow key={match.id} match={match} />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </LightMode>
    </Flex>
  );
};

export default CompetitionTable;
