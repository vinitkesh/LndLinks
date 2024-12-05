import { animate, scroll, inView } from "motion";
import Footer from "./Footer";
import { useEffect, useRef } from "react";

const getIcon = (icontype) => {
  switch (icontype) {
    case "website":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40"
          height="40"
          viewBox="0 0 24 24"
        >
          <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"></path>
        </svg>
      );
    case "website2":
      return (
        // <img
        //   src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFM0lEQVR4nO2a2W9VVRTGf61BRaW0Di++iLTw5IDDg1ERp2g0mjhQVBK1ElBwqmjC4JM4NTxo9B+oGJ8cMCZiEHGWiAoiDikyqC8OlRrEgoJYe8xKvk1WNueec+695xZq+JKT9J717XXOOntYa3+7cBiFMV7XqEE7MAdYBnwK7ACS6Nohm3Fmq80hgTZgPvBFyksXvTYAD8jXiOMEYCkw6F7I/h5yv18ELnS/pwIvud9DUfs/gJ6RCqgJmAUMuBd4E7gZWKzffwG3uTaBF3A7sEf3rM0twCrH2w506VkNwfHAa+6BHwIXyHYx8A8wDEyP2sWBGDrFtTbTdM967yPHf7URvTMZ+N4NIfuqAWOATbI9ktI2LRDDo7q/ST4CrDd2ybYN6CgriLOAX+V4fYrjB2X7FjiyikCMu1k28+ExCfhcNnv2lDJ6IgTxLnBcZB+rMW32qyr4qBSI4Wo3L8yXxzjgfRdMzT3T5oZTH3BMCudO2b/M8JMVCGqbKK/EONYN261AK1WiKZrYYejcEzn7RLZ5dQQyT/a17t543Q9DL1zLq13NZrmJvRD4zjnbp+VyseO01BFIi5vcC4A3gL2unfXEQy7n+IUmN9kNRF/6CC2rqxSI/0q7df9ZYC5wJXAuMFG9F3ituneOOHcBTwMrXSCJS5artUzbs9FoCPOl0LK8VA0+AJor5JMuN8nLvAZUr52Y8txml2esAshEm+vCkOzSYON0p3jnAddoWPTqS67XQvG7e8mdumfL6tsqHBcB1wHnO05TxnOnunIms1dCTliTE/Ak8X4kH3lzJOBn8fIq4o/F684ihSr2hhxnneK9XmIgK8SbXvDZ1uupaBfhT+DoHGc94i4pMZDHxHsihzdWhalxJ6QR5shoXyYPy8WdUWIgVkEb7+UC3JXiWpo4AM/LeF8BR6F0uKTEQC51pVAeusV9Ls34mYxWkufhG3FPKzGQM8T7qgD38pRqYD/CHvvUKlaYk0sMxHwl8p2HMJ9/S0s2w8qofm9QCX/LUVrZXmsg5mtYvvPqqTF613/jpN3SgCw9Ute4/2UgzTUOraNKHFrmK1HlS61Da7RN9omVJjtSAIsuv1+Le3qJgZxZYLcZcJm4VncdgGWjMCH2phlny2g7tDy8Iu5Nh2KJ0u6KxljRiPGkuKZNHcyi8ZRKpA0i3FiwlF5RYiA2Eqop49dlkeaLZHVXFjrE+6nEQH4Rz1akLKwV7/4sUpu2kYm02CJbXdumXi9V5QVNVtug/eA4lba6tj2+VtvlwMkqTy5yvFyNq8eJ1Gniw0nau3hFvqxru4QNEzhiNGsLXmQe7e+VoJCYBIMkGdtEvROdgSSScmwVeUoBWol9thJrJTnoCslBz0hK2h353Ae8FclB98rWX43i2KVGgxLHtrqH7NUkX+ACqVegG1SJtEjnLaEESiQOLnTqzq1UgSadT8SS6dzopRslmbYCd+uZ/h2K5JjUIbbNidgmKFcSsTfWEcjGHBG7T/Yt9ZwOd7hjhffikrnBxwotrhTqL+MEeIocJUqYJs6liXqb6zjosfzlMdlpbP0qKEtBhxtmu7QYpB29LakikFCS9EV7oDucqL2lEWfxrU7PSrSmh6Q5zR2GdhYIZIY7DLUkF3TdNdHEbth/TDTpfCLMm0Tr/UzgYf3eE/VYHEhXdDw9U8J34PVXu8TWgzZVAKGcSfT3UPRF438YCOV/pX8YeLyW47WyAuqWoFxrWbJOPg5KAGmYoI1OrxJlWi02oMTXK27F/cShiJacEuYwcPgPknvUyL7T8dYAAAAASUVORK5CYII="
        //   alt="globe--v1"
        // />
        <img
          width="40"
          height="40"
          src="https://img.icons8.com/ios/50/globe--v1.png"
          alt="globe--v1"
        />
      );
    case "book":
      return (
        // <img
        //   src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFM0lEQVR4nO2a2W9VVRTGf61BRaW0Di++iLTw5IDDg1ERp2g0mjhQVBK1ElBwqmjC4JM4NTxo9B+oGJ8cMCZiEHGWiAoiDikyqC8OlRrEgoJYe8xKvk1WNueec+695xZq+JKT9J717XXOOntYa3+7cBiFMV7XqEE7MAdYBnwK7ACS6Nohm3Fmq80hgTZgPvBFyksXvTYAD8jXiOMEYCkw6F7I/h5yv18ELnS/pwIvud9DUfs/gJ6RCqgJmAUMuBd4E7gZWKzffwG3uTaBF3A7sEf3rM0twCrH2w506VkNwfHAa+6BHwIXyHYx8A8wDEyP2sWBGDrFtTbTdM967yPHf7URvTMZ+N4NIfuqAWOATbI9ktI2LRDDo7q/ST4CrDd2ybYN6CgriLOAX+V4fYrjB2X7FjiyikCMu1k28+ExCfhcNnv2lDJ6IgTxLnBcZB+rMW32qyr4qBSI4Wo3L8yXxzjgfRdMzT3T5oZTH3BMCudO2b/M8JMVCGqbKK/EONYN261AK1WiKZrYYejcEzn7RLZ5dQQyT/a17t543Q9DL1zLq13NZrmJvRD4zjnbp+VyseO01BFIi5vcC4A3gL2unfXEQy7n+IUmN9kNRF/6CC2rqxSI/0q7df9ZYC5wJXAuMFG9F3ituneOOHcBTwMrXSCJS5artUzbs9FoCPOl0LK8VA0+AJor5JMuN8nLvAZUr52Y8txml2esAshEm+vCkOzSYON0p3jnAddoWPTqS67XQvG7e8mdumfL6tsqHBcB1wHnO05TxnOnunIms1dCTliTE/Ak8X4kH3lzJOBn8fIq4o/F684ihSr2hhxnneK9XmIgK8SbXvDZ1uupaBfhT+DoHGc94i4pMZDHxHsihzdWhalxJ6QR5shoXyYPy8WdUWIgVkEb7+UC3JXiWpo4AM/LeF8BR6F0uKTEQC51pVAeusV9Ls34mYxWkufhG3FPKzGQM8T7qgD38pRqYD/CHvvUKlaYk0sMxHwl8p2HMJ9/S0s2w8qofm9QCX/LUVrZXmsg5mtYvvPqqTF613/jpN3SgCw9Ute4/2UgzTUOraNKHFrmK1HlS61Da7RN9omVJjtSAIsuv1+Le3qJgZxZYLcZcJm4VncdgGWjMCH2phlny2g7tDy8Iu5Nh2KJ0u6KxljRiPGkuKZNHcyi8ZRKpA0i3FiwlF5RYiA2Eqop49dlkeaLZHVXFjrE+6nEQH4Rz1akLKwV7/4sUpu2kYm02CJbXdumXi9V5QVNVtug/eA4lba6tj2+VtvlwMkqTy5yvFyNq8eJ1Gniw0nau3hFvqxru4QNEzhiNGsLXmQe7e+VoJCYBIMkGdtEvROdgSSScmwVeUoBWol9thJrJTnoCslBz0hK2h353Ae8FclB98rWX43i2KVGgxLHtrqH7NUkX+ACqVegG1SJtEjnLaEESiQOLnTqzq1UgSadT8SS6dzopRslmbYCd+uZ/h2K5JjUIbbNidgmKFcSsTfWEcjGHBG7T/Yt9ZwOd7hjhffikrnBxwotrhTqL+MEeIocJUqYJs6liXqb6zjosfzlMdlpbP0qKEtBhxtmu7QYpB29LakikFCS9EV7oDucqL2lEWfxrU7PSrSmh6Q5zR2GdhYIZIY7DLUkF3TdNdHEbth/TDTpfCLMm0Tr/UzgYf3eE/VYHEhXdDw9U8J34PVXu8TWgzZVAKGcSfT3UPRF438YCOV/pX8YeLyW47WyAuqWoFxrWbJOPg5KAGmYoI1OrxJlWi02oMTXK27F/cShiJacEuYwcPgPknvUyL7T8dYAAAAASUVORK5CYII="
        //   alt="globe--v1"
        // />
        <img
          width="40"
          height="40"
          src="https://img.icons8.com/ios-filled/50/book.png"
          alt="book"
        />
      );
    case "ct":
      return (
        // <img
        //   src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFM0lEQVR4nO2a2W9VVRTGf61BRaW0Di++iLTw5IDDg1ERp2g0mjhQVBK1ElBwqmjC4JM4NTxo9B+oGJ8cMCZiEHGWiAoiDikyqC8OlRrEgoJYe8xKvk1WNueec+695xZq+JKT9J717XXOOntYa3+7cBiFMV7XqEE7MAdYBnwK7ACS6Nohm3Fmq80hgTZgPvBFyksXvTYAD8jXiOMEYCkw6F7I/h5yv18ELnS/pwIvud9DUfs/gJ6RCqgJmAUMuBd4E7gZWKzffwG3uTaBF3A7sEf3rM0twCrH2w506VkNwfHAa+6BHwIXyHYx8A8wDEyP2sWBGDrFtTbTdM967yPHf7URvTMZ+N4NIfuqAWOATbI9ktI2LRDDo7q/ST4CrDd2ybYN6CgriLOAX+V4fYrjB2X7FjiyikCMu1k28+ExCfhcNnv2lDJ6IgTxLnBcZB+rMW32qyr4qBSI4Wo3L8yXxzjgfRdMzT3T5oZTH3BMCudO2b/M8JMVCGqbKK/EONYN261AK1WiKZrYYejcEzn7RLZ5dQQyT/a17t543Q9DL1zLq13NZrmJvRD4zjnbp+VyseO01BFIi5vcC4A3gL2unfXEQy7n+IUmN9kNRF/6CC2rqxSI/0q7df9ZYC5wJXAuMFG9F3ituneOOHcBTwMrXSCJS5artUzbs9FoCPOl0LK8VA0+AJor5JMuN8nLvAZUr52Y8txml2esAshEm+vCkOzSYON0p3jnAddoWPTqS67XQvG7e8mdumfL6tsqHBcB1wHnO05TxnOnunIms1dCTliTE/Ak8X4kH3lzJOBn8fIq4o/F684ihSr2hhxnneK9XmIgK8SbXvDZ1uupaBfhT+DoHGc94i4pMZDHxHsihzdWhalxJ6QR5shoXyYPy8WdUWIgVkEb7+UC3JXiWpo4AM/LeF8BR6F0uKTEQC51pVAeusV9Ls34mYxWkufhG3FPKzGQM8T7qgD38pRqYD/CHvvUKlaYk0sMxHwl8p2HMJ9/S0s2w8qofm9QCX/LUVrZXmsg5mtYvvPqqTF613/jpN3SgCw9Ute4/2UgzTUOraNKHFrmK1HlS61Da7RN9omVJjtSAIsuv1+Le3qJgZxZYLcZcJm4VncdgGWjMCH2phlny2g7tDy8Iu5Nh2KJ0u6KxljRiPGkuKZNHcyi8ZRKpA0i3FiwlF5RYiA2Eqop49dlkeaLZHVXFjrE+6nEQH4Rz1akLKwV7/4sUpu2kYm02CJbXdumXi9V5QVNVtug/eA4lba6tj2+VtvlwMkqTy5yvFyNq8eJ1Gniw0nau3hFvqxru4QNEzhiNGsLXmQe7e+VoJCYBIMkGdtEvROdgSSScmwVeUoBWol9thJrJTnoCslBz0hK2h353Ae8FclB98rWX43i2KVGgxLHtrqH7NUkX+ACqVegG1SJtEjnLaEESiQOLnTqzq1UgSadT8SS6dzopRslmbYCd+uZ/h2K5JjUIbbNidgmKFcSsTfWEcjGHBG7T/Yt9ZwOd7hjhffikrnBxwotrhTqL+MEeIocJUqYJs6liXqb6zjosfzlMdlpbP0qKEtBhxtmu7QYpB29LakikFCS9EV7oDucqL2lEWfxrU7PSrSmh6Q5zR2GdhYIZIY7DLUkF3TdNdHEbth/TDTpfCLMm0Tr/UzgYf3eE/VYHEhXdDw9U8J34PVXu8TWgzZVAKGcSfT3UPRF438YCOV/pX8YeLyW47WyAuqWoFxrWbJOPg5KAGmYoI1OrxJlWi02oMTXK27F/cShiJacEuYwcPgPknvUyL7T8dYAAAAASUVORK5CYII="
        //   alt="globe--v1"
        // />
        <img
          width="40"
          height="40"
          src="https://img.icons8.com/external-tulpahn-basic-outline-tulpahn/48/external-crow-halloween-tulpahn-basic-outline-tulpahn.png"
          alt="external-crow-halloween-tulpahn-basic-outline-tulpahn"
        />
      );

    case "insta":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40"
          height="40"
          viewBox="0 0 30 30"
        >
          <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
        </svg>
      );
    case "twitter":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40"
          height="40"
          viewBox="0 0 50 50"
        >
          <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
        </svg>
      );
    case "linkedin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40"
          height="40"
          viewBox="0 0 50 50"
        >
          <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
        </svg>
      );
    case "youtube":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40"
          height="40"
          viewBox="0 0 50 50"
        >
          <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"></path>
        </svg>
      );
    case "blog":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40"
          height="40"
          viewBox="0 0 50 50"
        >
          <path d="M 25 2 C 12.311335 2 2 12.311335 2 25 C 2 37.688665 12.311335 48 25 48 C 37.688665 48 48 37.688665 48 25 C 48 12.311335 37.688665 2 25 2 z M 25 4 C 36.607335 4 46 13.392665 46 25 C 46 36.607335 36.607335 46 25 46 C 13.392665 46 4 36.607335 4 25 C 4 13.392665 13.392665 4 25 4 z M 25 6 C 14.513273 6 6 14.513273 6 25 C 6 35.486727 14.513273 44 25 44 C 35.486727 44 44 35.486727 44 25 C 44 14.513273 35.486727 6 25 6 z M 25 8 C 28.972457 8 32.611711 9.3659473 35.501953 11.638672 C 34.996253 12.258468 34.699219 13.053218 34.699219 13.900391 C 34.699219 15.500391 35.599609 16.9 36.599609 18.5 C 37.399609 19.8 38.199219 21.500391 38.199219 23.900391 C 38.199219 25.600391 37.699219 27.700781 36.699219 30.300781 L 34.699219 36.900391 L 27.599609 15.699219 C 28.799609 15.599219 29.900391 15.5 29.900391 15.5 C 30.900391 15.4 30.800781 13.900391 29.800781 13.900391 L 29.699219 13.900391 C 29.699219 13.900391 26.500391 14.199219 24.400391 14.199219 C 22.500391 14.199219 19.199219 13.900391 19.199219 13.900391 L 19.099609 13.900391 C 18.099609 13.900391 18 15.5 19 15.5 C 19 15.5 19.999609 15.599219 21.099609 15.699219 L 24.199219 24.099609 L 19.900391 37 L 12.699219 15.599609 C 13.899219 15.499609 15 15.400391 15 15.400391 C 16 15.300391 15.900391 13.800781 14.900391 13.800781 L 14.800781 13.800781 C 14.800781 13.800781 13.489398 13.908495 12.044922 13.996094 C 15.160169 10.329869 19.798156 8 25 8 z M 37.087891 13.041016 C 38.448711 14.416493 39.563287 16.029037 40.392578 17.804688 C 40.371407 18.936367 40.18331 20.06754 39.900391 21.199219 C 39.500391 19.799219 39.000391 18.599609 38.400391 17.599609 L 38.199219 17.199219 C 37.399219 15.899219 36.800781 14.9 36.800781 14 C 36.800781 13.657445 36.90014 13.319256 37.087891 13.041016 z M 23.599609 16.099609 L 24.599609 16.099609 C 24.999609 16.199609 25.300781 16.199219 25.800781 16.199219 L 25.900391 16.400391 L 33 37.599609 L 33.697266 39.595703 C 33.315814 39.823057 32.925515 40.03486 32.525391 40.232422 L 27.199219 26 L 26.5 24.099609 L 26.300781 23.400391 L 23.599609 16.099609 z M 10.466797 16.199219 L 10.900391 16.199219 L 11 16.400391 L 18.199219 37.800781 L 18.800781 39.599609 L 18.457031 40.697266 C 18.182132 40.58291 17.919668 40.446492 17.652344 40.318359 L 9.5175781 17.994141 C 9.7979121 17.37391 10.116921 16.776828 10.466797 16.199219 z M 41.585938 21.294922 C 41.850288 22.488424 42 23.72552 42 25 C 42 30.25918 39.623202 34.947175 35.886719 38.0625 L 40.599609 24.400391 C 41.036946 23.287576 41.352417 22.261425 41.585938 21.294922 z M 8.3671875 21.472656 L 14.580078 38.423828 C 10.579353 35.316928 8 30.471959 8 25 C 8 23.789693 8.1281354 22.610588 8.3671875 21.472656 z M 25 26.599609 L 30.341797 41.134766 C 28.661425 41.688806 26.868914 42 25 42 C 23.258628 42 21.58037 41.735639 20 41.251953 L 25 26.599609 z"></path>
        </svg>
      );
    case "none":
      return null;
    case "facebook":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40"
          height="40"
          viewBox="0 0 24 24"
        >
          <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"></path>
        </svg>
      );
    default:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40"
          height="40"
          viewBox="0 0 24 24"
        >
          <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"></path>
        </svg>
      );
  }
};

const Link = ({ text, link, icontype }) => {
  const linkRef = useRef(null);

  useEffect(() => {
    const element = linkRef.current;
    if (element) {
      // Initialize the animation observer
      inView(element, {
        threshold: 0.1,
        onEnter: () => animate(element, { opacity: 1, y: 0 }, { duration: 2 }),
        onExit: () => animate(element, { opacity: 0, y: 50 }, { duration: 2 }),
      });
    }
  }, []);

  return (
    <a
      href={link}
      ref={linkRef}
      className="link w-80 h-16 relative m-3 transition-all hover:-translate-y-1"
    >
      <div className="absolute bottom-2 left-2 w-full h-full bg-[#0C1618]"></div>
      <div className="absolute w-full h-full bg-[#D9D9D9] flex justify-center items-center transition-all">
        <div className="w-max h-max absolute left-3">{getIcon(icontype)}</div>
        <p className="text-lg font-light pl-3 w-full text-center">{text}</p>
      </div>
    </a>
  );
};

function App() {
  return (
    <div className=" app min-h-[110vh] flex justify-center item relative overflow-x-hidden bg-[#004643] ">
      <div className="w-[1px] h-full absolute top-0 right-3 bg-orange-200"></div>{" "}
      {/*This is a line*/}
      <div className="w-screen flex flex-col justify-center items-center relative overflow-clip mt-3">
        <div className="w-[1px] h-full absolute top-[400px] left-3 bg-orange-200"></div>{" "}
        {/*This is a line*/}
        <div className="absolute top-2 text-lg left-[2px] text-orange-200  ">
          <p className=" " style={{ writingMode: "vertical-rl" }}>
            The Literary and Deabting Club NITC
          </p>
        </div>
        <img
          src="/lnd_logo.svg"
          className="p-3 w-[155px] h-[155px] border border-orange-200 rounded-2xl flex items-center justify-center"
        ></img>
        <div className="flex flex-col items-center justify-center w-full my-9 pb-16 ">
          {data.map((item) => {
            return (
              <Link
                text={item.text}
                link={item.link}
                icontype={item.icontype}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

const data = [
  {
    text: "HONIT - Dr. Vrinda Varma",
    link: "https://www.youtube.com/watch?v=QO30PoFe4Mg&t=1099s",
    icontype: "none",
  },
  {
    text: "@donttellthewarden",
    link: "https://www.lndnitc.org",
    icontype: "insta",
  },
  {
    text: "@sahiti_nitc",
    link: "https://www.lndnitc.org",
    icontype: "insta",
  },
  {
    text: "@humansofnitc",
    link: "https://www.lndnitc.org",
    icontype: "insta",
  },
  {
    text: "Crowtalks",
    link: "https://nitcrowtalks.wordpress.com/",
    icontype: "ct",
  },
  {
    text: "The Bookclub Website",
    link: "https://bookclub.lndnitc.org/",
    icontype: "book",
  },
  {
    text: "lndnitc.org",
    link: "https://www.lndnitc.org",
    icontype: "website2",
  },
  {
    text: "YouTube",
    link: "https://www.youtube.com/@donttellthewarden",
    icontype: "youtube",
  },
  {
    text: "Facebook",
    link: "https://www.facebook.com/lndnitc/",
    icontype: "LanguageIcon",
  },
  {
    text: "LinkedIn",
    link: "https://www.linkedin.com/company/literary-debating-club-nitc/posts/?feedView=all",
    icontype: "linkedin",
  },
  {
    text: "Inductions",
    link: "https://inductions.lndnitc.org",
    icontype: "website2",
  },
];
