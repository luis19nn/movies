import React from "react";
import { IMG_API } from "../../api/auth";
import {
    Container,
    Header,
    Content,
    FavIcon,
    Image,
    Date,
    Name,
    Middle,
    Stars,
    StarIcon,
    Genre,
    Price,
    Button,
} from "./styles";

const MovieItem = ({ movie, genre }) => {
    return (
        <>
            <Container>
                <Header>
                    <FavIcon />
                    <Image>
                        <img
                            src={IMG_API + movie.poster_path}
                            alt="Movie poster"
                        />
                    </Image>
                    <Date>{movie.release_date}</Date>
                </Header>

                <Content>
                    <Name>{movie.title}</Name>
                    <Middle>
                        <Stars>
                            <StarIcon />
                            {movie.vote_average}
                        </Stars>
                        <Genre>{genre}</Genre>
                    </Middle>
                    <Price>R$79,99</Price>
                </Content>

                <Button>
                    <p>Adicionar</p>
                </Button>
            </Container>
        </>
    );
};

export default MovieItem;
