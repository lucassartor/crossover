import {
    Card, CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    List,
    ListItem,
    ListItemText,
    ListSubheader,
    Typography
} from "@mui/material";
import {FavoriteRounded} from "@mui/icons-material";
import React, {useState} from "react";

const FavoritesPage = (props) => {
    const [isFavoriteClicked, setIsFavoriteClicked] = useState(true);

    return (
        <Card sx={{backgroundColor: '#252525', color: '#fff'}}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Quadras Favoritas
                </Typography>
                <Typography variant="body2">
                    {props.favorites.size > 0
                        ? <List disablePadding sx={{border: 1, borderColor: '#1C1E1F'}}>
                            {Array.from(props.favorites.values()).map(favorite => (
                                <ListItem key={favorite.id}>
                                    <ListItemText>
                                        {favorite.name}
                                    </ListItemText>
                                    {props.favorites.has(favorite.id)
                                        ? <FavoriteRounded className="clicado"
                                                           onClick={() => {
                                                               setIsFavoriteClicked(false)
                                                               props.favorites.delete(favorite.id)
                                                               props.setFavorites(props.favorites)
                                                           }}/>
                                        : <FavoriteRounded className="naoClicado"
                                                           onClick={() => {
                                                               setIsFavoriteClicked(true)
                                                               props.setFavorites(props.favorites.set(favorite.id, favorite))
                                                           }}/>
                                    }
                                </ListItem>
                            ))}
                        </List>
                        : <>Voce nao possui quadras favoritadas!</>
                    }

                </Typography>
            </CardContent>
        </Card>
    );
}

export default FavoritesPage;
