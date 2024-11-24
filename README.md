# Assignment 1 - ReactJS app.

Name: Shuobin Wang

ID: W2010800

Email: 20108800@mail.wit.ie

## Overview.

This a ReactJS app use TMDB api to build a website shows movie and related person(like actor, writer, director) 's information. It add some new features base on the webappdev2 course's lab project.



### Features.

+ Playlist page
  - Add movies to playlist in upcoming movie pages.
+ Trending pages
  - View Trending movies for today or this week.
+ Pagination supported
  - Support home page, upcoming page, popular people page.
+ Grouped navigate labels in Site header
  - Use dashboard menu  to settle labels of different pages
+ New filter options 
  - Filter by language and rating range.
+ Sort page content 
  + Sort by : vote counts, release data, popularity.
  + Sort direction in ascending or descending.
+ Popular people pages
  + Show people's role, image and name within grid cards.
+ Person detail page
  + Include list of person images and other content.
  + Include image list of credit movies for the person, which click-able jump to movie details page.
+ Use query stored all endpoints data
+ Support responsive UI for mobile and desktop browser.

## Setup requirements.

To setup this app, you have to get a TMDB-api, create `.env`in `movies` folder.

Put this in your `.env`:

``` javascript
REACT_APP_TMDB_KEY=YOUR_TMDB_API_KEY
FAST_REFRESH=false
```

Then in the terminal, locate to the `movies`folder, enter:

```  shell
npm install 
npm start
```



## API endpoints.

###  Static endpoints:

+ Language type lists - configuration/languages

### Dynamic endpoints:

- Discover list of movies - discover/movie?page=${page}
- Popular people list -  person/popular?page=${page}
- Upcoming list of movies - movie/upcoming?page=${page}
- Trending list of movies for day or week - trending/movie/${timeWindow}
- Details of person - person/${id}
- Credits movies of person - person/${id}/movie_credits
- Images of person - /person/${id}/images

## Routing.

+ /movie/playlist - display a playlist page.
+ /people/:id -  detail view of a particular  person's information.
+ /movies/trending/:timeWindow - display trending movies for today or this week
+ /people -display list of popular people



## Independent learning (If relevant).

- Use MUI pagination component - [Pagination](https://mui.com/material-ui/react-pagination/)

- Use MUI Basic Menu component  - [Menu](https://mui.com/material-ui/react-menu/)

- Use MUI Range slider component - [Range slider](https://mui.com/material-ui/react-slider/#range-slider)

- Use MUI CardActionArea - [CardActionArea API](https://mui.com/material-ui/api/card-action-area/)

  