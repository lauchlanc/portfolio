import React, {Component} from 'react'
import Grid from "react-bootstrap/es/Grid";
import Row from "react-bootstrap/es/Row";
import Col from "react-bootstrap/es/Col";
import Button from "react-bootstrap/es/Button";
import {FaGithub, FaLinkedin} from "react-icons/lib/fa/index";

class Banner extends Component {
    constructor(props) {
        super(props)
        this.state = {}

    }

    render() {
        return (
            <aside className="banner">
                <Grid>
                    <Row>
                        <Col lg={6} className="my-auto">
                            <h2>Connect with Lauchlan</h2>
                        </Col>
                        <Col lg={6} className="my-auto">
                            <ul className="list-inline intro-social-buttons">
                                <li className="list-inline-item">
                                    <Button className="header-social-buttons" href="https://github.com/w0178837">
                                        <FaGithub/>
                                        <span className="network-name">Github</span>
                                    </Button>
                                </li>
                                <li class="list-inline-item">
                                    <Button className="header-social-buttons" href="https://www.linkedin.com/in/lauchlanchisholm/">
                                        <FaLinkedin/>
                                        <span className="network-name">Linkedin</span>
                                    </Button>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Grid>
            </aside>
        )
    }
}

export default Banner