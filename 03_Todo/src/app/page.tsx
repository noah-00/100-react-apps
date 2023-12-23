import { Container } from "@/components/Container";
import { TodoList } from "@/components/TodoList";

export default function Home() {
  return (
    <div className="h-screen justify-center flex items-center">
      <Container>
        <TodoList />
      </Container>
    </div>
  );
}
