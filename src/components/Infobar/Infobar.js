import {
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    List,
    ListItem, ListItemText,
    ListSubheader,
    Typography
} from "@mui/material";
import {ArrowBack} from "@mui/icons-material";
import Button from "@mui/material/Button";
import React, {useEffect} from "react";


const Infobar = (props) => {
    return (
        <Card sx={{ maxWidth: 400, maxHeight: 720, backgroundColor: '#252525', color: '#fff'}}>
            <CardHeader action={
                <ArrowBack onClick={() => props.setIsInfoBarActive(false)}/>
            }/>
            <CardMedia
                component="img"
                height="200"
                image="https://polyesportiva.com.br/storage/app/uploads/1jlAC5ncmPQ7h3ITnQTxXps0tHyjCKx5us64Yt8V.jpeg"
                alt="quadra"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.parkInfo.name}
                </Typography>
                <Typography variant="body2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut pulvinar nisl, a eleifend magna. Nunc maximus iaculis cursus. In hac habitasse platea dictumst. Aenean consectetur felis eget vehicula auctor. Pellentesque vestibulum dolor ac libero bibendum, a accumsan nulla maximus. Vivamus nisl elit, efficitur eget rutrum nec, ultricies sit amet leo. Donec quis nulla et neque porttitor elementum eu a est. Nullam vel magna tortor.

                    {props.activeMatches.size > 0 && props.activeMatches.has(props.parkInfo.id) ?
                        <List disablePadding sx={{border: 1, borderColor: '#1C1E1F'}}>
                            <ListSubheader sx={{backgroundColor: '#1C1E1F', color: '#fff'}}>Proximas partidas:</ListSubheader>
                            {props.activeMatches.get(props.parkInfo.id).map(match => (
                                    <ListItem key={match.id}>
                                        <ListItemText >
                                            Partida de {match.esporte}
                                        </ListItemText>
                                        <ListItemText primary={`${match.data.$D}/${match.data.$M}`}/>
                                        <ListItemText primary={match.intensidade}/>
                                        <ListItemText primary={match.localizacao}/>
                                    </ListItem>
                            ))}
                        </List>
                        : <></>
                    }
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    variant='contained'
                    size='large'
                    style={{backgroundColor:'#E8FC0F', color:'#000'}}
                    onClick={() => props.setMatches(true)}
                >Criar partida</Button>
            </CardActions>
        </Card>
    );
}

export default Infobar;
