import React, {Component} from 'react'
import Grid from "react-bootstrap/es/Grid";
import Panel from "react-bootstrap/es/Panel";
import FaGithub from "react-icons/lib/fa/github";
import FaLinkedin from "react-icons/lib/fa/linkedin";
import Button from "react-bootstrap/es/Button";


class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {}

        this.getFull = this.getFull.bind(this)
    }

    getFull() {
        return (
            <Grid>
                <div className="intro-message">
                    <Panel style={{backgroundColor: '#333', borderColor: '#333'}}>
                        <h1>Lauchlan Chisholm</h1>
                        <h3>A motivated and engaged software developer</h3>
                        <hr className="intro-divider" />
                        <ul className="intro-social-buttons">
                            <Button className="header-social-buttons" href="https://github.com/w0178837">
                                <FaGithub/>
                                <span className="network-name">Github</span>
                            </Button>
                            <Button className="header-social-buttons" href="https://www.linkedin.com/in/lauchlanchisholm/">
                                <FaLinkedin/>
                                <span className="network-name">Linkedin</span>
                            </Button>
                        </ul>
                    </Panel>
                </div>
            </Grid>
        )
    }

    render() {
        return (
            <div className="intro-header">
                {this.props.full ? this.getFull() : null}
            </div>
        )
    }
}

export default Header