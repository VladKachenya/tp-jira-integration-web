import * as React from 'react';
import ProjectList from './ProjectList';
import Credentials from './Credentials';
import { Grid } from '@material-ui/core';
import './Home.less';

class Home extends React.Component {

  render() {
    return (
      <div className='Home'>
        <Grid container  spacing={1}>
          <Grid item xs className='credentials-container'>
            <Credentials />
          </Grid >
          <Grid item xs={8} className='project-list-container'>
            <ProjectList />
          </Grid >
        </Grid>
      </div>
    );
  }
}

export default Home;