import React from 'react';

export const useFetching = (callback: any): [() => Promise<void>, boolean] => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const fetching = async () => {
    setIsLoading(true);
    const response = await callback();
    setIsLoading(false);
    return response;
  };

  return [fetching, isLoading];
};
