import * as qs from 'querystring';

export const isomorphicQuery = query =>
  Object.keys(query).length === 0 && typeof window !== 'undefined'
    ? qs.parse(location.search.slice(1))
    : query;

export function cleanObject(object: object, valueKeeper?: any) {
  return Object.entries(object).reduce((ret, [key, value]) => {
    if (value === undefined || value === null) {
      if (typeof valueKeeper !== 'undefined') {
        ret[key] = valueKeeper;
      }
      return ret;
    }
    if (!Array.isArray(value) && typeof value === 'object') {
      ret[key] = cleanObject(value);
    } else {
      ret[key] = value;
    }
    return ret;
  }, {});
}

function openInNewTab(url: string) {
  const a = document.createElement('a');
  a.target = '_blank';
  a.href = url;
  a.click();
}
export const isServer = () => typeof window === 'undefined';
export const isClient = () => typeof window !== 'undefined';

export const getSlugFromPathname = (): string =>
  !isServer() ? window.location.pathname.split('/')[2] : '';
export const isProd = () => process.env.NODE_ENV === 'production';
