import { AddIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  FormControl,
  HStack,
  Input,
  Textarea,
} from '@chakra-ui/react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { TodoList, TodoTextArea, TodoTextState } from '../Recoil/Atom';
import { todos } from '../Types/type';
import { v4 as uuidv4 } from 'uuid';
import {  MouseEvent } from 'react';

function AddTodo() {
  const [todoText, setTodoText] = useRecoilState(TodoTextState);
  const [todoTextArea, setTodoTextArea] = useRecoilState(TodoTextArea);
  const [todoList, setTodoList] = useRecoilState(TodoList);

  const handleAddTodo = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (todoText === '') return;
    if (todoTextArea === '') return;

    const Todos: todos = {
      title: todoText,
      detail: todoTextArea,
      status: false,
      id: uuidv4(),
    };
    const newList = [...todoList, Todos];
    setTodoList(newList);
    setTodoText('');
    setTodoTextArea('');

    
  };
  return (
    <FormControl>
      <Flex align={'center'} justifyContent={'center'} mt={4}>
        <HStack spacing={4}>
          <Input
            htmlSize={4}
            width='500px'
            placeholder='タイトルを入力'
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
        </HStack>
      </Flex>
      <Flex align={'center'} justifyContent={'center'} mt={4}>
        <HStack spacing={4}>
          <Textarea
            width='500px'
            placeholder='詳細を入力'
            value={todoTextArea}
            onChange={(e) => setTodoTextArea(e.target.value)}
          />
        </HStack>
      </Flex>
      <Button
        leftIcon={<AddIcon />}
        colorScheme='green'
        variant='solid'
        my={6}
        onClick={handleAddTodo}
      >
        追加
      </Button>
    </FormControl>
  );
}

export default AddTodo;
