import react_logo from './react_logo.svg';
import django_logo from './django_logo.svg';
import plus_symbol from './plus_symbol.svg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <ul className="App-logo_list">
          <li><img src={django_logo} className="App-django_logo" alt="django_logo"/></li>
          <li><img src={plus_symbol} className="App-plus_symbol" alt="plus_symbol"/></li>
          <li><img src={react_logo} className="App-react_logo" alt="react_logo"/></li>
              </ul>
        <h2>This is a template for a Django-React App</h2>
        <h5>First steps in using this template include setting up a CRUD App, 
                  creating a userbase, and setting up a PostgreSQL database</h5>

        <p className = "App-text_source">
            While ultimately linked to the <code>build</code> folder, 
            this code is sourced from (before running npm/yarn build)
            <code> src/App.js</code>, which is imported into
            <code> src/index.js</code>, which grabs the "root" div id from 
            <code> public/index.html</code>, which is served by Django as
            the home page (no rerouting by app name).
        </p>
        <a
          className="App-link"
          href="http://localhost:8000/admin"
          target="_blank"
          rel="noopener noreferrer"
        >
          Admin page
        </a>
      </header>
    </div>
  );
}

export default App;
