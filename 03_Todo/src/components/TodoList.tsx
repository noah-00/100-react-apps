type Props = {
  todos: {
    id: number;
    title: string;
    completed: boolean;
  }[];
  handleCheck: (id: number) => void;
  handleDelete: (id: number) => void;
};

export const TodoList = (props: Props) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th className="w-10/12"></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.todos.map((todo) => (
            <tr key={todo.id}>
              <td>
                <label>
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={todo.completed}
                    onClick={() => props.handleCheck(todo.id)}
                  />
                </label>
              </td>
              <td>{todo.title}</td>
              <td>
                <button
                  className="btn btn-outline btn-error"
                  onClick={() => props.handleDelete(todo.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
