
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import data from './data';

function App() {
  const cards = data.map((item, index) => {
    return (
      <>
        <Card 
          key={item.id}
          {...item}
        />
        {index < data.length - 1 && <hr/>}
      </>
    )
  })
  return (
    <div className="App">
      <Header />
      {cards}
    </div>
  );
}

export default App;
