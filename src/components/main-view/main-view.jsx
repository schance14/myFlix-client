import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
    const [movies, setMovies] = useState([
            {
            id: 1,
            Title: "Lord of the Rings",
            Image: "https://m.media-amazon.com/images/I/81hz68cCnQL._AC_UF1000,1000_QL80_.jpg",
            Description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron. This movie is adapted from the novel of the same name and shows a different world where different types of creatures live.",
            Genre: {
                Name: "Fantasy",
                Description: "Fantasy fiction is a genre of fiction that involves elements that cannot exist within the real world. This fictional universe includes things like magic, mythology, or life from other worlds or universes"
            },
            Director: {
                Name:"Peter Jackson",
                Description:"Peter Jackson is a New Zealand film director, producer, actor, and screenwriter, known for his Lord of the Rings film trilogy, adapted from the novel by J. R. R. Tolkien. He is also known for his 2005 remake of King Kong and as the producer of District 9.",
                Birth: "October 31, 1961"
            },
        },

        {
            id: 2,
            Title: "Team America: World Police",
            Image: "https://m.media-amazon.com/images/I/512Ej2EkUnL._AC_UF894,1000_QL80_.jpg",
            Description: "Popular Broadway actor Gary Johnston is recruited by the elite counter-terrorism organization Team America: World Police. As the world begins to crumble around him, he must battle with terrorists, celebrities and falling in love.",
            Genre: {
                Name: "Comedy",
                Description: "Comedies are light-hearted dramas, crafted to amuse, entertain, and provoke enjoyment"
            },
            Director: {
                Name:"Trey Parker",
                Description:"American screenwriter, actor, and producer, best known as the cocreator, with Matt Stone, of the subversive animated comedy series South Park",
                Birth: "October 19, 1969"
            },
        },

        {
            id: 3,
            Title: "Mean Girls",
            Image: "https://m.media-amazon.com/images/I/81Wubp+BoYL._AC_UF894,1000_QL80_.jpg",
            Description: "The plot centers on naïve teenage girl Cady Heron navigating her way through the social hierarchy of a modern American high school after years of her parents homeschooling her while conducting research in Africa.",
            Genre: {
                Name: "Comedy",
                Description: "Comedies are light-hearted dramas, crafted to amuse, entertain, and provoke enjoyment."
            },

            Director: {
                Name:"Mark Waters",
                Description: "Mark Stephen Waters is an American film director and producer. Waters is perhaps best known for directing Just Like Heaven, Freaky Friday, and Mean Girls, and producing 500 Days of Summer.",
                Birth: "June 30th, 1964"
            },
    },
]);

    const [selectedMovie, setSelectedMovie] = useState(null);

    if (selectedMovie) {
        return (
            <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
        );
    }

    if (movies.length === 0) {
        return <div>The list is empty!</div>;
    }

    return (
        <div>
            {movies.map((movie)=> (
                <MovieCard
                key={movie.id}
                movieData={movie}
                onMovieClick={(newSelectedMovie) => {
                setSelectedMovie(newSelectedMovie);
                }}
                />
            ))}
        </div>
    );
};