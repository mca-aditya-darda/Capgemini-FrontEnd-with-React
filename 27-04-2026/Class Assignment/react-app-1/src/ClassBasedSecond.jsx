import { Component } from "react";

class ClassBasedSecond extends Component {
  constructor() {
    super();
    console.log(this);
  }
  render() {
    return <h2>This is the heading from ClassBasedSecond Components</h2>;
  }
}
export default ClassBasedSecond;
