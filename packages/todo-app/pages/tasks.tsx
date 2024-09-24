import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  TableSortLabel,
} from "base-ui/src/components/Table";
import { useTodoLogic } from "../src/components/TaskComponent";
import React, { useState, useEffect, useMemo,MouseEvent  } from "react";
import Button from "@mui/material/Button";

const TasksPage = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [orderBy, setOrderBy] = useState<string>("");

  const {
    data: todos,
    total,
    error,
    isLoading,
    columnNames,
  } = useTodoLogic(page, rowsPerPage);

  type Todo = {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
  };

  useEffect(() => {
    if (todos && todos.length) {
    }
  }, [todos]);

  if (error) return <div>Error: {error.message}</div>;
  type Alignment = "left" | "center" | "right" | "justify" | "inherit";

  const columns = columnNames.map((name) => ({
    id: name,
    label: name.charAt(0).toUpperCase() + name.slice(1),
    minWidth: 100,
    align: "left" as Alignment,
  }));

  const handleRequestSort = (
    event: MouseEvent<unknown>,
    property: string
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  const sortedTodos = useMemo(() => {
    return [...todos].sort((a, b) => {
      if (orderBy) {
        const orderModifier = order === "asc" ? 1 : -1;
        return a[orderBy as keyof Todo] > b[orderBy as keyof Todo]
          ? orderModifier
          : -orderModifier;
      }
      return 0;
    });
  }, [todos, order, orderBy]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Tasks</h1>
      <p className="text-lg mb-4">Here is a list of your tasks:</p>

      <TableContainer className="max-h-[440px] overflow-auto">
        <Table stickyHeader aria-label="sticky table" className="min-w-full">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align || "left"}
                  className="sticky top-0 bg-white z-10"
                  style={{ minWidth: column.minWidth }}
                  sortDirection={orderBy === column.id ? order : false}
                >
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={orderBy === column.id ? order : "asc"}
                    onClick={(event) => handleRequestSort(event, column.id)}
                  >
                    {column.label}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedTodos.map((todo, index) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                {columns.map((column) => {
                  const value = todo[column.id as keyof Todo];
                  return (
                    <TableCell key={column.id} align={column.align}>
                      {value !== undefined ? value.toString() : ""}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={total}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Button
          type="button"
          disabled={sortedTodos.length < rowsPerPage}
          onClick={() => handleChangePage(null, page + 1)}
        >
          Load More
        </Button>
      )}
    </div>
  );
};

export default TasksPage;
