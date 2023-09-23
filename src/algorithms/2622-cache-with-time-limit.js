const TimeLimitedCache = function () {
  this.cache = new Map();
  this.cacheTime = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  const exist = this.cache.has(key);
  this.cacheTime.set(key, Date.now() + duration);
  this.cache.set(key, value);
  return exist;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  if (!this.cache.has(key)) return -1;

  const now = Date.now();
  if (now < this.cacheTime.get(key)) return this.cache.get(key);

  this.cache.delete(key);
  this.cacheTime.delete(key);
  return -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  const now = Date.now();
  this.cacheTime.forEach((value, key) => {
    if (now > value) {
      this.cache.delete(key);
      this.cacheTime.delete(key);
    }
  });
  return this.cache.size;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
