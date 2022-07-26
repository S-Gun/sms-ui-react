import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import StartConversation from './StartConversation';
import axios from 'axios';
// import { Badge, StyledBadge } from '@material-ui/core';
// import { DataGridPro } from '@mui/x-data-grid-pro';
// import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  chatSection: {
    width: '100%',
    height: '80vh'
  },
  headBG: {
      backgroundColor: '#e0e0e0'
  },
  borderRight500: {
      borderRight: '1px solid #e0e0e0'
  },
  messageArea: {
    height: '70vh',
    overflowY: 'auto'
  }
});
function msgFetch(sender, receiver){
    var axios = require('axios');

    var config = {
     method: 'GET',
    url: 'http://localhost:8080/api/message?sender='+sender+'&receiver='+receiver+'&type=fetch',
    mode: 'no-cors',
     headers: {
        //  "Accept": 'application/json',
        'Content-Type': 'application/json',
    //  'Access-Control-Allow-Origin': 'localhost', 
        }
    };
    var resp = axios.get(config).then((response) => response.data) 
    
    axios(config)
    .then(function (response) {
        let messages = response.data.split("\n");
        var chatBox = document.getElementById("message");
        chatBox.innerHTML= "";
        let counter = 1;
        for(let i in messages){
            var msg1 = messages[i].split(":");
            // console.log(msg1);
            if(msg1[1] && msg1[0]==sender){
                chatBox.innerHTML += '<ListItem key="'+counter+'"><Grid container><Grid item xs={12}><ListItemText align="left" primary="'+ msg1[1] +'"></ListItemText></Grid><Grid item xs={12}><ListItemText align="left" secondary=""></ListItemText></Grid></Grid></ListItem>';
                chatBox.innerHTML += '<li class="MuiListItem-root MuiListItem-gutters"><div class="MuiGrid-root MuiGrid-container"><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12"><div class="MuiListItemText-root" align="right"><span class="MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock">'+ msg1[1] +'</span></div></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12"><div class="MuiListItemText-root" align="right" secondary=""><p class="MuiTypography-root MuiListItemText-secondary MuiTypography-body2 MuiTypography-colorTextSecondary MuiTypography-displayBlock">' +'</p></div></div></div></li>';
            }else if(msg1[1] && msg1[0]==receiver){
                chatBox.innerHTML += '<ListItem key="'+counter+'"><Grid container><Grid item xs={12}><ListItemText align="right" primary="'+ msg1[1] +'"></ListItemText></Grid><Grid item xs={12}><ListItemText align="left" secondary=""></ListItemText></Grid></Grid></ListItem>';
                chatBox.innerHTML += '<li class="MuiListItem-root MuiListItem-gutters"><div class="MuiGrid-root MuiGrid-container"><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12"><div class="MuiListItemText-root" align="left"><span class="MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock">'+ msg1[1] +'</span></div></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12"><div class="MuiListItemText-root" align="right" secondary=""><p class="MuiTypography-root MuiListItemText-secondary MuiTypography-body2 MuiTypography-colorTextSecondary MuiTypography-displayBlock">' +'</p></div></div></div></li>';
            }
        }
        // console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
     console.log(error);
    });

    return resp;
}

async function selectUser(username){
    var receiver = document.getElementById("user");
    receiver.value = username;
    var sender = "Summer";
    msgFetch(sender, username);
}

var userslist = []

async function userList(sender){
   
    
    const response = await fetch('http://localhost:8080/api/message?sender='+sender+'&type=users');
    
    // Storing data in form of JSON
    var UserList = document.getElementById("userlist")
    var data = await response.text();
    userslist = data.split("\n")
    // for(let i in userslist){
    //     if(userslist[i]){
    //         // UserList.innerHTML += '<ListItem button key="'+userslist[i]+'" onClick={() =\>selectUser("'+userslist[i]+'")}><ListItemIcon><Avatar alt="'+userslist[i]+'" src="https://material-ui.com/static/images/avatar/1.jpg" /></ListItemIcon><ListItemText primary="'+userslist[i]+'"></ListItemText><ListItemText secondary="online" align="right"></ListItemText></ListItem><Divider />';
    //         UserList.innerHTML += '<div class="MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-button" tabindex="0" role="button" aria-disabled="false" id="'+userslist[i]+'" ><div class="MuiListItemIcon-root"><div class="MuiAvatar-root MuiAvatar-circular"><img alt="'+userslist[i]+'" src="https://material-ui.com/static/images/avatar/3.jpg" class="MuiAvatar-img"></div></div><div class="MuiListItemText-root"><span class="MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock">'+userslist[i]+'</span></div><span class="MuiTouchRipple-root"></span></div>';
    //     }
    // }
    // setTimeout(() => {  console.log("World!"); }, 5000);
    // console.log("data", data);
    // console.log("data", data.split('\n'));
    return userslist;
}

// Calling that async function

export function msgsend(sender, receiver, msg){
    var axios = require('axios');

    var config = {
     method: 'GET',
    url: 'http://localhost:8080/api/message?sender='+sender+'&receiver='+receiver+'&type=send&msg='+msg,
    mode: 'no-cors',
     headers: {
        //  "Accept": 'application/json',
        'Content-Type': 'application/json',
    //  'Access-Control-Allow-Origin': 'localhost', 
        }
    };
    axios(config)
    .then(function (response) {
        // resp = JSON.stringify(response.data);
    console.log( JSON.stringify(response.data));
    })
    .catch(function (error) {
     console.log(error);
    });

}

function chatId(){
    var msg = document.getElementById("msg_box");
    var chatBox = document.getElementById("message");
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log(msg);
    console.log(msg.value);
    var receiver = document.getElementById("user").value;
    var sender = "Summer";
    msgsend(sender, receiver,  msg.value);
    msgFetch(sender, receiver);

    // chatBox.innerHTML= "";
    // chatBox.innerHTML += '<ListItem key="5"><Grid container><Grid item xs={12}><ListItemText align="left" primary="'+ msg.value +'"></ListItemText></Grid><Grid item xs={12}><ListItemText align="left" secondary=""></ListItemText></Grid></Grid></ListItem>';
    // chatBox.innerHTML += '<li class="MuiListItem-root MuiListItem-gutters"><div class="MuiGrid-root MuiGrid-container"><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12"><div class="MuiListItemText-root" align="right"><span class="MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock">'+ msg.value +'</span></div></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12"><div class="MuiListItemText-root" align="right" secondary=""><p class="MuiTypography-root MuiListItemText-secondary MuiTypography-body2 MuiTypography-colorTextSecondary MuiTypography-displayBlock">'+ time +'</p></div></div></div></li>';
    msg.value = "";
}
const handleKeypress = e => {
    //it triggers by pressing the enter key
  if (e.keyCode === 13) {  
    this.btn.click();
    //chatId();
  }
};

const Conversations = () => {
    const classes = useStyles();
    msgFetch("Summer", "xyz");
    // setTimeout(() => {  console.log("return",userList("Summer")); }, 5000);
    return (
      <div>

        <Grid container>
            <Grid item xs={12} >
                <Typography variant="h5" className="header-message">Chats</Typography>
            </Grid>
        </Grid>
        <Grid container component={Paper} className={classes.chatSection}>
            <Grid item xs={3} className={classes.borderRight500}>

                <List id="userlist">
                    <ListItem button key="Person 1" onClick={() =>selectUser("user1")}>
                        <ListItemIcon>
                            <Avatar alt="Person1" src="https://material-ui.com/static/images/avatar/1.jpg" />
                        </ListItemIcon>
                        <ListItemText primary="user1"></ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem button key="Person2" onClick={() => selectUser("xyz")}>
                        <ListItemIcon>
                            {/* <StyledBadge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}variant="dot"> */}
                            <Avatar alt="Person 2" src="https://material-ui.com/static/images/avatar/3.jpg" />
                        </ListItemIcon>
                        <ListItemText primary="xyz"></ListItemText>
                        <ListItemText secondary="online" align="right"></ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem button key="Person3" onClick={() => selectUser("zyx")}>
                        <ListItemIcon>
                            {/* <StyledBadge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}variant="dot"> */}
                            <Avatar alt="Person 3" src="https://material-ui.com/static/images/avatar/3.jpg" />
                        </ListItemIcon>
                        <ListItemText primary="zyx"></ListItemText>
                    </ListItem>
                    <Divider />
                    <input type="hidden" id="user"></input>
                </List>
                <StartConversation />
            </Grid>
            <Grid item xs={9}>
                <List className={classes.messageArea}>
                    
                    <div id ='message' ></div>
                    
                </List>
                <Divider />
                <Grid container style={{padding: '10px'}}>
                    <Grid item xs={11}>
                        <TextField id="msg_box" label="Type Something" fullWidth />
                    </Grid>
                    <Grid xs={1} align="right">
                        <Fab color="primary" aria-label="add" onClick ={chatId} onKeyPress={handleKeypress} >Send</Fab>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
      </div>
  );
  
}

export default Conversations;