import React from "react";
class RefsDemoTwo extends React.Component {
  constructor(props) {
    super(props);
    this.myField = React.createRef();
  }

  componentDidMount() {
    console.log(this.myField);
    this.myField.current.focus();
  }

  // remember - if we use arrow functions in class components
  // we do not need to bind the function in the constructor
  // use the function as an event on the button
  getValueHandler = () => {
    alert(this.myField.current.value);
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.myField} />
        <button onClick={this.getValueHandler}>Get Field Value</button>
      </div>
    );
  }
}

export default RefsDemoTwo;
