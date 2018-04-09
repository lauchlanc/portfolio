import React, {Component} from 'react'
import Header from "./Header";
import ContentSection from "./ContentSection";
import Banner from "./Banner";
import MyFooter from "./MyFooter";

class Body extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            sections: []
        }

        this.getPage = this.getPage.bind(this)
        this.eachSection = this.eachSection.bind(this)
        this.getHeader = this.getHeader.bind(this)
    }

    componentDidMount() {
        this.setState({

        })
    }

    eachSection(section, i) {
        return(
            <ContentSection key={i}
                            section={section}
                            index={i} />
        )
    }

    getPage(page, i) {
        return (
            i === this.props.page ?
                page.sections.map(this.eachSection) : null
        )
    }

    getHeader() {
        return this.props.page === 0 ? <Header full/> : <Header/>
    }

    render() {

        return (
            <div>
                {this.getHeader()}
                {this.props.pages.map(this.getPage)}
                <Banner/>
                <MyFooter/>
            </div>
        )


    }
}

export default Body