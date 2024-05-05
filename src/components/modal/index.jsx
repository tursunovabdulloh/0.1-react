import { useState } from "react";

export default function Modal({ closeModal, itemId, setTodos }) {
  const [text, setText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    setTodos((prev) =>
      prev.map((item) => {
        if (item.id === itemId) {
          return { ...item, text };
        }
        return item;
      })
    );
    setText("");
    closeModal((prev) => {
      return { show: false, todoId: null };
    });
  }

  return (
    <div id="modal" className="modal">
      <form id="editform" onSubmit={handleSubmit}>
        <div className="modal_div">
          <input
            id="editInp"
            type="text"
            required
            placeholder="Edit todo..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button id="editBtn" type="submit">
            Edit
          </button>
        </div>
      </form>
      <button
        onClick={() =>
          closeModal((prev) => {
            return { ...prev, show: false, todoId: "" };
          })
        }
        id="closeBtn"
        type="submit"
      >
        close
      </button>
    </div>
  );
}
