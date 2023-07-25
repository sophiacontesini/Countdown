import './Title.css';

// eslint-disable-next-line react/prop-types
const Title = ({ title, eventColor }) => {
  return (
    <h1 className='title' style={{ color: eventColor }}>
      {title}
    </h1>
  );
};

export default Title;
