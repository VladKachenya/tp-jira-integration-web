import * as React from 'react';
import "./Credentials.less";
import { TextField, FormControl, Button, Grid } from '@material-ui/core';


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
                    <Button variant="contained" color="primary" className="credential-text-input-submit">
                        <span>submit</span>
                    </Button>
                </FormControl>
            </Grid>
        );
    }
}

export default Credentials;