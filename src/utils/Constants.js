export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + import.meta.env.VITE_TMDB_KEY,
  }
};

export const IMG_CON = 'https://image.tmdb.org/t/p/w500';

export const SupportedLanguages = [{
  identifier: 'en',
  name: 'English'
}, {
  identifier: 'es',
  name: 'Español'
}, {
  identifier: 'fr',
  name: 'Français'
}, {
  identifier: 'hi',
  name: 'हिन्दी'
}, {
  identifier: 'de',
  name: 'Deutsch'
}];

export const GROK_API_KEY = import.meta.env.VITE_GROK_API_KEY;