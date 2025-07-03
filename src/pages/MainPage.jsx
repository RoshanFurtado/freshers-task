import React, { useState } from 'react';
import AddPage from './PageAdd'; // adjust path if needed
import ListPage from './PageList';
import "./page.css";

const Main = () => {
  const [activePage, setActivePage] = useState("add");

  return (
    <div className="form-container">
      <div className="button-group">
        <button
          className={`add ${activePage === 'add' ? 'active' : ''}`}
          onClick={() => setActivePage('add')}
        >
          Add
        </button>
        <button
          className={`list ${activePage === 'list' ? 'active' : ''}`}
          onClick={() => setActivePage('list')}
        >
          List
        </button>
      </div>

      <div className="page-content">
        {activePage === 'add' && <AddPage />}
        {activePage === 'list' && <ListPage />}
      </div>
    </div>
  );
};

export default Main;
