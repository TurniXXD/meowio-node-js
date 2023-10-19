import { TFunction } from 'i18next';

/**
 * Render multiple content from array of objects or simple values
 * @param {TFunction} t - instance of i18n
 * @param {string} translationKey - key of the object to be rendered
 * @param {{}} options - options to render content
 */
export const tArray = <T = string>(
  t: TFunction,
  translationKey: string,
  options = {}
): T[] => {
  const translated = t(translationKey, { ...options, returnObjects: true });
  if (Array.isArray(translated)) {
    return translated as T[];
  }
  return [];
};

/**
 * Resolve image source URL
 * @param {string} imageId - UUID of the image
 */
export const resolveImageUrl = (imageId: string) => {
  return `${process.env.REACT_APP_API_URL}/images/${imageId}.png`;
};

/**
 * Format Date type to string format exact DD/MM/YY (2 last digits of a year)
 * @param {Date} date - The date to be formatted
 */
export const formatDate = (date: Date) => {
  const newDate = new Date(date);

  const day = String(newDate.getDate()).padStart(2, '0');
  const month = String(newDate.getMonth() + 1).padStart(2, '0');
  const year = String(newDate.getFullYear()).slice(-2);

  const formattedDate = `${day}/${month}/${year}`;
  return formattedDate;
};

/**
 * Constants for jest tests
 * @remarks
 * Initial DB seed is required for this to work properly
 */
export const testConstants = {
  apiKey: 'af36f597-2455-42b2-96c6-c120ce3953a7',
  user: {
    username: 'not_that_smart@guy.dev',
    password: 'St4y_sad',
  },
  owner: {
    username: 'smart@guy.dev',
    password: 'B3H_appy',
  },
};
