import React from 'react';
import './App.scss';
import SearchBar from './component/SearchBar';
import logo from './ressource/logo.svg';


class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      venues: []
    }
  }

  render(){
  return (
    <div className='App'>
      <div className='searchBar'>
        <img src={logo} alt='logo'></img>
        <h1>What should I do in </h1>
        <SearchBar onResult={venues => this.setState({venues: venues})} />
      </div>
      <div className='container'>
        {this.state.venues.map(venue=>
          {return (
          <div key={venue.id} className='box'>
            <img src={`${venue.categories[0].icon.prefix}bg_64${venue.categories[0].icon.suffix}`} alt={venue.name}/>
            <h4>{venue.name}</h4>
            {venue.location.address}<br></br>
            {venue.location.city}
          </div>)
          })}
      </div>
    </div>
  )
  }

}

export default App;
