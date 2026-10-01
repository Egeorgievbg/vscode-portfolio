import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import {
  V2Language,
  v2Copy,
} from '@/data/v2/copy';

type V2LanguageContextValue = {
  lang: V2Language;
  setLang: (lang: V2Language) => void;
  copy: typeof v2Copy.bg;
};

const V2LanguageContext = createContext<V2LanguageContextValue | null>(null);

export function V2LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLang] = useState<V2Language>('bg');

  useEffect(() => {
    const saved = window.localStorage.getItem('eg-v2-lang');
    if (saved === 'bg' || saved === 'en') {
      setLang(saved);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('eg-v2-lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      copy: v2Copy[lang],
    }),
    [lang],
  );

  return (
    <V2LanguageContext.Provider value={value}>
      {children}
    </V2LanguageContext.Provider>
  );
}

export function useV2Language() {
  const value = useContext(V2LanguageContext);
  if (!value) {
    throw new Error('useV2Language must be used inside V2LanguageProvider');
  }
  return value;
}
