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

function chatId(){
    var msg = document.getElementById("kuchAur");
    var chatBox = document.getElementById("message");
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log(chatBox.innerHTML);
    // chatBox.innerHTML= "";
    chatBox.innerHTML += '<ListItem key="5"><Grid container><Grid item xs={12}><ListItemText align="left" primary="'+ msg.value +'"></ListItemText></Grid><Grid item xs={12}><ListItemText align="left" secondary=""></ListItemText></Grid></Grid></ListItem>';
    chatBox.innerHTML += '<li class="MuiListItem-root MuiListItem-gutters"><div class="MuiGrid-root MuiGrid-container"><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12"><div class="MuiListItemText-root" align="right"><span class="MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock">'+ msg.value +'</span></div></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12"><div class="MuiListItemText-root" align="right" secondary=""><p class="MuiTypography-root MuiListItemText-secondary MuiTypography-body2 MuiTypography-colorTextSecondary MuiTypography-displayBlock">'+ time +'</p></div></div></div></li>';
    msg.value = "";
}

const Conversations = () => {
  const classes = useStyles();

  return (
      <div>

        <Grid container>
            <Grid item xs={12} >
                <Typography variant="h5" className="header-message">Chats</Typography>
            </Grid>
        </Grid>
        <Grid container component={Paper} className={classes.chatSection}>
            <Grid item xs={3} className={classes.borderRight500}>
            
                {/* <List>
                    <ListItem button key="You" > <StartConversation />
                        <ListItemIcon>
                        <Avatar alt="You" src="https://material-ui.com/static/images/avatar/1.jpg" />
                        </ListItemIcon>
                        <ListItemText primary="You"></ListItemText>
                    </ListItem>
                </List> */}
                {/* <Divider />
                <Grid item xs={12} style={{padding: '10px'}}>
                    <TextField id="outlined-basic-search" label="Search" variant="outlined" fullWidth/>
                </Grid>
                <Divider /> */}
                <List>
                    <ListItem button key="Person 1">
                        <ListItemIcon>
                            <Avatar alt="Person1" src="https://material-ui.com/static/images/avatar/1.jpg" />
                        </ListItemIcon>
                        <ListItemText primary="Person 1"></ListItemText>
                        <ListItemText secondary="online" align="right"></ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem button key="Person2">
                        <ListItemIcon>
                            {/* <StyledBadge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}variant="dot"> */}
                            <Avatar alt="Person 2" src="https://material-ui.com/static/images/avatar/3.jpg" />
                        </ListItemIcon>
                        <ListItemText primary="Person 2"></ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem button key="Person 3">
                        <ListItemIcon>
                            <Avatar alt="Person3" src="https://material-ui.com/static/images/avatar/2.jpg" />
                        </ListItemIcon>
                        <ListItemText primary="Person 3"></ListItemText>
                    </ListItem>
                    <Divider />
                </List>
                <StartConversation />
            </Grid>
            <Grid item xs={9}>
                <List className={classes.messageArea}>
                    <ListItem key="1">
                        <Grid container>
                            <Grid item xs={12}>
                                <ListItemText align="right" primary="Hello, What's up?"></ListItemText>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText align="right" secondary="10:30"></ListItemText>
                            </Grid>
                        </Grid>
                    </ListItem>
                    <ListItem key="2">
                        <Grid container>
                            <Grid item xs={12}>
                                <ListItemText align="left" primary="Hey, I am Good! What about you?"></ListItemText>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText align="left" secondary="10:42"></ListItemText>
                            </Grid>
                        </Grid>
                    </ListItem>
                    <ListItem key="3">
                        <Grid container>
                            <Grid item xs={12}>
                                <ListItemText align="right" primary="Nice. I am good too, let's meet and discuss the topic soon!"></ListItemText>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText align="right" secondary="10:50"></ListItemText>
                            </Grid>
                        </Grid>
                    </ListItem>
                    <ListItem key="4">
                        <Grid container>
                            <Grid item xs={12}>
                                <ListItemText align="left" primary="yes sure, we'll discuss tomorrow morning."></ListItemText>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText align="left" secondary="11:02"></ListItemText>
                            </Grid>
                        </Grid>
                    </ListItem>
                    <div id ='message' ></div>
                    
                </List>
                <Divider />
                <Grid container style={{padding: '10px'}}>
                    <Grid item xs={11}>
                        <TextField id="kuchAur" label="Type Something" fullWidth />
                    </Grid>
                    <Grid xs={1} align="right">
                        <Fab color="primary" aria-label="add" onClick ={chatId} >Send</Fab>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
      </div>
  );
}

export default Conversations;