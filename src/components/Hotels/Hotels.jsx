import {Component} from 'react';
import Hotel from './Hotel/Hotel.jsx';

const arr = [1, 2, 3, 4, 5];

class Hotels extends Component {
  render() {
    return (
      <>
        {arr.map((x) => (
          <Hotel key={x} id={x}/>
        ))}
      </>
    );
  }
}

export default Hotels;
