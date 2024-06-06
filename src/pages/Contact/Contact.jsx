import { Component } from "react";
import WIP from "../WIP/WIP";

export default class Contact extends Component {
    
    componentDidMount() {
        console.log('set to contact');
        this.props.setCurrent("contact");
    }
    render() {
        return (
            <WIP pageName={"Contact"} />
        );
    }
}