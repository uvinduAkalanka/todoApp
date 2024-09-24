
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


type Todo = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
};

console.log("axios");

const fetchTodos = async (page: number, limit: number): Promise<{ todos: Todo[]; total: number }> => {
  const response = await axios.get('https://dummyjson.com/todos', {
    params: {
      limit,
      skip: page * limit,
    },
  });
  return { todos: response.data.todos, total: response.data.total };
};

const useTodoLogic = (page: number, limit: number) => {
  const { data, error, isLoading, isFetching } = useQuery({
    queryKey: ['todos', page, limit], 
    queryFn: () => fetchTodos(page, limit),
  });

  const columnNames = Array.isArray(data?.todos) && data.todos.length > 0 ? Object.keys(data.todos[0]) : [];

  return {
    data: data?.todos || [],
    total: data?.total || 0, 
    error,
    isLoading,
    isFetching,
    columnNames,
  };
};

export { useTodoLogic, fetchTodos };




