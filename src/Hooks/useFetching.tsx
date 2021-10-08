import React from 'react';

export const useFetching = (callback: () => Promise<void>): [() => void, boolean] => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const fetching = async () => {
    await callback();
    setIsLoading(false);
  };

  return [fetching, isLoading];
};
