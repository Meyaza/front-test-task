import Slider from './components/slider/slider';
import './App.css';
import Svg from './components/UI/svg/svg';
import Icon from './components/UI/icon/icon';

function App() {
  return (
    
    <div className="App">
      <div className='svg-1'>
        <Svg/>
      </div>
      <div className='svg-2'>
        <Svg/>
      </div>
      <div className='svg-3'>
        <Icon/>
      </div>
      <div className='title'>
        <p className='title-content'>Наши топ-блогеры</p>
        <p className='text-content'>Лучше специалисты в своем деле, 
          средний опыт работы в профессии - 27 лет</p>
       </div>
       <div className='navigation'>
                <div className='leftArrow'/> 
                <div className='rightArrow'/>
        </div>
       <Slider/>
    </div>
  );
}

export default App;
