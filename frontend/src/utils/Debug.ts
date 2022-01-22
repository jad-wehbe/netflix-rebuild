import {ResultType} from "api/requests"
import debug_movies from "./debug_movies";

const test_movie:ResultType = {
    release_date: "2022-01-01",
    title: "Harry Potter 20th Anniversary: Return to Hogwarts",
    adult: false,
    backdrop_path: "/g8dafKwLfaueQ5GK0qjKTkRCBAA.jpg",
    id: 899082,
    genre_ids: [99],
    original_language: "en",
    original_title: "Harry Potter 20th Anniversary: Return to Hogwarts",
    poster_path: "/jntLBq0MLR3hrwKaTQswxACRPMs.jpg",
    vote_average: 8.4,
    overview:
        "An enchanting making-of story told through all-new in-depth interviews and cast conversations, inviting fans on a magical first-person journey through one of the most beloved film franchises of all time.",
    runtime: 156,
}

const test_movies = debug_movies

export { test_movie, test_movies };