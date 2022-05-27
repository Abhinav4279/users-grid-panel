import React, { useEffect, useState } from "react";
import { CurrentUser } from "./CurrentUser";
import { User } from "./User";
import Data from "../data";
import { Grid, Item } from "@mui/material";
import { Box } from "@mui/system";

const API_URL =
  "https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results= 20";

export const UserPanel = () => {
  const [users, setUsers] = useState([]);
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    (async function () {
      // const res = await fetch(API_URL);
      // const data = await res.json();
      const data = Data;

      data.results.map((obj, id) => (obj.id = id));
      setUsers(data.results);
    })();
  }, []);

  return (
    <Box sx={{pl: '10%', pr: '10%'}}>
      {current !== null && <CurrentUser user={users[current]} />}
      <Grid container spacing={2} justifyContent='center'>
        {users.map((user) => (
          <Grid item key={user.id} sm={6} md={4}>
            <User user={user} current={current} setCurrent={setCurrent} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
