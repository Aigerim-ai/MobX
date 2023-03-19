import React from 'react';
import { Box } from '@mui/material';
import {observer} from "mobx-react-lite";
import {  Container, Typography } from '@mui/material';
import homestore from "../../stores/homeStore"
import TextField from '@mui/material/TextField';
import {Paper} from '@mui/material';

const HomeView: React.FC = () => {
  function convertJson(obj: any){
      const temp = atob(obj);
      const temp2 = JSON.parse(temp);
      return (
         <Paper>
          <Box component="form" noValidate sx={{ m: 3, backgroundColor: 'white' }}>
              {Object.entries(temp2.Labels).map(([key, value], index) => (
                <><TextField
                  key={index}
                  margin="normal"
                  id="filled-email-input"
                  fullWidth
                  label={key}
                  name={key}
                  disabled
                  autoComplete={key}
                  autoFocus
                  type="email"
                  variant="filled"
                  value={value}
                /></>
              ))}
           </Box>
        </Paper>
      );
  }
  return (
    <Container component="main" maxWidth="xs" style={{backgroundColor: '#f8f2fb'}}>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        <div>
     {
      homestore.datas.map((item,  key) => {
        return ( 
            <div id ={item.CreateIndex.toString()} style={{display: 'flex', flexDirection: 'column'}}>
            <Box textAlign='center'>
                <Typography component="h1" variant="h5">
                {item.Key}
                </Typography>
            </Box>
                  {convertJson(item.Value)}
            </div>
        )
      })
      }
          </div>
        </Box>
    </Container>
  );
};
const Home = observer(HomeView);
export {Home};