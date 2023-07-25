import './App.css';
import Title from './components/Title';
import Counter from './components/Counter';
import Newyear from './assets/newyear.jpeg';
import useCountdown from './hooks/useCountdown';

function App() {
  const [day, hour, minute, second] = useCountdown('Jan 1, 2024 00:00:00');
  return (
    <div className='App' style={{ backgroundImage: `url(${Newyear})` }}>
      <div className='container'>
        <Title title='Countdown to 2024!' />
        <div className='countdown-container'>
          <Counter title='Dias' number={day} />
          <Counter title='Horas' number={hour} />
          <Counter title='Minutos' number={minute} />
          <Counter title='Segundos' number={second} />
        </div>
      </div>
    </div>
  );
}

export default App;
