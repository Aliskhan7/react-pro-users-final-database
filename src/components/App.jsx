import Users from './Users/Index';
import Alboms from './Alboms/Index';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { loadUsers } from '../redux/action';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
  }, []);
  return (
    <Route path="/:id?">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Users />
          </div>
          <div className="col">
            <Alboms />
          </div>
        </div>
      </div>
    </Route>
  );
}

export default App;
