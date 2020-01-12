import * as React from 'react';
import "./Credentials.less";
import { TextField, FormControl, Button, Grid } from '@material-ui/core';
import loadProjectList from '../actions/ProjectsAction';
import ICredentials from '../ViewModels/ICredentials';



class Credentials extends React.Component {
    render() {
        return (
            <Grid className='credential' container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <h3>
                    Credentials
                </h3>
                <FormControl className="credential-text-input">
                    <TextField label="Product url" variant="filled" className="" />
                    <TextField label="User email" variant="filled" className="" />
                    <TextField label="Access token" variant="filled" className="" />
                    <Button onClick={this._onClick} variant="contained" color="primary" className="credential-text-input-submit">
                        <span>submit</span>
                    </Button>
                </FormControl>
            </Grid>
        );
    }

    _onClick () {
        const credentials: ICredentials = {
            url: "targetprocess.atlassian.net",
            email: "gagarino5644@yandex.by",
            token: "IDB2ammpegH1B9b5lGCP7A10"
        };
        loadProjectList(credentials);
    }
}

export default Credentials;