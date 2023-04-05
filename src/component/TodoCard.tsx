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
} from '@chakra-ui/react';
import { SiAwesomelists } from 'react-icons/si';
import { todos } from '../Types/type';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { TodoList } from '../Recoil/Atom';

function TodoCard({ todo }: { todo: todos }) {
  const [status, setStatus] = useState<boolean>(todo.status);
  const [todoList, setTodoList] = useRecoilState(TodoList);

  const handleStatesChange = () => {
    setStatus(!status);
  };
  //タスクの削除
 const handleDelete =()=>{
  setTodoList((oldTodoList) =>{
    return oldTodoList.filter((item)=>item.id!==todo.id)
  })
 }

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
            <Text fontSize={'3xl'} fontWeight={800}>
              {todo.title}
            </Text>
          </Stack>
        </Stack>

        <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={SiAwesomelists} color='green.400' />
              {todo.detail}
            </ListItem>
          </List>

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
>編集</Button>
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
        </Box>
      </Box>
    </Center>
  );
}
export default TodoCard;
