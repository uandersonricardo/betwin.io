import React from "react";

import { Badge, Button, Grid, GridItem, Text, Tr } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { MatchInfo, Odd } from "../../../types";
import { getDate, getHours } from "../../../utils/date";
import { pad } from "../../../utils/string";

type MatchRowProps = {
  match: MatchInfo;
  onOpen: (match: MatchInfo, odd: Odd, category: string) => void;
};

const MatchRow: React.FC<MatchRowProps> = ({ match, onOpen }) => {
  const navigate = useNavigate();

  const navigateToMatch = (id: string) => {
    return () => {
      navigate("/match/" + id);
    };
  };

  const onClick = (index: number) => {
    return (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.stopPropagation();

      if (match.odds) {
        onOpen(match, match.odds[index], match.oddsCategory || "");
      }
    };
  };

  return (
    <Grid
      templateColumns="5rem 5rem 1fr 5rem 1fr 4rem 4rem 4rem"
      gap={4}
      _hover={{ bg: "gray.100" }}
      cursor="pointer"
      onClick={navigateToMatch(match.id)}
      w="full"
      overflow="hidden"
      borderBottom="1px solid"
      borderColor="gray.200"
      alignItems="center"
      px="8"
      py="4"
      borderLeftWidth={match.status === "STARTED" ? "3px" : "0px"}
      borderLeftColor="red.500"
    >
      <GridItem>
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
      </GridItem>
      <GridItem>
        {match.status === "STARTED" && (
          <Badge bg="red.500" color="white" textAlign="center">
            Ao vivo
          </Badge>
        )}
      </GridItem>
      <GridItem>
        <Text fontWeight="bold">{match.home}</Text>
      </GridItem>
      <GridItem textAlign="center">
        <Badge
          bg="gray.700"
          color="white"
          fontSize="md"
          borderRadius="sm"
          py="0.5"
          px="2"
          w="full"
          textAlign="center"
        >
          {match.score?.home ?? "-"} : {match.score?.away ?? "-"}
        </Badge>
      </GridItem>
      <GridItem textAlign="right">
        <Text fontWeight="bold">{match.away}</Text>
      </GridItem>
      <GridItem textAlign="center">
        {!match.odds || match.odds.length === 0 ? (
          <Button
            variant="outline"
            size="sm"
            isDisabled
            w="full"
            _hover={{ bg: "pink.400", color: "white" }}
            _active={{ bg: "pink.500", color: "white" }}
          >
            -
          </Button>
        ) : (
          <Button
            variant="outline"
            size="sm"
            isDisabled={
              !match.odds[0].odd || match.odds[0].status === "SUSPENDED"
            }
            w="full"
            _hover={{ bg: "pink.400", color: "white" }}
            _active={{ bg: "pink.500", color: "white" }}
            onClick={onClick(0)}
          >
            {!match.odds[0].odd || match.odds[0].status === "SUSPENDED"
              ? "-"
              : (match.odds[0].odd / 1000).toFixed(2)}
          </Button>
        )}
      </GridItem>
      <GridItem textAlign="center">
        {!match.odds || match.odds.length < 3 ? (
          <Button
            variant="outline"
            size="sm"
            isDisabled
            w="full"
            _hover={{ bg: "pink.400", color: "white" }}
            _active={{ bg: "pink.500", color: "white" }}
          >
            -
          </Button>
        ) : (
          <Button
            variant="outline"
            size="sm"
            isDisabled={
              !match.odds[1].odd || match.odds[1].status === "SUSPENDED"
            }
            w="full"
            _hover={{ bg: "pink.400", color: "white" }}
            _active={{ bg: "pink.500", color: "white" }}
            onClick={onClick(1)}
          >
            {!match.odds[1].odd || match.odds[1].status === "SUSPENDED"
              ? "-"
              : (match.odds[1].odd / 1000).toFixed(2)}
          </Button>
        )}
      </GridItem>
      <GridItem textAlign="center">
        {!match.odds || match.odds.length < 2 ? (
          <Button
            variant="outline"
            size="sm"
            isDisabled
            w="full"
            _hover={{ bg: "pink.400", color: "white" }}
            _active={{ bg: "pink.500", color: "white" }}
          >
            -
          </Button>
        ) : match.odds.length === 2 ? (
          <Button
            variant="outline"
            size="sm"
            isDisabled={
              !match.odds[1].odd || match.odds[1].status === "SUSPENDED"
            }
            w="full"
            _hover={{ bg: "pink.400", color: "white" }}
            _active={{ bg: "pink.500", color: "white" }}
            onClick={onClick(1)}
          >
            {!match.odds[1].odd || match.odds[1].status === "SUSPENDED"
              ? "-"
              : (match.odds[1].odd / 1000).toFixed(2)}
          </Button>
        ) : (
          <Button
            variant="outline"
            size="sm"
            isDisabled={
              !match.odds[2].odd || match.odds[2].status === "SUSPENDED"
            }
            w="full"
            _hover={{ bg: "pink.400", color: "white" }}
            _active={{ bg: "pink.500", color: "white" }}
            onClick={onClick(2)}
          >
            {!match.odds[2].odd || match.odds[2].status === "SUSPENDED"
              ? "-"
              : (match.odds[2].odd / 1000).toFixed(2)}
          </Button>
        )}
      </GridItem>
    </Grid>
  );
};

export default MatchRow;
