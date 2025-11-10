'use client';

import { useTransition } from 'react';
import { useLocale } from 'next-intl';

export function useChangeLocale() {
    const [isPending, startTransition] = useTransition();
    const currentLocale = useLocale();

    const changeLocale = (locale: string) => {
        startTransition(() => {
            document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000`;
            window.location.reload();
        });
    };

    return { changeLocale, isPending, currentLocale };
}
