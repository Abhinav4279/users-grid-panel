import React, { useEffect, useState } from 'react'
import { CurrentUser } from './CurrentUser'
import { User } from './User'

export const UserPanel = () => {
    const [users, setUsers] = useState();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        //TODO: fetch data
    });

  return (
    <div>
        {current && <CurrentUser user={users[current - 1]}/>}
        {users.map((user) => <User user={user} setCurrent={setCurrent}/>)}
    </div>
  )
}
