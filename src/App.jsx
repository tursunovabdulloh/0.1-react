import { useState } from "react";
import Header from "./components/Header";
import Modal from "./components/modal";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [showModal, setshowModal] = useState({
    show: false,
    todoId: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    let date = new Date();

    let newTodo = {
      id: date.getTime(),
      text: text,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setText("");
  }

  function deleteItem(itemId) {
    setTodos((prev) => prev.filter((todo) => todo.id !== itemId));
  }

  return (
    <>
      <Header />
      <main className="main">
        <div className="container main-conytainer">
          <div className="umumiv-wrapper">
            <div className="container form_container">
              <div className="wrapper_color">
                <h2 className="h2">To Do App</h2>
              </div>
              <form id="Todoform" onSubmit={handleSubmit}>
                <div className="form_div">
                  <input
                    id="searchInp"
                    type="text"
                    required
                    value={text}
                    placeholder="Enter todo"
                    onChange={(e) => {
                      setText(e.target.value);
                    }}
                  />
                  <button id="submitBtn" type="submit">
                    Add
                  </button>
                </div>
              </form>
              <ul id="productList">
                {todos.length
                  ? todos.map(({ id, text, completed }) => {
                      return (
                        <li className="list-item" key={id}>
                          {text}
                          <div id="rasm-div">
                            <img
                              onClick={() =>
                                setshowModal((prev) => {
                                  return { ...prev, show: true, todoId: id };
                                  overlay.className.remove("hidden");
                                })
                              }
                              src="public/images/edit.svg"
                              alt=""
                              className="rasm1"
                            />
                            <img
                              onClick={() => deleteItem(id)}
                              src="public/images/delete.svg"
                              alt=""
                              className="rasm2"
                            />
                          </div>
                        </li>
                      );
                    })
                  : "No Data"}
              </ul>
            </div>
          </div>
        </div>
      </main>

      {showModal.show && (
        <Modal
          setTodos={setTodos}
          itemId={showModal.todoId}
          closeModal={setshowModal}
        />
      )}
    </>
  );
}

export default App;
