import * as React from 'react';
import '../styles/index.css';

class Home extends React.Component {
  render() {
    return (
      <div className='Home'>
        <h1>Jira projects manager</h1>

        {this.props.children}
      </div>
    );
  }
}

export default Home;