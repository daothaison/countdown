import React from 'react';
import Countdown from './Countdown';

function App() {
  return (
    <Countdown
      timeTillDate="06 11 2019, 10:03 am"
      timeFormat="MM DD YYYY, h:mm a"
    />
  );
}

export default App;
