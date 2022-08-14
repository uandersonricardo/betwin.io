import React, { useEffect, useState } from "react";

import { Badge, Button, Td, Text, Tr } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { MatchInfo } from "../../../types";
import { getDate, getHours } from "../../../utils/date";
import { pad } from "../../../utils/string";

type MatchRowProps = {
  match: MatchInfo;
};

const MatchRow: React.FC<MatchRowProps> = ({ match }) => {
  const navigate = useNavigate();

  const navigateToMatch = (id: string) => {
    return () => {
      navigate("/match/" + id);
    };
  };

  return (
    <Tr
      _hover={{ bg: "gray.100" }}
      cursor="pointer"
      onClick={navigateToMatch(match.id)}
      display="flex"
    >
      <Td
        borderColor="gray.200"
        borderLeftWidth="3px"
        borderLeftColor="red.500"
        textAlign="center"
        flex="1"
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
      <Td maxW="6" borderColor="gray.200" flex="1">
        {match.status === "STARTED" && (
          <Badge bg="red.500" color="white">
            Ao vivo
          </Badge>
        )}
      </Td>
      <Td borderColor="gray.200" flex="4">
        <Text fontWeight="bold">{match.home}</Text>
      </Td>
      <Td borderColor="gray.200" textAlign="center" flex="1">
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
      <Td borderColor="gray.200" textAlign="right" flex="4">
        <Text fontWeight="bold">{match.away}</Text>
      </Td>
      <Td borderColor="gray.200" textAlign="center" flex="1">
        {!match.odds || match.odds.length === 0 ? (
          <Button variant="outline" size="sm" isDisabled>
            -
          </Button>
        ) : match.odds.length > 2 ? (
          <Button
            variant="outline"
            size="sm"
            isDisabled={
              !match.odds[0].odd || match.odds[0].status === "SUSPENDED"
            }
          >
            {!match.odds[0].odd || match.odds[0].status === "SUSPENDED"
              ? "-"
              : (match.odds[0].odd / 1000).toFixed(2)}
          </Button>
        ) : (
          ""
        )}
      </Td>
      <Td borderColor="gray.200" textAlign="center" flex="1">
        {!match.odds || match.odds.length === 0 ? (
          <Button variant="outline" size="sm" isDisabled>
            -
          </Button>
        ) : match.odds.length === 2 ? (
          <Button
            variant="outline"
            size="sm"
            isDisabled={
              !match.odds[0].odd || match.odds[0].status === "SUSPENDED"
            }
          >
            {!match.odds[0].odd || match.odds[0].status === "SUSPENDED"
              ? "-"
              : (match.odds[0].odd / 1000).toFixed(2)}
          </Button>
        ) : match.odds.length > 2 ? (
          <Button
            variant="outline"
            size="sm"
            isDisabled={
              !match.odds[1].odd || match.odds[1].status === "SUSPENDED"
            }
          >
            {!match.odds[1].odd || match.odds[1].status === "SUSPENDED"
              ? "-"
              : (match.odds[1].odd / 1000).toFixed(2)}
          </Button>
        ) : (
          <></>
        )}
      </Td>
      <Td borderColor="gray.200" textAlign="center" flex="1">
        {!match.odds || match.odds.length === 0 ? (
          <Button variant="outline" size="sm" isDisabled>
            -
          </Button>
        ) : match.odds.length === 1 ? (
          <Button
            variant="outline"
            size="sm"
            isDisabled={
              !match.odds[0].odd || match.odds[0].status === "SUSPENDED"
            }
          >
            {!match.odds[0].odd || match.odds[0].status === "SUSPENDED"
              ? "-"
              : (match.odds[0].odd / 1000).toFixed(2)}
          </Button>
        ) : match.odds.length === 2 ? (
          <Button
            variant="outline"
            size="sm"
            isDisabled={
              !match.odds[1].odd || match.odds[1].status === "SUSPENDED"
            }
          >
            {!match.odds[1].odd || match.odds[1].status === "SUSPENDED"
              ? "-"
              : (match.odds[1].odd / 1000).toFixed(2)}
          </Button>
        ) : match.odds.length > 2 ? (
          <Button
            variant="outline"
            size="sm"
            isDisabled={
              !match.odds[2].odd || match.odds[2].status === "SUSPENDED"
            }
          >
            {!match.odds[2].odd || match.odds[2].status === "SUSPENDED"
              ? "-"
              : (match.odds[2].odd / 1000).toFixed(2)}
          </Button>
        ) : (
          ""
        )}
      </Td>
    </Tr>
  );
};

export default MatchRow;
