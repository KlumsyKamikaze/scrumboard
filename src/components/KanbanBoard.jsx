import { Grid, Text } from "@chakra-ui/react";
import React from "react";
import { IN_PROGRESS } from "../../consts";
import { COMPLETED } from "../../consts";
import { PENDING } from "../../consts";
import KanbanContainer from "./KanbanContainer";

function KanbanBoard({ tasks }) {
  return (
    <>
      <Text
        fontSize="3rem"
        textAlign="left"
        color="facebook.400"
        fontWeight={500}
      >
        Kanban Board
      </Text>
      <Grid templateColumns="repeat(6, 1fr)" columnGap="1rem" width="100%">
        <KanbanContainer
          title="Pending"
          id={PENDING}
          filteredTasks={tasks.filter(({ status }) => status === PENDING)}
        />
        <KanbanContainer
          title="In Progress"
          id={IN_PROGRESS}
          filteredTasks={tasks.filter(({ status }) => status === IN_PROGRESS)}
        />
        <KanbanContainer
          title="Completed"
          id={COMPLETED}
          filteredTasks={tasks.filter(({ status }) => status === COMPLETED)}
        />
      </Grid>
    </>
  );
}

export default KanbanBoard;
