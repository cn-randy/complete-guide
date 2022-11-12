export const getUid = function () {
  return `${Date.now()}${Math.random().toString().slice(2)}`;
};

export const initMiddleware = function (middleware) {
  return (req, res) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
};

export const arrayFromObject = function (targetObject) {
  return Object.values(targetObject).map((obj) => ({
    ...obj,
  }));
};

export const isEmpty = function (target) {
  if (typeof target === "object") {
    return !Object.keys(target).length;
  }

  return !target;
};
