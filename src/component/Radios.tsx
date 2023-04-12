import { Radio, RadioGroup, Stack } from '@chakra-ui/react';



function Radios() {
  return (
    <RadioGroup display={'flex'} justifyContent={'center'} mt={5} defaultValue='1'>
      <Stack direction='row' spacing={5}>
        <Radio value='all' size={'lg'}>
          全て
        </Radio>
        <Radio value='incomplete' size={'lg'}>
          未着手
        </Radio>
        <Radio value='complete' size={'lg'}>
          着手
        </Radio>
      </Stack>
    </RadioGroup>
  );
}

export default Radios;
