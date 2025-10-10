export const AsyncSeries = (promiseArray) => {
  return promiseArray.reduce((acc, cur) => {
    return acc.then((results) =>
      cur.then((res) => [...results, res])
    );
  }, Promise.resolve([]));
};