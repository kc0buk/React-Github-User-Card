import React from 'react';
import axios from 'axios'
import Loading from './components/Loading'
import Card from './components/Card'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [],
      loading: true
    }
  }

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/kc0buk`)
      .then( res => {
        console.log(res)
        this.setState({
          data: res.data,
          loading: !this.state.loading
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
        {
          this.state.loading ? <Loading /> : <Card data={this.state.data}/>
        }
      </div>
    </div>
  )
  }
}

export default App;
