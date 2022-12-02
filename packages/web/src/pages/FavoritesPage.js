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
import {ArrowBack, FavoriteRounded} from "@mui/icons-material";
import Button from "@mui/material/Button";
import React from "react";

const FavoritesPage = (props) => {
    return (
        <Card sx={{backgroundColor: '#252525', color: '#fff'}}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Quadras Favoritas
                </Typography>
                <Typography variant="body2">
                    <List disablePadding sx={{border: 1, borderColor: '#1C1E1F'}}>
                        {props.favorites.map(favorite => (
                            <ListItem key={favorite.id}>
                                <ListItemText>
                                    {favorite.name}
                                </ListItemText>
                                <FavoriteRounded
                                    onClick={() => props.setFavorites(props.favorites.remove(favorite))}/>
                            </ListItem>
                        ))}
                    </List>
                </Typography>
            </CardContent>
        </Card>
    );
}

export default FavoritesPage;
