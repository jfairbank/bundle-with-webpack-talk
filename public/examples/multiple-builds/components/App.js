import React from 'react';
import NameTag from '../containers/NameTag';

export default function App() {
  let environment = '';

  if (__DEV__) {
    environment = 'Development Mode';
  } else {
    environment = 'Production Mode';
  }

  return (
    <div>
      <h1>Mode: {environment}</h1>
      <NameTag />
    </div>
  );
}
