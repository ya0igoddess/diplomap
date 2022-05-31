import React from 'react';
import { Api } from './api';
import { ItemContainer } from './ItemContainer';

function App() {
  return (
    <React.Fragment>
      <aside className="aside">
        <nav className="left-navbar">
          <a className="logo">SpotiClone</a>
          <ul>
            <li><a className="left-navbar-a active">Главная</a></li>
            <li><a className="left-navbar-a">Поиск</a></li>
            <li><a className="left-navbar-a">Моя медиатека</a></li>
          </ul>
        </nav>
      </aside>
      <div className="main-area">
        <div className="top-navbar">
          <button className="top-navbar-button change-payment">СМЕНИТЬ ТАРИФ</button>
          <button className="top-navbar-button user-dropdown">Sample User</button>
        </div>
        <ItemContainer containerName='Недавние релизы' itemCards={[]} refreshMethod={() => Api.get_new_releases(8)}/>
      </div>
    </React.Fragment>
  );
}

export default App;
