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
import { TbSoccerField, TbTrophy } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

import { Competition } from "../../../screens/Dashboard";
import { getDate, getHours } from "../../../utils/date";
import { pad } from "../../../utils/string";

type CompetitionTableProps = {
  competition: Competition;
};

const CompetitionTable: React.FC<CompetitionTableProps> = ({ competition }) => {
  const navigate = useNavigate();

  const navigateToMatch = (id: string) => {
    return () => {
      navigate("/match/" + id);
    };
  };

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
              <Tr bg="gray.50">
                <Th maxW="6" borderColor="gray.200">
                  Tempo
                </Th>
                <Th maxW="6" borderColor="gray.200">
                  Status
                </Th>
                <Th borderColor="gray.200">Partida</Th>
                <Th borderColor="gray.200"></Th>
                <Th borderColor="gray.200"></Th>
                <Th textAlign="center" maxW="4" borderColor="gray.200">
                  1
                </Th>
                <Th textAlign="center" maxW="4" borderColor="gray.200">
                  X
                </Th>
                <Th textAlign="center" maxW="4" borderColor="gray.200">
                  2
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {competition.matches.map(match => (
                <Tr
                  key={match.id}
                  _hover={{ bg: "gray.100" }}
                  cursor="pointer"
                  onClick={navigateToMatch("jd8asd90dajs")}
                >
                  <Td
                    borderColor="gray.200"
                    borderLeftWidth="3px"
                    borderLeftColor="red.500"
                    maxW="6"
                    textAlign="center"
                  >
                    {match.status === "STARTED" ? (
                      <>
                        <Text fontWeight="bold">
                          {pad(match.currentTime?.minute ?? "--", 2)}:
                          {pad(match.currentTime?.second ?? "--", 2)}
                        </Text>
                        <Text
                          fontWeight="bold"
                          fontSize="xs"
                          textTransform="uppercase"
                          color="gray.400"
                        >
                          Agora
                        </Text>
                      </>
                    ) : (
                      <>
                        <Text fontWeight="bold">{getHours(match.date)}</Text>
                        <Text
                          fontWeight="bold"
                          fontSize="xs"
                          textTransform="uppercase"
                          color="gray.400"
                        >
                          {getDate(match.date)}
                        </Text>
                      </>
                    )}
                  </Td>
                  <Td maxW="6" borderColor="gray.200">
                    {match.status === "STARTED" && (
                      <Badge bg="red.500" color="white">
                        Ao vivo
                      </Badge>
                    )}
                  </Td>
                  <Td borderColor="gray.200">
                    <Text fontWeight="bold">{match.home}</Text>
                  </Td>
                  <Td borderColor="gray.200" textAlign="center">
                    <Badge
                      bg="gray.700"
                      color="white"
                      mx="4"
                      fontSize="md"
                      borderRadius="sm"
                      py="0.5"
                      px="2"
                    >
                      {match.score?.home ?? "-"} : {match.score?.away ?? "-"}
                    </Badge>
                  </Td>
                  <Td borderColor="gray.200" textAlign="right">
                    <Text fontWeight="bold">{match.away}</Text>
                  </Td>
                  <Td borderColor="gray.200" textAlign="center" maxW="4">
                    {!match.odds || match.odds.length === 0 ? (
                      <Button variant="outline" size="sm" isDisabled>
                        -
                      </Button>
                    ) : match.odds.length > 2 ? (
                      <Button
                        variant="outline"
                        size="sm"
                        isDisabled={
                          !match.odds[0].odd ||
                          match.odds[0].status === "SUSPENDED"
                        }
                      >
                        {!match.odds[0].odd ||
                        match.odds[0].status === "SUSPENDED"
                          ? "-"
                          : (match.odds[0].odd / 1000).toFixed(2)}
                      </Button>
                    ) : (
                      ""
                    )}
                  </Td>
                  <Td borderColor="gray.200" textAlign="center" maxW="4">
                    {!match.odds || match.odds.length === 0 ? (
                      <Button variant="outline" size="sm" isDisabled>
                        -
                      </Button>
                    ) : match.odds.length === 2 ? (
                      <Button
                        variant="outline"
                        size="sm"
                        isDisabled={
                          !match.odds[0].odd ||
                          match.odds[0].status === "SUSPENDED"
                        }
                      >
                        {!match.odds[0].odd ||
                        match.odds[0].status === "SUSPENDED"
                          ? "-"
                          : (match.odds[0].odd / 1000).toFixed(2)}
                      </Button>
                    ) : match.odds.length > 2 ? (
                      <Button
                        variant="outline"
                        size="sm"
                        isDisabled={
                          !match.odds[1].odd ||
                          match.odds[1].status === "SUSPENDED"
                        }
                      >
                        {!match.odds[1].odd ||
                        match.odds[1].status === "SUSPENDED"
                          ? "-"
                          : (match.odds[1].odd / 1000).toFixed(2)}
                      </Button>
                    ) : (
                      <></>
                    )}
                  </Td>
                  <Td borderColor="gray.200" textAlign="center" maxW="4">
                    {!match.odds || match.odds.length === 0 ? (
                      <Button variant="outline" size="sm" isDisabled>
                        -
                      </Button>
                    ) : match.odds.length === 1 ? (
                      <Button
                        variant="outline"
                        size="sm"
                        isDisabled={
                          !match.odds[0].odd ||
                          match.odds[0].status === "SUSPENDED"
                        }
                      >
                        {!match.odds[0].odd ||
                        match.odds[0].status === "SUSPENDED"
                          ? "-"
                          : (match.odds[0].odd / 1000).toFixed(2)}
                      </Button>
                    ) : match.odds.length === 2 ? (
                      <Button
                        variant="outline"
                        size="sm"
                        isDisabled={
                          !match.odds[1].odd ||
                          match.odds[1].status === "SUSPENDED"
                        }
                      >
                        {!match.odds[1].odd ||
                        match.odds[1].status === "SUSPENDED"
                          ? "-"
                          : (match.odds[1].odd / 1000).toFixed(2)}
                      </Button>
                    ) : match.odds.length > 2 ? (
                      <Button
                        variant="outline"
                        size="sm"
                        isDisabled={
                          !match.odds[2].odd ||
                          match.odds[2].status === "SUSPENDED"
                        }
                      >
                        {!match.odds[2].odd ||
                        match.odds[2].status === "SUSPENDED"
                          ? "-"
                          : (match.odds[2].odd / 1000).toFixed(2)}
                      </Button>
                    ) : (
                      ""
                    )}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </LightMode>
    </Flex>
  );
};

export default CompetitionTable;
