import React, { useEffect, useState } from 'react'
import { CurrentUser } from './CurrentUser'
import { User } from './User'

const API_URL = 'https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results= 20';

export const UserPanel = () => {
    const [users, setUsers] = useState([]);
    const [current, setCurrent] = useState(null);

    useEffect(() => {
        (async function() {
            const res = await fetch(API_URL);
            const data = await res.json();

            data.results.map((obj, id) => obj.id = id)
            setUsers(data.results);
        })();
    }, [])

  return (
    <div>
        {current && <CurrentUser user={users[current - 1]}/>}
        {users.map((user) => <User key={user.id} user={user} setCurrent={setCurrent}/>)}
    </div>
  )
}
