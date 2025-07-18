export const USER_LOGO = "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";

export const NETFLIX = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-5e9f-7420-a5e4-86ff612f8e2a/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"


export const NOW_PLAYING = { 
    method: 'GET', 
    headers: 
    { 
        accept: 'application/json', 
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZjYyYTFlM2M4ZjNkYTJkNjdmYTcxZjc4NjM2ZGU4MiIsIm5iZiI6MTcwMzI5MDY3My43MDU5OTk5LCJzdWIiOiI2NTg2MjczMWZhZDhlOTVmMDk4ZDJmZjQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.s_3qPesr2ojIRfkxtIvqShHtb5i54kajj5oDuMWrDTc'
    
    } 
};

export const TMDB_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export const NETFLIX_BACKGROUND = "https://assets.nflxext.com/ffe/siteui/vlv3/8200f588-2e93-4c95-8eab-ebba17821657/web/US-en-20250616-TRIFECTA-perspective_f4dc670c-a46e-493c-87b4-4be1ccba5a25_small.jpg"

export const SUPPORTED_LANG = [{identifier:"en", name:"English"}, {identifier:"es", name:"Spanish"}, {identifier:"hi", name:"Hindi"}]

export const OPENAPI_KEY = import.meta.env.VITE_REACT_APP_OPENAPI_KEY
           console.log("ENV test:", import.meta.env)

console.log("Loaded OPENAPI_KEY:", OPENAPI_KEY);