import './App.css';
import Slider from './components/slider/slider';

function App() {
  return (
    <div className="App">
      <div className='title'>
        <p className='title-content'>Наши топ-блогеры</p>
        <p className='text-content'>Лучше специалисты в своем деле, 
          средний опыт работы в профессии - 27 лет</p>
       </div>
       <div className='navigation'>
                <div className='leftArrow'/> 
                <div className='rightArrow'/>
        </div>
       <Slider></Slider>
    </div>
  );
}

export default App;
