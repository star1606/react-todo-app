import React from "react";

//props로 받는데 todos 객체가옴
const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      console.log(todo);
      console.log(todos);
      return (
        <div className="collection-item" key={todo.id}>
          <span
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            {todo.content}
          </span>
        </div>
      );
    })
  ) : (
    <p>You have no todo's left, yay1</p>
  );

  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
