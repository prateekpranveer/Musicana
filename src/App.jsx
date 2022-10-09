import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from './pages/Home'
import { setToken } from './redux/actions/sessionActions';



import Login from './spotify/login';
import WebPlaybackReact from './spotify/webPlayback';

window.onSpotifyWebPlaybackSDKReady = () => {};


class App extends Component {
  state = {
    playerLoaded: false
  };

  componentDidMount() {
    const token = Login.getToken();
    if (!token) {
      Login.logInWithSpotify();
    } else {
      this.setState({ token: token });
      this.props.setToken(token);
    }
  }

  render() {
    let webPlaybackSdkProps = {
      playerName: 'Musicana',
      playerInitialVolume: 1.0,
      playerRefreshRateMs: 1000,
      playerAutoConnect: true,
      onPlayerRequestAccessToken: () => this.state.token,
      onPlayerLoading: () => {},
      onPlayerWaitingForDevice: () => {
        this.setState({ playerLoaded: true });
      },
      onPlayerError: e => {
        console.log(e);
      },
      onPlayerDeviceSelected: () => {
        this.setState({ playerLoaded: true });
      }
    };

    return (
      <div className="app">
        <WebPlaybackReact {...webPlaybackSdkProps}>
          <Home/>
            
        </WebPlaybackReact>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.sessionReducer.token
  };
};

const mapDispatchToProps = dispatch => ({
  setToken: token => dispatch(setToken(token)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);