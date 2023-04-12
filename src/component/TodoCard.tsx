import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
  Input,
  Textarea,
} from '@chakra-ui/react';
import { SiAwesomelists } from 'react-icons/si';
import { todos } from '../Types/type';
import { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { TodoList } from '../Recoil/Atom';

function TodoCard({ todo }: { todo: todos }) {
  const [status, setStatus] = useState<boolean>(todo.status);
  const [todoList, setTodoList] = useRecoilState(TodoList);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState<string>(todo.title);
  const [newDetail, setNewDetail] = useState<string>(todo.detail);

  const handleStatesChange = () => {
    setStatus(!status);
  };
  //タスクの削除
  const handleDelete = () => {
    setTodoList((oldTodoList) => {
      return oldTodoList.filter((item) => item.id !== todo.id);
    });
  };
  //編集

  const handleEditStart = () => {
    setIsEditing(true);
  };

  const handleEditCancel = () => {
    setIsEditing(false);
    setNewTitle(todo.title);
    setNewDetail(todo.detail);
  };

  const handleEditSave = () => {
    const updatedTodo = {
      ...todo,
      title: newTitle,
      detail: newDetail,
    };
    setTodoList((oldTodoList) =>
      oldTodoList.map((item) => (item.id === todo.id ? updatedTodo : item))
    );
    setIsEditing(false);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.target.value);
  };

  const handleDetailChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setNewDetail(event.target.value);
  };

  return (
    <Center py={6}>
      <Box
        maxW={'330px'}
        minW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
      >
        <Stack
          textAlign={'center'}
          p={6}
          color={useColorModeValue('gray.800', 'white')}
          align={'center'}
        >
          <Stack direction={'row'} align={'center'} justify={'center'}>
            {isEditing ? (
              <Input
                mb={3}
                value={newTitle}
                onChange={handleTitleChange}
                variant='flushed'
              />
            ) : (
              <Stack direction={'row'} align={'center'} justify={'center'}>
                <Text fontSize={'3xl'} fontWeight={800}>
                  {todo.title}
                </Text>
              </Stack>
            )}
          </Stack>
        </Stack>

        <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
          {isEditing ? (
            <Textarea
              mb={3}
              value={newDetail}
              onChange={handleDetailChange}
              variant='flushed'
            />
          ) : (
            <List spacing={3}>
              <ListItem>
                <ListIcon as={SiAwesomelists} color='green.400' />
                {todo.detail}
              </ListItem>
            </List>
          )}

          <Button
            mt={10}
            w={'full'}
            bg={'green.400'}
            color={'white'}
            rounded={'xl'}
            boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
            _hover={{
              bg: 'green.500',
            }}
            onClick={handleStatesChange}
          >
            {status ? '着手中' : '未着手'}
          </Button>
          <Button
            mt={3}
            w={'full'}
            bg={'pink.400'}
            color={'white'}
            rounded={'xl'}
            boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
            _hover={{
              bg: 'pink.500',
            }}
            onClick={handleEditStart}
          >
            編集
          </Button>
          <Button
            mt={3}
            w={'full'}
            bg={'blue.400'}
            color={'white'}
            rounded={'xl'}
            boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}
            isDisabled={status === false}
            onClick={handleDelete}
          >
            完了
          </Button>
          <Button onClick={handleEditSave}>保存</Button>
          <Button onClick={handleEditCancel}>キャンセル</Button>
        </Box>
      </Box>
    </Center>
  );
}
export default TodoCard;
