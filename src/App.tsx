import { Flex, Heading } from '@chakra-ui/react';
import TodoCard from './component/TodoCard';
import Radios from './component/Radios';
import SearchTodo from './component/SearchTodo';
import AddTodo from './component/AddTodo';
import { useRecoilValue } from 'recoil';
import { TodoList } from './Recoil/Atom';

function App() {
  
  
  const todoList = useRecoilValue(TodoList);
  return (
    <center>
      <Heading as={'h2'} mt={12}>
        TODO追加
      </Heading>
      <AddTodo />
      <hr />
      <Heading as={'h2'} mt={4}>
        TODO一覧
      </Heading>
      <Radios />
      <SearchTodo />
      <Flex
        align={'center'}
        justifyContent={'center'}
        gap={6}
        wrap={'wrap'}
        maxW={1500}
      >
        {todoList.map((todo) => (
          <TodoCard todo={todo} key={todo.id}/>
        ))}
      </Flex>
    </center>
  );
}

export default App;
