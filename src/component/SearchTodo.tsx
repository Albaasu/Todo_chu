import { SearchIcon } from '@chakra-ui/icons';
import { Button, Flex, FormControl, HStack, Input } from '@chakra-ui/react';

function SearchTodo() {
  return (
    <FormControl>
      <Flex align={'center'} justifyContent={'center'} mt={5}>
        <HStack spacing={4}>
          <Input htmlSize={4} width='500px' placeholder='タイトルを入力' />
          <Button
            leftIcon={<SearchIcon />}
            colorScheme='green'
            variant='solid'
            my={6}
          >
            検索
          </Button>
        </HStack>
      </Flex>
    </FormControl>
  );
}

export default SearchTodo;
