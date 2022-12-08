import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import { ArrowBack, FavoriteRounded } from "@mui/icons-material";
import Button from "@mui/material/Button";
import React, { useEffect } from "react";
import "./styles.scss";

const Infobar = (props) => {
  return (
    <Card sx={{ maxWidth: 400, backgroundColor: "#252525", color: "#fff" }}>
      <CardMedia
        component="img"
        height="200"
        image={`${props.parkInfo.image}`}
        alt="quadra"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.parkInfo.name}
        </Typography>
        <Typography variant="body2">
          {props.parkInfo.description ? (
            <>
              {props.parkInfo.description} <br />
              <br />
            </>
          ) : (
            <></>
          )}
          {props.parkInfo.telefone ? (
            <>
              Telefone: {props.parkInfo.telefone} <br />
            </>
          ) : (
            <></>
          )}
          {props.parkInfo.endereço ? (
            <>Endereco: {props.parkInfo.endereço}</>
          ) : (
            <></>
          )}
          {props.activeMatches.size > 0 &&
          props.activeMatches.has(props.parkInfo.id) ? (
            <List disablePadding>
              <ListSubheader sx={{ backgroundColor: "#1C1E1F", color: "#fff" }}>
                Proximas partidas:
              </ListSubheader>
              {props.activeMatches.get(props.parkInfo.id).map((match) => (
                <ListItem key={match.id}>
                  <ListItemText primary={match.esporte} />
                  <ListItemText primary={`${match.data.$D}/${match.data.$M}`} />
                  <ListItemText
                    primary={`${match.horario.$d.getHours()}:${match.horario.$d.getMinutes()}`}
                  />
                  <ListItemText primary={match.intensidade} />
                </ListItem>
              ))}
            </List>
          ) : (
            <></>
          )}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          size="large"
          style={{ backgroundColor: "#E8FC0F", color: "#000" }}
          onClick={() => props.setMatches(true)}
        >
          Criar partida
        </Button>
        <FavoriteRounded
          sx={{ paddingLeft: 20 }}
          onClick={() =>
            props.setFavorites([...props.favorites, props.parkInfo])
          }
        />
      </CardActions>
    </Card>
  );
};

export default Infobar;