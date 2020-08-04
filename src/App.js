import React from 'react';
import axios from 'axios'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/kc0buk`)
      .then( res => {
        console.log(res)
        this.setState({
          data: res.data
        })
      })

      .catch( err => {
        console.log(`There was an error: ${err}`)
      })
  }


render() {
  return (
    <div className="App container">
      <div className='cards'>
      <div className='card'>
      <img src={this.state.data.avatar_url} />
      <div className='card-info'>
        <h3 className='name'>{this.state.data.name}</h3>
        <p className='username'>GitHub: <a href={this.state.data.html_url}>{this.state.data.login}</a></p>
        <p>{`Location: ${this.state.data.location}`}</p>
        <p>{`Followers: ${this.state.data.followers}`}</p>
        <p>{`Following: ${this.state.data.following}`}</p>
        <p>{`Bio: ${this.state.data.bio}`}</p>
      </div>
      </div>
      </div>
    </div>
  )
  }
}

export default App;
