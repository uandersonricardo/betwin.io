import React, { useEffect, useState } from "react";

import { Flex, Spinner, useToast, VStack } from "@chakra-ui/react";

import SportSection from "../../components/Dashboard/SportSection";
import useFetch from "../../hooks/useFetch";

export type Sport = {
  id: string;
  name: string;
  competitions: Competition[];
};

export type Competition = {
  id: string;
  name: string;
  matches: MatchInfo[];
};

export type MatchInfo = {
  id: string;
  home: string;
  away: string;
  status: string;
  date: string;
  odds: Odd[];
  currentTime?: any;
  score?: {
    home: string;
    away: string;
    info?: string;
  };
};

export type Odd = {
  odd: number;
  label: string;
  type: string;
  status: string;
};

const Dashboard: React.FC = () => {
  const toast = useToast();
  const [sports, setSports] = useState<Sport[] | null>(null);

  const {
    isLoading,
    data: fetchData,
    error: fetchError
  } = useFetch("/matches");

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
      setSports(fetchData.matches);
    }
  }, [fetchData]);

  if (isLoading) {
    return (
      <Flex
        direction="column"
        bg="gray.100"
        flex="auto"
        color="gray.700"
        align="center"
        justify="center"
      >
        <Spinner color="gray.700" size="lg" />
      </Flex>
    );
  }

  return (
    <VStack spacing="8" bg="gray.50" flex="auto" color="gray.700">
      {sports?.map(sport => (
        <SportSection sport={sport} key={sport.id} />
      ))}
    </VStack>
  );
};

export default Dashboard;
