import { useState } from "react";
import "./style.css";

export default function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <a href="#" className="logo">
          LOGO
        </a>
        <nav className="nav">
          <ul className="nav-list">
            <li className="listItem">
              <a href="#" className="list-link">
                year
              </a>
            </li>
            <li className="listItem">
              <a href="#" className="list-link">
                month
              </a>
            </li>
            <li className="listItem">
              <a href="#" className="list-link">
                weeks
              </a>
            </li>
          </ul>
        </nav>
        <button className="btn">Todo</button>
      </div>
    </header>
  );
}
