import React, {Component} from 'react'
import Grid from "react-bootstrap/es/Grid";
import Row from "react-bootstrap/es/Row";
import Col from "react-bootstrap/es/Col";
import Image from "react-bootstrap/es/Image";

class ContentSection extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.sectionA = this.sectionA.bind(this)
        this.sectionB = this.sectionB.bind(this)
        this.getLink = this.getLink.bind(this)
    }

    getLink() {
        if(this.props.section.link) {
            if(this.props.section.link !== "") {
                return (
                    <a href={this.props.section.link}>{this.props.section.linkDescription ? this.props.section.linkDescription : "See my application here"}</a>
                )
            } else {
                return (
                    <p>Source code available upon request</p>
                )
            }
        }
        else {
            return null
        }
    }

    sectionA() {
        return (
            <section className="content-section-a">
                <Grid>
                    <Row>
                        <Col lg={5} className={"ml-auto"}>
                            <hr className="section-heading-spacer" />
                            <div className="clearfix"/>
                            <h2 className="section-heading">{this.props.section.heading}</h2>
                            <p className="lead">
                                {this.props.section.lead}
                                <br/>
                                {this.getLink()}
                                </p>
                        </Col>
                        <Col lg={5} className={"mr-auto"}>
                            <Image src={this.props.section.img} alt={this.props.section.alt} responsive />
                        </Col>
                    </Row>
                </Grid>
            </section>
        )
    }

    sectionB() {
        return(
            <section className="content-section-b">
                <Grid>
                    <Row>
                        <Col lg={5} className="mr-auto order-lg-2">
                            <hr className="section-heading-spacer"/>
                                <div className="clearfix"/>
                                <h2 className="section-heading">{this.props.section.heading}</h2>
                                <p className="lead">
                                    {this.props.section.lead}
                                    <br/>
                                    {this.getLink()}
                                    </p>
                        </Col>
                        <Col lg={5} className="ml-auto order-lg-1">
                            <Image src={this.props.section.img} alt={this.props.section.alt} responsive />
                        </Col>
                    </Row>
                </Grid>
            </section>
        )
    }

    render() {
        return this.props.index % 2 === 0 ? this.sectionA() : this.sectionB()
    }
}

export default ContentSection