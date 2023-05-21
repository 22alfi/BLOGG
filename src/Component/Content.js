import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Content = () => {
  return (
    <div>
         <AppBar color='error' position='static'>
        <Toolbar>
            
            <Button variant='contained' color='secondary'><Link to="/">Home</Link></Button>
            <Typography varient = "h6" sx={{flexGrow: 2}} fontFamily={"Bold"} fontSize={30}>Blog App</Typography>
            
            <Button variant='contained' color='secondary'><Link to="/add">Add Blog</Link></Button>
        </Toolbar>
      </AppBar>

    </div>
  )
}

export default Content