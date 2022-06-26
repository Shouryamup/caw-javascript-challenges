import { episodes } from './app.js';
import {createEpisodeliElement} from './functions.js';

const episodesInUi = document.querySelector('.episodes');

const renderEpisodesToUi = () => {
    episodes.forEach((episode) => {
        episodesInUi.appendChild(createEpisodeliElement(episode));
    });
};

renderEpisodesToUi();