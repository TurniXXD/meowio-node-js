import { useState } from 'react';
import Cookies from 'js-cookie';

export enum EnumCookies {
  Auth = 'auth',
}

export const useCookie = (
  keyName: EnumCookies,
  defaultValue?: any,
  options?: any
) => {
  const isSecureProtocol = window.location.protocol === 'https:';

  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = Cookies.get(keyName);
      if (value) {
        return JSON.parse(value);
      } else {
        Cookies.set(keyName, JSON.stringify(defaultValue), {
          ...options,
          // Prevent access by cross-site requests for Cross-Site Request Forgery (CSRF)  attacks protection
          sameSite: 'lax',
          // If served over HTTPS, cookie will be send only over secure connections
          secure: isSecureProtocol,
        });
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  });

  const setValue = (newValue: string | {}, options?: any) => {
    try {
      if (newValue === '') {
        Cookies.remove(keyName);
        return;
      }
      Cookies.set(keyName, JSON.stringify(newValue), {
        ...options,
        sameSite: 'lax',
        secure: isSecureProtocol,
      });
      setStoredValue(newValue);
    } catch (err) {
      console.error('Error setting cookie:', err);
    }
  };


  return [storedValue, setValue];
};

export const parseCookieExpirationSeconds = (expiration: number) => {
  const expirationSeconds = new Date(new Date().getTime() + expiration * 1000);
  return expirationSeconds;
};
