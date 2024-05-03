import { useState } from "react";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [showModal, setshowModal] = useState(false);

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

  function editItem(params) {}

  return (
    <>
      <Header />
      <main className="main">
        <div className="container main-conytainer">
          <div class="umumiv-wrapper">
            <div class="container form_container">
              <div class="wrapper_color">
                <h2 class="h2">To Do App</h2>
              </div>
              <form id="Todoform" onSubmit={handleSubmit}>
                <div class="form_div">
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
            <modal id="modal" class="modal hidden">
              <form id="editform">
                <div class="modal_div">
                  <input
                    id="editInp"
                    type="text"
                    required
                    placeholder="Edit todo..."
                  />
                  <button id="editBtn" type="submit">
                    Edit
                  </button>
                </div>
              </form>
            </modal>
            <div id="overlay" class="overlay hidden"></div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
