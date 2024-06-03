import { Component } from "react";

export default class About extends Component {
    
    componentDidMount() {
        console.log('set to about');
        this.props.setCurrent("about");
    }
    render() {
        return (
            <>About</>
        );
    }
}