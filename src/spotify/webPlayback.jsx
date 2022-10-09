import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PlayerX from '../components/player/PlayerX';

class WebPlayback extends Component {
  deviceSelectedInterval = null;
  statePollingInterval = null;
  webPlaybackInstance = null;

  state = {
    playerReady: false,
    playerSelected: false
  };

  waitForSpotify() {
    return new Promise(resolve => {
      if ('Spotify' in window) {
        resolve();
      } else {
        window.onSpotifyWebPlaybackSDKReady = () => {
          resolve();
        };
      }
    });
  }

  waitForDeviceToBeSelected() {
    return new Promise(resolve => {
      this.deviceSelectedInterval = setInterval(() => {
        if (this.webPlaybackInstance) {
          this.webPlaybackInstance.getCurrentState().then(state => {
            if (state !== null) {
              clearInterval(this.deviceSelectedInterval);
              resolve(state);
            }
          });
        }
      });
    });
  }


  async setupWebPlaybackEvents() {
    let { Player } = window.Spotify;

    this.webPlaybackInstance = new Player({
      name: this.props.playerName,
      volume: this.props.playerInitialVolume,
      getOAuthToken: async callback => {
        if (typeof this.props.onPlayerRequestAccessToken !== 'undefined') {
          let userAccessToken = await this.props.onPlayerRequestAccessToken();
          callback(userAccessToken);
        }
      }
    });


    if (this.props.playerAutoConnect) {
      this.webPlaybackInstance.connect();
    }
  }


  async componentWillMount() {

    // Wait for Spotify to load player
    await this.waitForSpotify();

    // Setup the instance and the callbacks
    await this.setupWebPlaybackEvents();

  }

  render() {
    return <Fragment>
      {this.props.children}
      <PlayerX/>
      </Fragment>;

  }
}


export default connect(
  null,
)(WebPlayback);