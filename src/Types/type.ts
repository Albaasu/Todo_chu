export type todos = {
  title: string;
  detail: string;
  status: boolean;
  id: string;
};

export type FilterTypes = 'ALL' | 'INCOMPLETE' | 'COMPLETED';