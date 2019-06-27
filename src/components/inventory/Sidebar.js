import React from 'react';

const Sidebar = props => (
  <div className="Sidebar">
    <ul>
      <li className="add-new-item" onClick={() => props.changeTab(0)}>
        <span>Add New Item</span>
      </li>
      <li
        className={props.activeTab === 1 ? 'active' : ''}
        onClick={() => props.changeTab(1)}>
        Products
      </li>
      <li
        className={props.activeTab === 2 ? 'active' : ''}
        onClick={() => props.changeTab(2)}>
        Categories
      </li>
      <li
        className={props.activeTab === 3 ? 'active' : ''}
        onClick={() => props.changeTab(3)}>
        Item Archive
      </li>
    </ul>
  </div>
);

export default Sidebar;
