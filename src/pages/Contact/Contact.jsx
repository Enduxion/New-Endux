import { Component } from "react";

export default class Contact extends Component {
    
    componentDidMount() {
        console.log('set to contact');
        this.props.setCurrent("contact");
    }
    render() {
        return (
            <>Contact</>
        );
    }
}