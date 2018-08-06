import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText, CardMenu, Button, IconButton } from 'react-mdl';
import '../styles/projects.css';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleProjects() {
        if (this.state.activeTab === 0) {
            return (
                <Card shadow={3} style={{width: '55%', margin: 'auto', text: 'center'}}>
                    <CardTitle style={{color: '#00008B', height: '350px', background: 'url(https://i.imgflip.com/2f9atw.jpg) top / cover' }}></CardTitle>
                    <CardText style={{textAlign: 'center'}}>
                    CERT Tracker certification tracking software offers a reliable solution that enables companies to assess their risk exposure and certification 
                    obligations. Manage, track and report on employee licenses and professional development required by employees in their jobs. CERT Tracker 
                    facilitate compliance with regulations and contractual obligations required by core business activities and quickly and accurately provide 
                    and verify evidence of certification to vendors, suppliers and government agencies. CERT Tracker communicate status of certifications to all 
                    interested parties including employees, managers, legal and human resources.
                    </CardText>
                    <CardActions border style={{display: 'flex', justifyContent: 'space-between', margin: 'auto'}}>
                        <Button colored style={{margin: 'auto'}}>
                            <a href ="https://github.com/balbano80/cert-tracker" rel="noopener noreferrer" target="_blank">Github</a>
                        </Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            )
        }
        else if (this.state.activeTab === 1) {
            return (
                <Card shadow={3} style={{width: '55%', margin: 'auto', text: 'center'}}>
                    <CardTitle style={{ color: '#fff', height: '350px', background: 'url(https://i.imgflip.com/2cf0rr.jpg) top / cover' }}></CardTitle>
                    <CardText style={{textAlign: 'center'}}>
                    Ohana is an app targetted for families that would like to organize family time/gathering events. 
                    It allows the creation of a family event by date and time, suggestions of things to do by all of those in the family, 
                    and provide a methood for family members to vote on any and all suggestions. 
                    </CardText>
                    <CardActions border style={{display: 'flex', justifyContent: 'space-between', margin: 'auto'}}>
                        <Button colored style={{paddingLeft: '100px'}}>
                            <a href ="https://github.com/Laethaka/Ohana" rel="noopener noreferrer" target="_blank">Github</a>
                        </Button>
                        <Button colored style={{paddingRight: '100px'}}>
                            <a href ="https://ohana-families.herokuapp.com/" rel="noopener noreferrer" target="_blank">Live Demo</a>
                        </Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            )
        }
        else if (this.state.activeTab === 2) {
            return (
                <Card shadow={3} style={{width: '55%', margin: 'auto', text: 'center'}}>
                    <CardTitle style={{ color: '#fff', height: '350px', background: 'url(http://via.placeholder.com/350x150) top / cover' }}>Project 3</CardTitle>
                    <CardText style={{textAlign: 'center'}}>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using 
                    Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like 
                    readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
                    will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </CardText>
                    <CardActions border style={{display: 'flex', justifyContent: 'space-between', margin: 'auto'}}>
                        <Button colored style={{paddingLeft: '100px'}}>
                            <a href ="https://github.com/Laethaka/Ohana" rel="noopener noreferrer" target="_blank">Github</a>
                        </Button>
                        <Button colored style={{paddingRight: '100px'}}>
                            <a href ="https://ohana-families.herokuapp.com/" rel="noopener noreferrer" target="_blank">Live Demo</a>
                        </Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            )
        }
    }

    render() {
        return (
            <div className="project-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Project 1</Tab>
                    <Tab>Project 2</Tab>
                    <Tab>Project 3</Tab>
                </Tabs>

                <section className="projects">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleProjects()}
                            </div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        )
    }
};

export default Projects;