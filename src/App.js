import React from 'react';
import axios from 'axios'
import Loading from './components/Loading'
import Card from './components/Card'
import FollowerCards from './components/FollowerCards'
import './App.css';

class App extends React.Component {
  
  constructor() {
    super()
    this.state = {
      username: 'kc0buk',
      data: [],
      loadingData: true,
      followers: [],
      loadingFollowers: true,
      searchValue: ''
    }
  }

  /* Gets initial data for initial username and sets data to state. Sets loadingData to the opposite of current value to trigger render */
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

  /* Handles input for search field and sets value into username state */
  handleChange = event => {
    const { value } = event.target

    this.setState({
      username: value
    })
  }

// async componentDidUpdate(prevState) {
//   if (prevState.searchValue !== this.state.searchValue) {
//     axios
//         .get(`https://api.github.com/users/${this.state.username}`)
//         .then( res => {
//         console.log(res)
//         this.setState({
//           data: res.data,
//           loadingData: !this.state.loadingData
//          /* searchValue: '' */
//         })
//       })

//        await axios
//         .get(`https://api.github.com/users/${this.state.username}/followers`)
//         .then( res => {
//           console.log(res)
//           this.setState({
//             followers: res.data,
//             loadingFollowers: !this.state.loadingFollowers
//           })
//         })

//       .catch( err => {
//         console.log(`There was an error: ${err}`)
//       })
//   }
// }

  /* Submits search value from input and sets into state to trigger componentDidUpdate to fetch user data for new user */
  fetchData = event => {
    event.preventDefault()
    console.log(event)
    this.setState({
      searchValue: event.target.value,
      searchValue: ''
    })
      }
    
    
  


render() {
  return (
    <div className="App container">
      <div className='cards'>
      <form onSubmit={this.fetchData}>
      <input 
        type='text'
        value={this.state.username}
        onChange={this.handleChange}
        placeholder='Enter a GitHub username'
      />
      <button>Fetch Data</button>
      </form>
      {/* Controls whether Loading component or Card component renders */}
        {
          this.state.loadingData ? <Loading /> : <Card data={this.state.data} />
        }
        
        {/* Controls whether Loading or Followers card renders */}
        {
          this.state.loadingFollowers ? <Loading /> : <FollowerCards data={this.state.followers} username={this.state.data.login} followers={this.state.followers}       />
        }
      </div>
    </div>
  )
  }
}

export default App;
