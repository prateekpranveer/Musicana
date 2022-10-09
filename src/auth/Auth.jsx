export const authEnd = "http://accounts.spotify.com/authorize";
const redirect_uri = "http://localhost:3000/";
const clientId ="d37b3888dfd742fc9a2e988407f9c126";
const scopes = [
  'streaming',
  'app-remote-control',
    "user-read-email",
    "user-read-private",
    "user-library-read",
    "user-library-modify",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
]

export const loginURL =
`${authEnd}?client_id=${clientId}&redirect_uri=${redirect_uri}&scopes=${scopes.join("%20")}&response_type=token&show_dialog=true`

export const getToken = ()  => {
  let hashParams = {};
  let e,
    r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
  while ((e = r.exec(q))) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams.access_token;
}