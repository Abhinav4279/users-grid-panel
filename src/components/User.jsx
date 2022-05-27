import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

export const User = ({
  setCurrent,
  current,
  user: {
    id,
    gender,
    nat,
    email,
    name: { title, first, last },
  },
}) => {
  let selected = id === current;

  return (
    <CardActionArea sx={{ transition: "0.1" }} onClick={() => setCurrent(id)}>
      <Card
        sx={{
          minWidth: 200,
          cursor: "pointer",
          boxShadow: "0px 2px 7px rgba(0, 0, 0, 0.2)",
        }}
      >
        <CardContent
          sx={{
            bgcolor: selected ? "primary.main" : "primary.light",
            transition: "0.1s",
          }}
        >
          <Typography
            sx={{ fontSize: 14 }}
            color={selected ? "text.select" : "text.secondary"}
            gutterBottom
          >
            {gender} ⸱ {nat}
          </Typography>
          <Typography
            color={selected ? "text.select" : "text.primary"}
            variant="h5"
            component="div"
            sx={{ mb: 1, fontWeight: "700" }}
          >
            {title + " " + first + " " + last}
          </Typography>
          <Typography
            color={selected ? "secondary.light" : "secondary.main"}
            variant="body2"
          >
            {email}
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};
