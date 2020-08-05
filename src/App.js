import React from 'react';
import axios from 'axios'
import Loading from './components/Loading'
import Card from './components/Card'
import FollowerCards from './components/FollowerCards'
import './App.css';

class App extends React.Component {
  
  constructor() {
    super()
    const initialUser = 'kc0buk'
    this.state = {
      username: initialUser,
      data: [],
      loadingData: true,
      followers: [],
      loadingFollowers: true
    }
  }

  async componentDidMount() {
    axios
      .get(`https://api.github.com/users/${this.state.username}`)
      .then( res => {
        // console.log(res)
        this.setState({
          data: res.data,
          loadingData: !this.state.loadingData
        })
      })

      await axios
        .get(`https://api.github.com/users/${this.state.username}/followers`)
        .then( res => {
          // console.log(res)
          this.setState({
            followers: res.data,
            loadingFollowers: !this.state.loadingFollowers
          })
        })

      .catch( err => {
        console.log(`There was an error: ${err}`)
      })
  }

  handleChange = event => {
    const { value } = event.target

    this.setState({
      username: value
    })
  }

componentDidUpdate(prevState) {
  if (prevState.username !== this.state.username) {
    axios
        .get(`https://api.github.com/users/${this.state.username}`)
        .then( res => {
        console.log(res)
        this.setState({
          data: res.data,
          loadingData: !this.state.loadingData,
          username: this.state.username
        })
      })

       axios
        .get(`https://api.github.com/users/${this.state.username}/followers`)
        .then( res => {
          console.log(res)
          this.setState({
            followers: res.data,
            loadingFollowers: !this.state.loadingFollowers
          })
        })

      .catch( err => {
        console.log(`There was an error: ${err}`)
      })
  }
}

  fetchData = event => {
    event.preventDefault()
    console.log(event)
    // axios
    //     .get(`https://api.github.com/users/${this.state.username}`)
    //     .then( res => {
    //     console.log(res)
    //     this.setState({
    //       data: res.data,
    //       loadingData: !this.state.loadingData
    //     })
    //   })

    //    axios
    //     .get(`https://api.github.com/users/${this.state.username}/followers`)
    //     .then( res => {
    //       console.log(res)
    //       this.setState({
    //         followers: res.data,
    //         loadingFollowers: !this.state.loadingFollowers
    //       })
    //     })

    //   .catch( err => {
    //     console.log(`There was an error: ${err}`)
    //   })
      }
    
    
  


render() {
  return (
    <div className="App container">
      <div className='cards'>
      <input 
        type='text'
        value={this.state.username}
        onChange={this.handleChange}
        placeholder='Enter a GitHub username'
      />
      <button onClick={this.fetchData}>Fetch Data</button>
        {
          this.state.loadingData ? <Loading /> : <Card data={this.state.data} />
        }
        
        {
          this.state.loadingFollowers ? <Loading /> : <FollowerCards data={this.state.followers} username={this.state.data.login} followers={this.state.followers}       />
        }
      </div>
    </div>
  )
  }
}

export default App;
