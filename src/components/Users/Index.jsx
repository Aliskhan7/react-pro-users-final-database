import React from 'react';
import { useSelector } from 'react-redux';
import User from './User';

function Index(props) {
  const users = useSelector((state) => state.users.items);

  return (
    <ul className="list-group">
      {users.map((user) => {
        return <User user={user} key={user.id} />;
      })}
    </ul>
  );
}

export default Index;
