import React ,{Component} from 'react';
import About from './../About';
import Footer from './../Footer';
import Home from './../Home';
import Portfolio from './../Portfolio';
import Profile from './../Profile';
import Social from './../SocialMedia';
import Work from './../Work';

class App extends Component {
  render(){
  return (
    <div className="App">
      <Home/>
      <Work/>
      <Portfolio/>
      <Profile/>
      <About/>
      <Social/>
      <Footer/>

    </div>
  );
  }
}

export default App;
