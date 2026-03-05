export const TMDB_CONFIG = {
    apiKey: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    baseUrl: 'https://api.themoviedb.org/3',
    headers:{
        accept: 'application/json'
        ,
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }
} 

export const fetchPopularMovies = async ({query}:{query:string})  => {
    
    const endpoint = query ? `${TMDB_CONFIG.baseUrl}/search/movie?query=${encodeURIComponent(query)}` : `${TMDB_CONFIG.baseUrl}/discover/movie?sort_by=popularity.desc`;

    const response = await fetch(endpoint, {
        method:"GET",
        headers: TMDB_CONFIG.headers
    });
    
    if(!response.ok) throw new Error("Error fetching movies");
    
    const data = await response.json();
    
    return data;
}