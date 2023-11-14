import './App.css';
import Banner from './Components/Banner/Banner';
import Card from './Components/Cards/Card';
import StarBar from './Components/StarBar/StarBar';
import { user } from './Data/data';

function App() {
  return (
    <div className="App">
      <div className='flex justify-around items-center m-12'>
        <Banner />
        <StarBar />
      </div>
      {user.map((item,key) => <Card key={key}  item={item} />)}
    </div>
  );
}

export default App;
