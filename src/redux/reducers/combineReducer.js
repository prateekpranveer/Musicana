import { combineReducers } from "redux";
import { artistDetailReducer } from "./artistDetailReducer";
import { artistReducer } from "./artistReducer";
import { deviceReducer } from "./deviceReducer";
import { musicanaReducer } from "./musicanaReducer";
import { navReducer } from "./navReducer";
import { playbackReducer } from "./playbackReducer";
import { playlistReducer } from "./playlistReducer";
import { queryReducer } from "./queryReducer";
import sessionReducer from "./sessionReducer";
import tokenReducer from "./token";
import { trackReducer } from "./trackReducer";
import userReducer from "./userReducer";

export default combineReducers({
    user: userReducer,
    token: tokenReducer,
    track: trackReducer,
    query: queryReducer,
    nav: navReducer,
    playlist: playlistReducer,
    artist: artistReducer,
    artistDetail:artistDetailReducer,
    playback: playbackReducer,
    sessionReducer,
    device: deviceReducer,
    musicana: musicanaReducer

});