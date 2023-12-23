"use client";

import { Container } from "@/components/Container";
import { TodoList } from "@/components/TodoList";
import { useState } from "react";
import { TodoForm } from "@/components/TodoForm";

export default function Home() {
  const [todos, setTodos] = useState([{ id: 1, title: "Running", completed: false }]);

  const handleCheck = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const handleAdd = (title: string) => {
    setTodos([...todos, { id: todos.length + 1, title, completed: false }]);
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <div className="h-screen justify-center flex items-center">
        <Container>
          <TodoList
            todos={todos}
            handleCheck={(id: number) => handleCheck(id)}
            handleDelete={(id: number) => handleDelete(id)}
          />
          <button
            onClick={() =>
              (document.getElementById("my_modal_1") as HTMLDialogElement)?.showModal()
            }
            className="btn btn-circle btn-outline absolute right-10 bottom-10"
          >
            ＋
          </button>
          <TodoForm handleAdd={(title: string) => handleAdd(title)} />
        </Container>
      </div>
    </>
  );
}
