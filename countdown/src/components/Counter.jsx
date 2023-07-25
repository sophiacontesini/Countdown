import './Counter.css';

// eslint-disable-next-line react/prop-types
const Counter = ({ title, number }) => {
  return (
    <div className='counter'>
      <p className='counter-number'>{number}</p>
      <h3>{title}</h3>
    </div>
  );
};

export default Counter;
