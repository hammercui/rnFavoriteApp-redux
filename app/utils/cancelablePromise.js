/**
 * Created by cly on 17/2/14.
 */
export default function cancelablePromise(promise) {
  let hasCanceled_ = false;
  const wrappedPromise = new Promise((resolve, reject) => {
      promise.then((val) =>hasCanceled_ ? reject({isCanceled: true}) : resolve(val));
      promise.catch((error) => hasCanceled_ ? reject({isCanceled: true}) : reject(error));
    }
  );
  return {
    promise: wrappedPromise, cancel() {
      hasCanceled_ = true;
    },
  };
}