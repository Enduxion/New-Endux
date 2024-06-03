import { Component } from "react";

export default class Timeline extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="w-full flex flex-col items-center">
        <span className="flex w-full justify-center custom-secondary-text text-3xl font-extrabold">
          Timeline
        </span>
        <div className="w-full ">
            <div className="line "></div>
        </div>
      </div>
    );
  }
}
