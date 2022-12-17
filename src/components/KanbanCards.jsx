import React from "react";
import { HStack, Text, VStack } from "@chakra-ui/react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

function KanbanCards({ task, index }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
    data: {
      task: task.task,
      index,
      status: task.status,
      id: task.id,
    },
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  };
  return (
    <VStack
      color="white"
      bgColor="whiteAlpha.400"
      padding="1.5rem"
      borderRadius="0.5rem"
      width="100%"
      marginTop="1rem"
      alignItems="start"
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      <HStack width="100%" justifyContent="space-between">
        <Text>{task.task}</Text>
        <Text>
          {new Date(task.id).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </Text>{" "}
      </HStack>
    </VStack>
  );
}

export default KanbanCards;
