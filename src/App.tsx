import React, { useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TwitterIcon from '@material-ui/icons/Twitter';
import Home from './pages/Home';
import Layout from './pages/Layout';
import SignIn from './pages/SignIn';
import UserPage from './pages/User';
import { fetchUserData } from './store/ducks/user/actions';
import { selectIsAuth, selectUserIsLoading, selectUserIsNever } from './store/ducks/user/selectors';
import { useHomeStyles } from './pages/theme';

function App() {
  const classes = useHomeStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuth = useSelector(selectIsAuth);
  const isLoading = useSelector(selectUserIsLoading);
  const isNever = useSelector(selectUserIsNever);
  const isReady = !isLoading && !isNever;

  useEffect(() => {
    if (!isAuth && isReady) {
      history.push('/signin');
    } else {
      history.push('/home');
    }
  }, [isAuth, isReady]);

  useEffect(() => {
    dispatch(fetchUserData());
  }, []);

  if (!isReady) {
    return (
      <div className={classes.centered}>
        <TwitterIcon color="primary" style={{ width: 80, height: 80 }} />
      </div>
    );
  }

  return (
    <div className="App">
      <Switch>
        <Route path="/signin" component={SignIn} exact />
        <Layout>
          <Route path="/home" component={Home} />
          <Route path="/user" component={UserPage} />
        </Layout>
      </Switch>
    </div>
  );
}

export default App;
