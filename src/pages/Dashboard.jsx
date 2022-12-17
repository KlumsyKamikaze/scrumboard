import { VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { IN_PROGRESS } from "../../consts";
import { PENDING } from "../../consts";
import { COMPLETED } from "../../consts";
import TaskAdder from "../components/TaskAdder";
import WelcomeUser from "../components/WelcomeUser";

function Dashboard() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("scrum_tasks")) || []
  );
  return (
    <VStack
      padding="2rem"
      gap="4rem"
      bg="blackAlpha.100"
      height="100%"
      width="100%"
    >
      <WelcomeUser
        tasksPending={
          tasks.filter((element) => element.status === PENDING).length
        }
        tasksInProgress={
          tasks.filter((element) => element.status === IN_PROGRESS).length
        }
        tasksCompleted={
          tasks.filter((element) => element.status === COMPLETED).length
        }
      />
      <TaskAdder tasks={tasks} setTasks={setTasks} />
    </VStack>
  );
}

export default Dashboard;
