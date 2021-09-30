import React from 'react';

export const useFetching = (callback: () => void) => {
  const [isLoading, setIsLoading] = React.useState(false);

  const fetching = async () => {
    try {
      setIsLoading(true);
      await callback();
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }
  return [fetching, isLoading];
};
