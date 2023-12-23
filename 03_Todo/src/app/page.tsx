"use client";

import { Container } from "@/components/Container";
import { TodoList } from "@/components/TodoList";
import { useState } from "react";
import { TodoForm } from "@/components/TodoForm";

export default function Home() {
  return (
    <>
      <div className="h-screen justify-center flex items-center">
        <Container>
          <TodoList />
          <button
            onClick={() => document.getElementById("my_modal_1")?.showModal()}
            className="btn btn-circle btn-outline absolute right-10 bottom-10"
          >
            ＋
          </button>
          <TodoForm />
        </Container>
      </div>
    </>
  );
}
