import React from 'react';

export const useFetching = (callback: () => void): [() => void, boolean] => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const fetching = () => {
    setIsLoading(true);
    callback();
    setIsLoading(false);
  };

  return [fetching, isLoading];
};
