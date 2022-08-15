import React, { useEffect, useRef, useState } from "react";

import { useToast, VStack } from "@chakra-ui/react";
import ViewportList from "react-viewport-list";

import Loading from "../../components/Common/Loading";
import SportSection from "../../components/Dashboard/SportSection";
import BetModal from "../../components/Modals/BetModal";
import useFetch from "../../hooks/useFetch";
import { MatchInfo, Odd, Sport } from "../../types";

const Dashboard: React.FC = () => {
  const toast = useToast();
  const ref = useRef(null);
  const [selectedMatch, setSelectedMatch] = useState<MatchInfo | null>(null);
  const [selectedOdd, setSelectedOdd] = useState<Odd | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [sports, setSports] = useState<Sport[] | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = (match: MatchInfo, odd: Odd, category: string) => {
    setSelectedMatch(match);
    setSelectedCategory(category);
    setSelectedOdd(odd);
    setIsOpen(true);
  };

  const onClose = () => {
    setSelectedCategory("");
    setSelectedOdd(null);
    setIsOpen(false);
  };

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
    return <Loading />;
  }

  return (
    <VStack
      spacing="8"
      bg="gray.50"
      flex="auto"
      color="gray.700"
      ref={ref}
      mt="-8"
    >
      {sports && (
        <ViewportList
          viewportRef={ref}
          items={sports}
          itemMinSize={40}
          margin={0}
        >
          {sport => (
            <SportSection sport={sport} key={sport.id} onOpen={onOpen} />
          )}
        </ViewportList>
      )}
      <BetModal
        isOpen={isOpen}
        onClose={onClose}
        odd={selectedOdd || undefined}
        match={selectedMatch || undefined}
        category={selectedCategory}
      />
    </VStack>
  );
};

export default Dashboard;
