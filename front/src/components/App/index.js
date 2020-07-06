/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';

import './styles.scss';

import Header from 'src/containers/Header';

import HomeMain from 'src/containers/Home/HomeMain';
import Footer from 'src/containers/Footer';
import NotFound from 'src/components/NotFound';
import HomeTeacher from 'src/containers/HomeTeacher';
import HomeStudent from 'src/containers/HomeStudent';
import Contact from 'src/components/Contact';

// == Composant
const App = ({ teacherLogged, studentLogged, loading, getCookie }) => {
  useEffect(() => {
    getCookie();
  }, []);
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/Contact">
          <Contact />
        </Route>
        {!loading && (
        <Route path="/" exact>
          <HomeMain />
          {/* {teacherLogged && <Redirect to="/teacher" />} */}
          {/* <Footer /> */}
          {/* {!loading && teacherLogged ? <Redirect to="/teacher" /> : <HomeMain />}
          {!loading && studentLogged ? <Redirect to="/student" /> : <HomeMain /> } */}
        </Route>
        )}
        {loading && <Route><div>Chargement</div></Route>}
        {teacherLogged && (
          <Route path="/teacher" exact>
            <HomeTeacher />
          </Route>
        )}
        {studentLogged && (
          <Route path="/student" exact>
            <HomeStudent />
          </Route>
        )}
        {!loading && (
        <Route>
          <NotFound />
        </Route>
        )}
      </Switch>
      <Footer />
    </div>
  );
};

App.propTypes = {
  teacherLogged: PropTypes.bool.isRequired,
  getCookie: PropTypes.func.isRequired,
  studentLogged: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

// == Export
export default App;
