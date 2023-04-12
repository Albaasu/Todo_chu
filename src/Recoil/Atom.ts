import { atom } from 'recoil';
import { todos,FilterTypes } from '../Types/type';

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

export const todoFilterState = atom<FilterTypes>({
  key: 'todoFilterState',
  default: 'ALL'
});
