import React from 'react';
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import colorSharp from '../assets/img/colorSharp.jpg';
import ProjectCards from './ProjectCards';
import headerImg from '../assets/img/headerImg.svg';

export const Projects = () => {
    const projects = [{
            title: "Business Starup",
            description: "Design & Development",
            imgUrl: colorSharp,
        },
        {
            title: "Business Starup",
            description: "Design & Development",
            imgUrl: colorSharp,
        },
        {
            title: "Business Starup",
            description: "Design & Development",
            imgUrl: colorSharp,
        },
        {
            title: "Business Starup",
            description: "Design & Development",
            imgUrl: colorSharp,
        },
        {
            title: "Business Starup",
            description: "Design & Development",
            imgUrl: colorSharp,
        },
        {
            title: "Business Starup",
            description: "Design & Development",
            imgUrl: colorSharp,
        },
    ]
    return ( 
        <section className = "project"id = "project">
            <Container>
                <Row>
                    <Col>
                        <h2> Projects </h2> 
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit.Consectetur optio necessitatibus molestias numquam ? Dicta aliquam corporis quae deserunt dolorem.Laborum quo molestias facilis ipsam eligendi libero, necessitatibus provident fugiat animi ? </p> 
                        <Tab.Container id = "projects-tabs" defaultActiveKey = "first">
                            <Nav Variant = "pills" defaultActiveKey = "/home">
                                <Nav.Item>
                                    <Nav.Link eventKey = "first"  >Tab un </Nav.Link> 
                                </Nav.Item> 
                                <Nav.Item>
                                    <Nav.Link eventKey = "second" > Tab deux </Nav.Link> </Nav.Item> 
                                <Nav.Item>
                                    <Nav.Link eventKey = "third" > Tab trois </Nav.Link> 
                                </Nav.Item> 
                            </Nav> 
                            <Tab.Content>
                                <Tab.Pane eventKey = "first">
                                <Row> {
                                    projects.map((project, index) => {
                                        return ( 
                                            <ProjectCards Key = { index } {...project }/>
                                        )
                            })} </Row> 
                                </Tab.Pane> 
                                <Tab.Pane eventKey = "second" > Lorem Ipsum </Tab.Pane> 
                                <Tab.Pane eventKey = "third" > Lorem Ipsum </Tab.Pane> 
                            </Tab.Content> 
                        </Tab.Container> 
                    </Col> 
                </Row> 
            </Container> 
            <img className = "background-image-right" src = { colorSharp } ></img> 
        </section>
    );
};

export default Projects;