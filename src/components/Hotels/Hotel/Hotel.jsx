import {Component} from 'react';

class Hotel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Hotel numer {this.props.id}</h1>
    );
  }
}

export default Hotel;
