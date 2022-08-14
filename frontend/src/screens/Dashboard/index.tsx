import React, { useEffect, useState } from "react";

import { Flex, Spinner, useToast, VStack } from "@chakra-ui/react";

import SportSection from "../../components/Dashboard/SportSection";
import useFetch from "../../hooks/useFetch";
import { Sport } from "../../types";

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
