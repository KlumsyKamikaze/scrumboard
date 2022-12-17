import { HStack, Stat, StatLabel, StatNumber, Text } from "@chakra-ui/react";
import React from "react";

function WelcomeUser({ tasksPending, tasksInProgress, tasksCompleted }) {
  return (
    <HStack
      bgColor="facebook.200"
      width="100%"
      // height="4rem"
      padding="2rem"
      borderRadius="0.5rem"
      justifyContent="space-between"
    >
      <Text>
        <Text as="span" fontSize="1.5rem">
          Welcome Back, Ishaan. 👋
        </Text>
        <br />
        <Text as="span" fontSize="2rem" fontWeight={500}>
          You have {tasksPending + tasksInProgress} incomplete tasks today.
        </Text>
      </Text>
      <HStack width="40%" spacing="1rem">
        <Stat>
          <StatLabel whiteSpace="nowrap" fontSize="1.5rem">
            Pending Tasks
          </StatLabel>
          <StatNumber>{tasksPending}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel whiteSpace="nowrap" fontSize="1.5rem">
            Tasks in Progress
          </StatLabel>
          <StatNumber>{tasksInProgress}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel whiteSpace="nowrap" fontSize="1.5rem">
            Completed Tasks
          </StatLabel>
          <StatNumber>{tasksCompleted}</StatNumber>
        </Stat>
      </HStack>
    </HStack>
  );
}

export default WelcomeUser;
