import { atom } from 'recoil';
import { todos } from '../Types/type';

export const TodoTextState = atom<string>({
  key: 'TodoTextState',
  default: '',
});

export const TodoTextArea = atom<string>({
  key: 'TodoTextArea',
  default: '',
});
export const TodoList = atom<todos[]>({
  key: 'TodoList',
  default: [],
});
