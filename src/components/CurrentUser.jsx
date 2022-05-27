import { Avatar, Card, CardContent, Grid, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export const CurrentUser = (
  {
    user: {
      gender,
      nat,
      location,
      name: { title, first, last },
      picture: { large }
    },
  }
) => {

  const {number, name} = location.street
  const {city, state, country, postcode} = location
  const {offset, description} = location.timezone

  const address_fline = `${number} ${name}, ${city}, ${state}, ${country}, ${postcode}`
  const address_sline = `${offset} - ${description}`

  return (
      <Card sx={{ margin: '5rem auto 5rem', maxWidth: 'md', cursor: "pointer", boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)' }}>
        <CardContent>
        <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            <Avatar
              src={large}
              sx={{ width: '6rem', height: '6rem', m: '2rem', mr: '3rem'}}
            />
            <Box pl={{xs: 2, sm: 0}}>
              <Typography color='secondary.main' variant="body2" sx={{ lineHeight: 1, fontSize: 44, fontWeight: '700', mb: 2 }}>
                {title + " " + first + " " + last}
              </Typography>
              <Typography sx={{ fontSize: 18, mb: 1 }}>
                {address_fline}
              </Typography>
              <Typography sx={{ fontSize: 18 }}>
                {address_sline}
              </Typography>
            </Box>
          </Stack>
        </CardContent>
      </Card>
  )
}
