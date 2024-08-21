import { useCallback, useEffect, useState } from 'react';
import { STATUS } from '../utils/types';

export const useAsync = (asyncFunction, shouldRun) => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(STATUS.IDLE);

  const run = useCallback(() => {
    setResult(null);
    setError(null);
    setStatus(STATUS.PENDING);

    return asyncFunction()
      .then((response) => {
        setResult(response);
        setStatus(STATUS.SUCCESS);
      })
      .catch((error) => {
        setError(error);
        setStatus(STATUS.ERROR);
      });
  }, [asyncFunction]);

  useEffect(() => {
    if (shouldRun) run();
  }, [run, shouldRun]);

  return [run, result, error, status];
};
