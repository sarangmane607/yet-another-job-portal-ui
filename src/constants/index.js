export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
export const REACT_URI = process.env.REACT_APP_REACT_URI;

export const ACCESS_TOKEN = 'accessToken';
export const OAUTH2_REDIRECT_URI = REACT_URI + '/oauth2/redirect';

export const GOOGLE_AUTH_URL = API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const FACEBOOK_AUTH_URL = API_BASE_URL + '/oauth2/authorize/facebook?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const GITHUB_AUTH_URL = API_BASE_URL + '/oauth2/authorize/github?redirect_uri=' + OAUTH2_REDIRECT_URI;
