import MovieDetails from "../../components/MovieDetails/MovieDetails";

interface MovieDetailsPageProps {
    params: {
        id: string
    }
}

const getMoviesDetails = async (id: string) => {
    const apiKey = process.env.API_KEY;
    const movieDetails = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
    const movieDetailsJSON = await movieDetails.json();
    return movieDetailsJSON
}

const MovieDetailsPage = async ({ params }: MovieDetailsPageProps) => {
    const { id } = params
    const movieDetails = await getMoviesDetails(id)

    return (
        <div>
            <MovieDetails
                posterPath={movieDetails.poster_path}
                title={movieDetails.title}
                description={movieDetails.overview}
                releaseDate={movieDetails.release_date}
                rating={movieDetails.vote_average} />
        </div>
    );
}

export default MovieDetailsPage