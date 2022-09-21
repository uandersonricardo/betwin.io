import React, { useEffect, useState } from "react";

import {
  Badge,
  Button,
  Flex,
  IconButton,
  Image,
  LightMode,
  SimpleGrid,
  Text,
  useToast
} from "@chakra-ui/react";
import { TbStar, TbX } from "react-icons/tb";
import { useNavigate, useParams } from "react-router-dom";

import Loading from "../../components/Common/Loading";
import CategoryCard from "../../components/Match/CategoryCard";
import BetModal from "../../components/Modals/BetModal";
import useFetch from "../../hooks/useFetch";
import { MatchInfo, Odd } from "../../types";
import { getDate, getHours } from "../../utils/date";
import { pad } from "../../utils/string";

const Match: React.FC = () => {
  const toast = useToast();
  const [match, setMatch] = useState<MatchInfo | null>(null);
  const [selectedOdd, setSelectedOdd] = useState<Odd | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    isLoading,
    data: fetchData,
    error: fetchError
  } = useFetch(`/match/matches/${id}`, {}, { staleTime: 1000 * 10 });

  useEffect(() => {
    if (fetchError) {
      toast({
        title: "Ops...",
        description: "Algo deu errado.",
        status: "error",
        duration: 3000,
        isClosable: true
      });
    }
  }, [fetchError]);

  useEffect(() => {
    if (fetchData) {
      setMatch(fetchData.match);
    }
  }, [fetchData]);

  const onOpen = (odd: Odd, category: string) => {
    setSelectedCategory(category);
    setSelectedOdd(odd);
    setIsOpen(true);
  };

  const onClose = () => {
    setSelectedCategory("");
    setSelectedOdd(null);
    setIsOpen(false);
  };

  const goBack = () => {
    navigate("/");
  };

  if (isLoading) {
    return <Loading />;
  }

  const mainCategory =
    match?.categories && match?.categories.find(category => category.main);

  return (
    <Flex direction="column" bg="gray.100" color="gray.700">
      <LightMode>
        <Flex
          direction="column"
          bg="white"
          borderBottom="1px solid"
          borderBottomColor="gray.200"
          mb="6"
        >
          <Flex
            justify="space-between"
            align="center"
            p="6"
            w="full"
            borderBottom="1px solid"
            borderBottomColor="gray.100"
          >
            <IconButton
              variant="outline"
              aria-label="Fechar"
              icon={<TbX />}
              onClick={goBack}
            />
            <Flex align="center" justify="center">
              <Image
                src="https://i.pinimg.com/originals/f1/44/fc/f144fc61d0b0ed7716d740aa9deefb07.png"
                alt="League Logo"
                mr="4"
                w="6"
                h="6"
              />
              <Text fontWeight="bold">{match?.competition?.name}</Text>
            </Flex>
            <IconButton
              variant="outline"
              aria-label="Favoritar"
              icon={<TbStar />}
            />
          </Flex>
          <SimpleGrid columns={3} spacing={2} p="6">
            <Flex direction="column" justify="center" align="center">
              <Image
                src="https://upload.wikimedia.org/wikipedia/pt/9/98/Real_Madrid.png"
                fallbackSrc="https://upload.wikimedia.org/wikipedia/en/thumb/6/67/FIFA_Nations_World_Champion_Badge.svg/1200px-FIFA_Nations_World_Champion_Badge.svg.png"
                h="36"
                w="36"
                objectFit="contain"
                objectPosition="center"
                mb="4"
              />
              <Text fontWeight="bold" textAlign="center" fontSize="2xl">
                {match?.home}
              </Text>
            </Flex>
            <Flex direction="column" justify="center" align="center">
              <Text fontWeight="bold" fontSize="md" color="gray.500">
                {match?.currentTime
                  ? `${pad(match.currentTime.minute, 2)}:${pad(
                      match.currentTime.second,
                      2
                    )} `
                  : `${getDate(match?.date || "")}, ${getHours(
                      match?.date || ""
                    )}`}
              </Text>
              <Text fontWeight="bold" fontSize="6xl">
                {match?.score?.home || "-"} : {match?.score?.away || "-"}
              </Text>
              {match?.status === "STARTED" ? (
                <Badge
                  bg="red.500"
                  color="white"
                  px="2"
                  py="1"
                  borderRadius="sm"
                >
                  Ao vivo
                </Badge>
              ) : (
                <Badge
                  bg="gray.300"
                  color="gray.700"
                  px="2"
                  py="1"
                  borderRadius="sm"
                >
                  Em breve
                </Badge>
              )}
            </Flex>
            <Flex direction="column" justify="center" align="center">
              <Image
                src="https://upload.wikimedia.org/wikipedia/pt/thumb/4/43/FCBarcelona.svg/1200px-FCBarcelona.svg.png"
                h="36"
                w="36"
                objectFit="contain"
                objectPosition="center"
                mb="4"
              />
              <Text fontWeight="bold" textAlign="center" fontSize="2xl">
                {match?.away}
              </Text>
            </Flex>
            <Flex direction="column" justify="center" align="center" mt="4">
              <Text fontWeight="bold" fontSize="md" color="gray.500" mb="2">
                1
              </Text>
              <Button
                bg="gray.700"
                color="white"
                _hover={{
                  bg: "pink.400",
                  color: "white"
                }}
                _active={{
                  bg: "pink.500",
                  color: "white"
                }}
                size="lg"
                py="8"
                w="full"
                onClick={() =>
                  mainCategory &&
                  onOpen(mainCategory.odds[0], mainCategory.name)
                }
                isDisabled={!mainCategory || !mainCategory.odds?.length}
              >
                {mainCategory && mainCategory.odds.length > 0
                  ? (mainCategory.odds[0].odd / 1000).toFixed(2)
                  : "-"}
              </Button>
            </Flex>
            <Flex direction="column" justify="center" align="center" mt="4">
              <Text fontWeight="bold" fontSize="md" color="gray.500" mb="2">
                X
              </Text>
              <Button
                bg="gray.700"
                color="white"
                _hover={{
                  bg: "pink.400",
                  color: "white"
                }}
                _active={{
                  bg: "pink.500",
                  color: "white"
                }}
                size="lg"
                py="8"
                w="full"
                onClick={() =>
                  mainCategory &&
                  onOpen(mainCategory.odds[1], mainCategory.name)
                }
                isDisabled={!mainCategory || mainCategory.odds?.length < 3}
              >
                {mainCategory && mainCategory.odds.length > 2
                  ? (mainCategory.odds[1].odd / 1000).toFixed(2)
                  : "-"}
              </Button>
            </Flex>
            <Flex direction="column" justify="center" align="center" mt="4">
              <Text fontWeight="bold" fontSize="md" color="gray.500" mb="2">
                2
              </Text>
              <Button
                bg="gray.700"
                color="white"
                _hover={{
                  bg: "pink.400",
                  color: "white"
                }}
                _active={{
                  bg: "pink.500",
                  color: "white"
                }}
                size="lg"
                py="8"
                w="full"
                onClick={() =>
                  mainCategory && mainCategory.odds.length > 2
                    ? onOpen(mainCategory.odds[2], mainCategory.name)
                    : mainCategory &&
                      onOpen(mainCategory.odds[1], mainCategory.name)
                }
                isDisabled={!mainCategory || mainCategory.odds?.length < 2}
              >
                {mainCategory && mainCategory.odds.length > 2
                  ? (mainCategory.odds[2].odd / 1000).toFixed(2)
                  : mainCategory && mainCategory.odds.length > 1
                  ? (mainCategory.odds[1].odd / 1000).toFixed(2)
                  : "-"}
              </Button>
            </Flex>
          </SimpleGrid>
        </Flex>
        {match?.categories &&
          match?.categories
            ?.filter(category => !category.main)
            .map(category => (
              <CategoryCard
                category={category}
                key={category.id}
                onOpen={onOpen}
              />
            ))}
      </LightMode>
      <BetModal
        isOpen={isOpen}
        onClose={onClose}
        odd={selectedOdd || undefined}
        match={match || undefined}
        category={selectedCategory}
      />
    </Flex>
  );
};

export default Match;
