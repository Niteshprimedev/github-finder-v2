import React, { useContext, useEffect, useState } from 'react'
import Spinner from '../layout/Spinner.jsx'
import UserItem from './UserItem.jsx'
import GithubContext from '../../context/github/GithubContext.jsx'

function UserResults() {
  const { users, loading, fetchUsers } = useContext(GithubContext);
  useEffect(() => {
    // fetchUsers();
  }, []);

  if (!loading) {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 bg-neutral pt-32 p-16'>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    )
  } else {
    return <Spinner />
  }
}

export default UserResults