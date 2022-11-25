import './App.css';
//component
import Header from './components/Header';
import AddContents from './components/AddContents';
import Contents from './components/Contents';

function App() {
  return (
    <div className='wrap'>
      <Header />
      <AddContents />
      <Contents />
    </div>
  );
}

export default App;
