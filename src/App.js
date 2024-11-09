import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/navigation/navigation';
import HomePage from './customer/pages/HomePage/homePage';
import HomeSectionCard from './customer/components/HomeSectionCard/homeSectionCard';

function App() {
  return (
    <div className="">
      <Navigation/>
      <div>
        <HomePage/>
      </div>
    </div>
  );
}

export default App;
