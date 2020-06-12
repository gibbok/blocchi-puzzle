import React from 'react';

export function Test(): JSX.Element {
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter + 1);
    }, 1000);

    return () => clearInterval(interval);
  });

  return <div>{counter}</div>;
}
