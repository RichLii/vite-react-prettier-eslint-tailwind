import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='flex justify-center'>
        <a href='https://vitejs.dev'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React + Prettier + ESLint + Tailwind</h1>
    </div>
  );
}

export default App;
