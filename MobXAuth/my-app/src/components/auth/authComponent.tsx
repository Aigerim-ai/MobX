import React, { useContext } from 'react';
import {observer} from "mobx-react-lite";
import { storeContext } from '../../context/storeContext';
import { Navigate} from 'react-router-dom';
import './authStyle.css';

const AuthView: React.FC = () => {
  const { authStore } = useContext( storeContext);
  const auth = authStore.isAuth();
  const [username, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');

  if(auth){
    return <Navigate to="/" />;
  }
  return (
    <><body>
      <div className="center-auth">
        <form method="post">
        <h1>Вход</h1>
          <div className="txt_field">
            <input  required  value={username} onChange={(e) => setUserName(e.target.value)}/>
              <span></span>
              <label>Логин:</label>
            </div>
          <div className="txt_field">
            <input type="password" required  value={password} onChange={(e) => setPassword(e.target.value)} />
              <span></span>
              <label>Пароль:</label>
            </div>
          <input type="submit" value="Login"  onClick={() => authStore.login({ username, password })}/>
          </form>
      </div>

    </body>
    </>
  );
};
const Auth = observer(AuthView);
export {Auth};

/*
<Container component="section" maxWidth="xs" style={{ paddingTop: '120px' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Paper>
            <Box component="form" noValidate sx={{ m: 3, backgroundColor: 'white' }}>
              <Box textAlign='center'>
                <Typography component="h1" variant="h5">
                  Вход
                </Typography>
              </Box>
              <TextField
                margin="normal"
                id="filled-email-input"
                fullWidth
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                type="email"
                variant="filled"
                value={username}
                onChange={(e) => setUserName(e.target.value)} />
              <TextField
                margin="normal"
                id="filled-password-input"
                required
                fullWidth
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="filled"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />

              <Box textAlign='center'>
                <Button
                  variant="contained"
                  onClick={() => authStore.login({ username, password })}
                  sx={{
                    mt: 3, mb: 2, width: '120px',
                    borderTopLeftRadius: '15px',
                    borderTopRightRadius: '15px',
                    borderBottomLeftRadius: '15px',
                    borderBottomRightRadius: '15px', color: 'white',
                    backgroundColor: '#2e004e',
                    textTransform: 'none'
                  }}
                >
                  Войти
                </Button>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Container></>
*/