import { GridItem, Text } from "@chakra-ui/react";
import { useDroppable } from "@dnd-kit/core";
import React from "react";
import KanbanCards from "./KanbanCards";

function KanbanContainer({ filteredTasks, title, id }) {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  return (
    <GridItem
      display="flex"
      flexDir="column"
      alignItems="start"
      colSpan="2"
      ref={setNodeRef}
      bgColor={isOver ? "whatsapp.300" : "facebook.300"}
      padding="2rem"
      borderRadius="0.5rem"
    >
      <Text fontSize="2rem" textAlign="left" color="white">
        {title}
      </Text>
      {filteredTasks.map((task, index) => {
        return <KanbanCards task={task} key={task.id} index={index} />;
      })}
    </GridItem>
  );
}

export default KanbanContainer;
