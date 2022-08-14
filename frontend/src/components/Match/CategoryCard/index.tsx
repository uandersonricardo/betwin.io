import React from "react";

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  SimpleGrid,
  Text
} from "@chakra-ui/react";

import { Odd, OddCategory } from "../../../types";

type CategoryCardProps = {
  category: OddCategory;
  onOpen: (odd: Odd, category: string) => void;
};

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onOpen }) => {
  const columns = category.odds.length < 4 ? category.odds.length : 2;

  return (
    <Box w="full">
      <Accordion defaultIndex={[0]} allowToggle maxW="full">
        <AccordionItem maxW="full">
          <Flex
            direction="column"
            bg="white"
            border="1px solid"
            borderColor="gray.200"
            borderRadius="md"
            mx="6"
            mb="6"
          >
            <h2>
              <AccordionButton
                _hover={{ bg: "gray.100" }}
                px="4"
                py="4"
                _focusVisible={{
                  boxShadow: "none"
                }}
              >
                <Box flex="1" textAlign="left">
                  {category.name}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              maxW="full"
              px="4"
              py="4"
              borderTop="1px solid"
              borderTopColor="gray.200"
            >
              <SimpleGrid columns={columns} spacing={4}>
                {category.odds.map((odd, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    w="full"
                    size="lg"
                    py="4"
                    display="flex"
                    justifyContent="space-between"
                    borderLeft="3px solid"
                    borderLeftColor="pink.400"
                    _hover={{
                      bg: "pink.400",
                      color: "white"
                    }}
                    _active={{
                      bg: "pink.500",
                      color: "white"
                    }}
                    onClick={() => onOpen(odd, category.name)}
                  >
                    <Text>
                      {odd.line && `(${(odd.line / 1000).toFixed(2)}) `}
                      {odd.label}
                    </Text>
                    <Text>{(odd.odd / 1000).toFixed(2)}</Text>
                  </Button>
                ))}
              </SimpleGrid>
            </AccordionPanel>
          </Flex>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default CategoryCard;
