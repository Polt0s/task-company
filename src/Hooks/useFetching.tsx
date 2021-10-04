import React from 'react';

export const useFetching = (callback: () => void): [() => void, boolean] => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const fetching = async () => {
    try {
      setIsLoading(true);
      callback();
    } catch (err) {
      throw new Error(`ошибка${err}`)
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading];
};
