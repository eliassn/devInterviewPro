import React from 'react'
import {Typography,AppBar} from '@material-ui/core'
import Notification from './components/Notification'
import VideoPlayer from './components/VideoPlayer'
import Option from './components/Option'
import {makeStyles} from '@material-ui/core/styles'
import Editor from "@monaco-editor/react";

const App = () => {
    const useStyles = makeStyles((theme)=>({
        appBar: {
            borderRadius: 15,
            margin: '30px 100px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: '600px',
            border: '2px solid black',
        
            [theme.breakpoints.down('xs')]: {
              width: '90%',
            },
          },
          image: {
            marginLeft: '15px',
          },
          wrapper: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
          },
    }))
    const classes = useStyles()
    function handleEditorChange(value, event) {
      console.log("here is the current model value:", value);
    }
    return (
        <div className={classes.wrapper}>
        
           <AppBar className={classes.appBar}  position="static" color="inherit">
               <Typography  variant="h2"align="center">Online Interview</Typography>
           </AppBar>
         
           <VideoPlayer />
           <Option>
               <Notification />
           </Option>
           <Editor style={{display: 'flex'}}
     height="50vh"
     defaultLanguage="javascript"
     defaultValue="// some comment"
     onChange={handleEditorChange}
   />
        </div>
    )
}

export default App
