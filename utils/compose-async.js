export const composeAsync = (...fn) => {
  return (...args)=>{
    return fn?.reduce((p, f)=>{
       return p.then((res) => {
        const result = f(...[].concat(res));
        return result instanceof Promise ? result : Promise.resolve(result);
      });
    },Promise.resolve(args))
  }
}