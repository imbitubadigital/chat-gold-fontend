import { StateDataProps } from '@/store/auth';

type TokensProps = {
  token: string;
  refreshToken: string;
};

export type TimerCarouselProps = {
  timer: Date;
};

export function settingDataStorage(dataStorage: StateDataProps) {
  const storage = localStorage.setItem(
    `${import.meta.env.VITE_KEY_STORAGE}:user`,
    JSON.stringify(dataStorage),
  );
  return storage;
}

export function getDataStorage(): StateDataProps | null {
  const storage = localStorage.getItem(
    `${import.meta.env.VITE_KEY_STORAGE}:user`,
  );

  if (storage) {
    return JSON.parse(storage);
  }
  return null;
}

export async function removeDataStorage() {
  const keysToRemove = [`${import.meta.env.VITE_KEY_STORAGE}:user`];
  keysToRemove.forEach((item) => localStorage.removeItem(item));
}

export function settingTokensStorage(tokens: TokensProps) {
  const storageTokens = localStorage.setItem(
    `${import.meta.env.VITE_KEY_STORAGE}:token`,
    JSON.stringify(tokens),
  );
  return storageTokens;
}

export function getTokensStorage(): TokensProps | null {
  const storageTokens = localStorage.getItem(
    `${import.meta.env.VITE_KEY_STORAGE}:token`,
  );

  if (storageTokens) {
    return JSON.parse(storageTokens);
  }
  return null;
}

export function removeTokensStorage() {
  const keysToRemove = [`${import.meta.env.VITE_KEY_STORAGE}:token`];
  keysToRemove.forEach((item) => localStorage.removeItem(item));
}
