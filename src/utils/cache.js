const CACHE_PREFIX = 'love-match:';
const DEFAULT_EXPIRY = 24 * 60 * 60 * 1000; // 24小时

export const cache = {
  set: (key, value, expiry = DEFAULT_EXPIRY) => {
    const item = {
      value,
      expiry: Date.now() + expiry,
    };
    localStorage.setItem(CACHE_PREFIX + key, JSON.stringify(item));
  },

  get: (key) => {
    const item = localStorage.getItem(CACHE_PREFIX + key);
    if (!item) return null;

    const { value, expiry } = JSON.parse(item);
    if (Date.now() > expiry) {
      localStorage.removeItem(CACHE_PREFIX + key);
      return null;
    }

    return value;
  },

  remove: (key) => {
    localStorage.removeItem(CACHE_PREFIX + key);
  },

  clear: () => {
    Object.keys(localStorage)
      .filter(key => key.startsWith(CACHE_PREFIX))
      .forEach(key => localStorage.removeItem(key));
  }
}; 