import * as React from 'react';
import ProjectPreview from './ProjectPreview';
import { List } from '@material-ui/core';
import mockProjects from '../mockProjects';

import './ProjectList.less';


class ProjectList extends React.Component {
    // getInitialState() {
    //     return {
    //         mockProjects
    //     };
    // }

    render() {
        return (
            <div className='project-list'>
                <h3>Projects</h3>
                <List >
                    {
                        mockProjects.map((project, index) =>
                            <ProjectPreview key={index}
                                avatarUrl={project.avatarUrl}
                                projectId={project.projectId}
                                projectKey={project.projectKey}
                                projectName={project.projectName}
                                projectType={project.projectType} />

                        )
                    }
                </List >
            </div >
        );
    }
}

export default ProjectList;