import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';


ReactDOM.render(
    <Router>
      <div>
         <nav>
          <ul>
            <li>
               <Link to="/">Home</Link>
             </li>
             <li>
               <Link to="/about">About</Link>
             </li>
           </ul>
         </nav>
         <Route path="/" exact component={Home} />
         <Route path="/about" component={About} />
       </div>
     </Router>,
    document.getElementById("root")
);