import { Component } from "react";
import WIP from "../WIP/WIP";

export default class About extends Component {
    
    componentDidMount() {
        console.log('set to about');
        this.props.setCurrent("about");
    }
    render() {
        return (
            <WIP pageName="About" />
        );
    }
}