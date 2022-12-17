import { HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { HiHome } from "react-icons/hi";

function LeftNavbar() {
  return (
    <VStack padding="2rem" height="100%" bg="red" width="100%">
      <VStack alignItems="flex-start">
        <HStack fontSize="2rem">
          <HiHome />
          <Text>ScrumWorks</Text>
        </HStack>
        <HStack fontSize="1.5rem">
          <HiHome />
          <Text>Dashboard</Text>
        </HStack>
        <HStack fontSize="1.5rem">
          <HiHome />
          <Text>Kanban Board</Text>
        </HStack>
        <HStack fontSize="1.5rem">
          <HiHome />
          <Text>Logout</Text>
        </HStack>
      </VStack>
    </VStack>
  );
}

export default LeftNavbar;
