import React from 'react'

const playing = false;

const PlayPause = () => {
  return (
    <div>
        <div class="playpause">
            {
                playing?
                <div>play</div>
                :
                <div>pause</div>
            }
            
            
        </div>
    </div>
  )
}

export default PlayPause