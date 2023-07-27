// export const tmdbImageSrc = (path) => {
//   return `https://image.tmdb.org/t/p/w440_and_h660_face${path}`
// }
export const tmdbImageSrc = (path) => {
  return `https://image.tmdb.org/t/p/w500${path}`
}
export const tmdbImageSrcW342 = (path) => {
  return `https://image.tmdb.org/t/p/w342${path}`
}
export const tmdbImageSrcW185 = (path) => {
  return `https://image.tmdb.org/t/p/w185${path}`
}
export const tmdbImageSrcW154 = (path) => {
  return `https://image.tmdb.org/t/p/w154${path}`
}
export const tmdbImageSrcW92 = (path) => {
  return `https://image.tmdb.org/t/p/w92${path}`
}
export const tmdbMiniImageSrc = (path) => {
  if (path) {
    return `https://image.tmdb.org/t/p/w138_and_h175_face${path}`;
  } else {
    return "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg";
    // return "/img/noProfilePicPng.png";
    // return "";
  }
}
export const tmdbBackImageSrc = (path) => {
  return `https://image.tmdb.org/t/p/original${path}`
}
export const tmdbBackImageSrcW1280 = (path) => {
  return `https://image.tmdb.org/t/p/w1280${path}`
}

export const convertStringForQuery = (inputString) => {
  const lowerCaseString = inputString.toLowerCase();
  const convertedString = inputString.replace(/\s+/g, '-');
  return convertedString;
};

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const convertParamsToString = (params) => {
  if (!params) {
    return '';
  }

  const keys = Object.keys(params);
  return keys
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&');
};

export const getTypeMed = (str) => {
  if (str.includes('movie')) {
    return 'movies';
  } else {
    return 'tvs';
  }
};

// Функция для создания пути с параметрами
export const getPath = (params) => {
  const paramString = convertParamsToString(params);
  return paramString ? `?${paramString}` : '';
};

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export const getTypePath = (movie) => {
  if (movie.title || movie.original_title) {
    return 'movie'
  } else {
    return 'tv'
  }
};

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export const getYearMovie = (movie) => {
  if (movie.release_date) {
    const date = movie.release_date;
    const year = date.split("-")[0];
    return year;
  } else {
    return movie.first_air_date;
  }
};

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export const getSomeImages = (arr, amount) => {
  if (arr.lenght > 8) {
    return arr.splice(0, amount);
  }
  return arr;
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export const getSomePosters = (arr, amount) => {
  const filteredArray = arr.filter(obj => obj.iso_639_1 === "en");
  if (filteredArray.lenght > 10) {
    return filteredArray.splice(0, amount);
  }
  return filteredArray;
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


export const genresMovie = [
  {
    "id": 28,
    "name": "Action"
  },
  {
    "id": 12,
    "name": "Adventure"
  },
  {
    "id": 16,
    "name": "Animation"
  },
  {
    "id": 35,
    "name": "Comedy"
  },
  {
    "id": 80,
    "name": "Crime"
  },
  {
    "id": 99,
    "name": "Documentary"
  },
  {
    "id": 18,
    "name": "Drama"
  },
  {
    "id": 10751,
    "name": "Family"
  },
  {
    "id": 14,
    "name": "Fantasy"
  },
  {
    "id": 36,
    "name": "History"
  },
  {
    "id": 27,
    "name": "Horror"
  },
  {
    "id": 10402,
    "name": "Music"
  },
  {
    "id": 9648,
    "name": "Mystery"
  },
  {
    "id": 10749,
    "name": "Romance"
  },
  {
    "id": 878,
    "name": "Science Fiction"
  },
  {
    "id": 10770,
    "name": "TV Movie"
  },
  {
    "id": 53,
    "name": "Thriller"
  },
  {
    "id": 10752,
    "name": "War"
  },
  {
    "id": 37,
    "name": "Western"
  }
];


export const genresTv = [
  {
    "id": 10759,
    "name": "Action & Adventure"
  },
  {
    "id": 16,
    "name": "Animation"
  },
  {
    "id": 35,
    "name": "Comedy"
  },
  {
    "id": 80,
    "name": "Crime"
  },
  {
    "id": 99,
    "name": "Documentary"
  },
  {
    "id": 18,
    "name": "Drama"
  },
  {
    "id": 10751,
    "name": "Family"
  },
  {
    "id": 10762,
    "name": "Kids"
  },
  {
    "id": 9648,
    "name": "Mystery"
  },
  {
    "id": 10763,
    "name": "News"
  },
  {
    "id": 10764,
    "name": "Reality"
  },
  {
    "id": 10765,
    "name": "Sci-Fi & Fantasy"
  },
  {
    "id": 10766,
    "name": "Soap"
  },
  {
    "id": 10767,
    "name": "Talk"
  },
  {
    "id": 10768,
    "name": "War & Politics"
  },
  {
    "id": 37,
    "name": "Western"
  }
]


