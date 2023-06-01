import { addTodo } from "../../store/store";
import { useState } from "react";
import store from "../../store/store";

const AppFooter = () => {
  const [todoText, setTodoText] = useState("");

  const formHandler = (e) => {
    e.preventDefault();
    if (!todoText.length) return;
    store.dispatch(addTodo(todoText));
    const input = document.querySelector("input[name=new-todo-text]");
    input.value = "";
    setTodoText("");
    input.focus();
  };

  const inputOnChangeHandler = (e) => {
    return setTodoText(e.target.value);
  };

  return (
    <>
      <div className="app-footer">
        <form onSubmit={formHandler} className="flex">
          <input
            type="text"
            className="focus:outline-none py-2 px-5 border-[1px] w-[400px] rounded-sm"
            placeholder="What you need to do?"
            name="new-todo-text"
            onChange={inputOnChangeHandler}
          />
          <button
            type="submit"
            className="h-42px px-3 bg-blue-700 text-white flex items-center justify-center"
          >
            Add todo
          </button>
        </form>
        <div className="footer info my-1 text-center w-ful"></div>
      </div>
    </>
  );
};

export default AppFooter;
