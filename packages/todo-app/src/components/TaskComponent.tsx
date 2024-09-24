//--------------------------------------------------------with all recods -------------------------
// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';

// type Todo = {
//   id: number;
//   todo: string;
//   completed: boolean;
//   userId: number;
// };

// // Function to fetch all todos from the API (without pagination)
// const fetchTodos = async (): Promise<Todo[]> => {
//   const response = await axios.get('https://dummyjson.com/todos');
//   return response.data.todos;
// };

// const useTodoLogic = () => {
//   const { data, error, isLoading, isFetching } = useQuery({
//     queryKey: ['todos'], // Query key
//     queryFn: fetchTodos, // Fetch function
//   });

//   const columnNames = Array.isArray(data) && data.length > 0 ? Object.keys(data[0]) : [];

//   return {
//     data: data || [],
//     error,
//     isLoading,
//     isFetching,
//     columnNames,
//   };
// };

// export { useTodoLogic, fetchTodos };
//--------------------------------------------------------with total recods -------------------------

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


type Todo = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
};

// Function to fetch todos with pagination

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
    queryKey: ['todos', page, limit], // Add page and limit to the query key
    queryFn: () => fetchTodos(page, limit), // Fetch with pagination
  });

  const columnNames = Array.isArray(data?.todos) && data.todos.length > 0 ? Object.keys(data.todos[0]) : [];

  return {
    data: data?.todos || [],
    total: data?.total || 0, // Return the total number of items
    error,
    isLoading,
    isFetching,
    columnNames,
  };
};

export { useTodoLogic, fetchTodos };

//--------------------------------------------------------withload more -------------------------



