import React from 'react';

const Categories = ({ toggleCategory, active }) => (
  <div className="tabs is-toggle is-toggle-rounded">
    <ul>
      {/* {categories.map( category => (
        <li className={active === category.name ? "is-active" : ''}>
          <a onClick={toggleCategory}>
            <span className="icon is-small"><i className="fas fa-image" /></span>
            <span>{category.name}</span>
          </a>
        </li>
      ))} */}
      <li className="is-active">
        <a>
          <span className="icon is-small"><i className="fas fa-image" /></span>
          <span>All</span>
        </a>
      </li>
      <li>
        <a>
          <span className="icon is-small"><i className="fas fa-music" /></span>
          <span>Suits</span>
        </a>
      </li>
      <li>
        <a>
          <span className="icon is-small"><i className="fas fa-film" /></span>
          <span>Videos</span>
        </a>
      </li>
      <li>
        <a>
          <span className="icon is-small"><i className="fas fa-file-alt" /></span>
          <span>Documents</span>
        </a>
      </li>
    </ul>
  </div>
)

export default Categories;