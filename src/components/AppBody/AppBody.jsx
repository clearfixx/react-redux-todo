import { useSelector, useDispatch } from "react-redux";
import { BiCheck, BiTrash } from "react-icons/bi";
import { toggleTodo, deleteTodo } from "../../store/store";
import store from "../../store/store";
import "./AppBody.css";

const AppBody = () => {
  const todos = useSelector((state) => state);

  const todoOnClickHandler = (e) => {
    const id = e.target.id;
    store.dispatch(toggleTodo(Number(id)));
  };

  const deleteHandler = (e) => {
    const id = e.target.dataset.id;
    store.dispatch(deleteTodo(Number(id)));
  };

  return (
    <>
      <div className="app-body my-4">
        <div className="todo-wrapper">
          {todos.length ? (
            <>
              {todos
                .filter((todo) => todo.deleted !== true)
                .map(({ id, title, completed }) => (
                  <div
                    className={`todo-item bg-slate-200 flex flex-wrap w-full rounded-sm justify-between items-center mb-2 cursor-pointer h-[40px] ${
                      completed ? "completed" : ""
                    }`}
                    onClick={todoOnClickHandler}
                    key={id}
                    id={id}
                  >
                    <div className="todo-content font-normal pl-2">{title}</div>
                    <div className="todo-buttons flex items-center">
                      {completed === true ? (
                        <>
                          <button
                            data-id={id}
                            className="btn-delete bg-red-400 font-bold text-xl text-white rounded-sm w-[40px] h-[40px] text-center m-auto transition-all ease-in-out duration-"
                            onClick={deleteHandler}
                          >
                            <BiTrash />
                          </button>
                        </>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                ))}
            </>
          ) : (
            <p>You have no todos for now</p>
          )}
        </div>
      </div>
    </>
  );
};

export default AppBody;
