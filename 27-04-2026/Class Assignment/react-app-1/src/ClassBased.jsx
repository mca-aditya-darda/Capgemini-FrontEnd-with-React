import { Component } from "react";

class ClassBased extends Component {
  constructor() {
    super();
    console.log(this);
  }
  render() {
    return <h2>This is the heading from ClassBased Components</h2>;
  }
}
export default ClassBased;
