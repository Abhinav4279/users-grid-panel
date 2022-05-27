import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

export const User = ( {user: { gender, nat, email, name: {title, first, last} }} ) => {
    console.log(gender)
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {gender} ⸱ {nat}
        </Typography>
        <Typography variant="h5" component="div" sx={{mb: 1}}>
          {title + ' ' + first + ' ' + last}
        </Typography>
        <Typography variant="body2">
          {email}
        </Typography>
      </CardContent>
    </Card>
  )
}
