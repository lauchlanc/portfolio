import React, {Component} from 'react'
import Grid from "react-bootstrap/es/Grid";

class MyFooter extends Component {

    render() {
        return (
            <footer>
                <Grid>
                    <p className="copyright text-muted small">Lauchlan Chisholm © 2018</p>
                </Grid>
            </footer>
        )
    }
}

export default MyFooter