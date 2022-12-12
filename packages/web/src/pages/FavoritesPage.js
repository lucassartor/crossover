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
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

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
                        : <div className="flex flex-col items-center justify-center h-full m-10">
                            <img
                                className="mb-4"
                                src={require("../images/empty-favorite.png")}
                                style={{height: 200}}
                                alt="empty"
                            />
                            <h1 className="text-l font-bold text-white mb-2">
                                Você não tem nenhuma quadra favorita ainda...
                            </h1>
                            <p className="text-sm text-[#BDBDBD] mb-5">
                                Explore quadras e favorite as suas preferidas!
                            </p>
                            <Button
                                variant="contained"
                                size="large"
                                style={{backgroundColor: "#E8FC0F", color: "#000"}}
                                onClick={() => props.setActivePage("Mapa")}
                            >
                                Mapa
                            </Button>
                        </div>
                    }

                </Typography>
            </CardContent>
        </Card>
    );
}

export default FavoritesPage;
