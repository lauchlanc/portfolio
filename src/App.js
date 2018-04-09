import React, { Component } from 'react';
import Body from "./Body";
import MyNavbar from "./MyNavbar";
import './App.css'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            pages: []
        };

        this.changePage=this.changePage.bind(this)
        this.add = this.add.bind(this)
        this.getPages = this.getPages.bind(this)
    }

    componentWillMount() {
        this.getPages()
    }

    add(page) {
        this.setState(prevState => ({
            pages: [
                ...prevState.pages,
                {
                    name: page.name,
                    sections: page.sections
                }
            ]
        }))
    }

    getPages() {
        this.setState(prevState => ({
            pages: []
        }))
        var self = this
        fetch(`./db.json`)
            .then(response => response.json())
            .then(json => json.pages
                .forEach(page => self.add(page)))
    }

    changePage(newPage){
        this.setState({
            page: newPage
        })
    }

    render() {
        return (
            <div>
                <MyNavbar update={this.changePage}
                          pages={this.state.pages}/>
                <Body pages={this.state.pages}
                      page={this.state.page}/>
            </div>
        )
    }
}

export default App;
