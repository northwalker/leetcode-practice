/**
 * @param {number} millis
 */
async function sleep(millis) {
  return new Promise((resolve) => {
    const t = Date.now();
    setTimeout(() => {
      // console.log(Date.now() - t)
      resolve(Date.now() - t);
    }, millis);
  });
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
