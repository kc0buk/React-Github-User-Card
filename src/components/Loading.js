import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

const Loading = () => {

    return (
        <div>
        <CircularProgress /><p className='username'>&nbsp;&nbsp;fetching data, please wait...</p>
        </div>
    )
    }

export default Loading