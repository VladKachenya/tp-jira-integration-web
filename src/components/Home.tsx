import * as React from 'react';
import ProjectList from './ProjectList';
import Credentials from './Credentials';
import { Grid } from '@material-ui/core';
import './Home.less';

class Home extends React.Component {

  render() {
    return (
      <Grid container className='Home' spacing={1}>
        <Grid item xs className='credentials-container, home-container'>
          <Credentials />
        </Grid >
        <Grid item xs className='project-list-container, home-container'>
          <ProjectList />
        </Grid >
      </Grid>
    );
  }
}

export default Home;