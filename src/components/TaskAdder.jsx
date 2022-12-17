import {
  Button,
  Checkbox,
  Grid,
  GridItem,
  HStack,
  Icon,
  Input,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { DndContext, rectIntersection } from "@dnd-kit/core";
import React, { useState } from "react";
import { HiTrash } from "react-icons/hi";
import { COMPLETED } from "../../consts";
import { PENDING } from "../../consts";
import KanbanBoard from "./KanbanBoard";

function TaskAdder({ tasks, setTasks }) {
  const toast = useToast();

  const [tempText, setTempText] = useState("");
  const submitHandler = () => {
    if (tempText === "") {
      toast({
        title: `Empty task string`,
        status: "error",
        isClosable: true,
      });
      return;
    }
    setTasks((oldValue) => {
      const newValue = [...oldValue];
      newValue.push({ task: tempText, id: Date.now(), status: PENDING });
      localStorage.setItem("scrum_tasks", JSON.stringify(newValue));
      return newValue;
    });
    setTempText("");
    toast({
      title: `Task added`,
      status: "success",
      isClosable: true,
    });
  };

  const deleteTaskHandler = (id) => {
    console.log("fiber");
    setTasks((oldValue) => {
      return oldValue.filter((element) => element.id !== id);
    });
    toast({
      title: `Task deleted`,
      status: "success",
      isClosable: true,
    });
  };

  const checkboxHandler = (id) => {
    console.log("fired");
    setTasks((oldValue) => {
      const newValue = oldValue.map((element) => {
        if (element.id === id) {
          const prevStatus = element.status;
          return {
            ...element,
            status: prevStatus === COMPLETED ? PENDING : COMPLETED,
          };
        } else {
          return element;
        }
      });
      localStorage.setItem("scrum_tasks", JSON.stringify(newValue));
      return newValue;
    });
  };
  return (
    <VStack height="100%" width="100%" spacing="2rem" alignItems="flex-start">
      <HStack width="100%" spacing="2rem">
        <Input
          value={tempText}
          onChange={(e) => setTempText(e.target.value)}
          bgColor="facebook.200"
          width="30%"
          color="black"
          placeholder="Type here"
          size="lg"
        />
        <Button onClick={submitHandler} colorScheme="green">
          Add Task
        </Button>
      </HStack>
      <Grid width="100%" templateColumns="repeat(5, 1fr)" columnGap="1rem">
        <GridItem
          display="flex"
          flexDir="column"
          alignItems="start"
          colSpan="2"
        >
          <Text
            fontSize="3rem"
            textAlign="left"
            color="facebook.400"
            fontWeight={500}
          >
            Todo
          </Text>
          {tasks.map(({ task, id, status }) => {
            return (
              <HStack
                color="black"
                bgColor="facebook.200"
                key={id}
                padding="1.5rem"
                borderRadius="0.5rem"
                width="100%"
                justifyContent="space-between"
                marginTop="1rem"
              >
                <HStack spacing="2rem">
                  <Checkbox
                    colorScheme="facebook"
                    borderColor="facebook.400"
                    // value={status === COMPLETED}
                    isChecked={status === COMPLETED}
                    onChange={() => checkboxHandler(id)}
                  ></Checkbox>
                  <Text fontWeight={500}>{task}</Text>
                </HStack>
                <HStack marginInlineStart={null}>
                  <Text>
                    {new Date(id).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </Text>{" "}
                  <Text marginRight="2rem" as="span" opacity="60%">
                    {new Date(id).toLocaleDateString("en-GB")}
                  </Text>
                  <Icon
                    as={HiTrash}
                    onClick={() => deleteTaskHandler(id)}
                    color="orange.400"
                    _hover={{ cursor: "pointer", color: "white" }}
                    fontSize="1.5rem"
                  />
                </HStack>
              </HStack>
            );
          })}
        </GridItem>
        <GridItem
          display="flex"
          flexDir="column"
          alignItems="start"
          colSpan="3"
        >
          <DndContext
            collisionDetection={rectIntersection}
            onDragEnd={(e) => {
              const container = e.over?.id;
              // const task = e.active.data.current?.task ?? "";
              const id = e.active.data.current?.id ?? 0;

              setTasks((oldValue) => {
                const newValue = oldValue.map((element) => {
                  if (element.id === id) {
                    return { ...element, status: container };
                  } else {
                    return element;
                  }
                });
                localStorage.setItem("scrum_tasks", JSON.stringify(newValue));
                return newValue;
              });
            }}
          >
            <KanbanBoard tasks={tasks} />
          </DndContext>
        </GridItem>
      </Grid>
    </VStack>
  );
}

export default TaskAdder;
