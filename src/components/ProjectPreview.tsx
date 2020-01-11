import * as React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { IProject } from '../ViewModels/IProject';
import ListItem from '@material-ui/core/ListItem';

import './ProjectPreview.less';

class ProjectPreview extends React.Component<IProject, {}> {
    constructor(project: IProject) {
        super(project);
    }

    render() {
        return (
            <ListItem className="ProjectPreview">
                <ListItemAvatar>
                    <Avatar alt={this.props.projectKey} src={this.props.avatarUrl}>
                        {this.props.projectKey}
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={this.props.projectName} secondary={`Project type: ${this.props.projectType}`} />
            </ListItem>
        );
    }
}

export default ProjectPreview;