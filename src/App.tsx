import React, { useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';
import SignIn from './pages/SignIn';
import UserPage from './pages/User';
import { useDispatch, useSelector } from 'react-redux';
import AuthApi from './services/api/auth.api';
import { setUser } from './store/ducks/user/actions';
import { selectIsAuth } from './store/ducks/user/selectors';

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuth = useSelector(selectIsAuth);

  const checkAuth = async () => {
    try {
      const user = await AuthApi.getMe();
      dispatch(setUser(user));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (isAuth) {
      history.push('/home');
    }
  }, [isAuth]);

  useEffect(() => {
    checkAuth();
  }, []);

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
