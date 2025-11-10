# Translation System Setup

This app uses `next-intl` for automatic internationalization. The system is configured to automatically translate content without manual changes for each new text.

## How It Works

### 1. Configuration
- **i18n/request.ts**: Handles locale detection from cookies
- **i18n/messages/[locale].json**: Translation files for each language (en, fr, es, tr)
- **next.config.ts**: Integrated next-intl plugin
- **app/layout.tsx**: Wraps app with NextIntlClientProvider

### 2. Using Translations in Components

```tsx
import { useTranslations } from 'next-intl';

function MyComponent() {
  const t = useTranslations('namespace');
  
  return <h1>{t('key')}</h1>;
}
```

### 3. Adding New Translations

When you add new content, simply:

1. Add the key to **all** language files in `i18n/messages/`:

```json
// i18n/messages/en.json
{
  "mySection": {
    "newKey": "Hello World"
  }
}

// i18n/messages/fr.json
{
  "mySection": {
    "newKey": "Bonjour le monde"
  }
}
```

2. Use it in your component:

```tsx
const t = useTranslations('mySection');
<div>{t('newKey')}</div>
```

### 4. Changing Language

The language dropdown in the top bar automatically:
- Saves selected language to cookies
- Reloads the page with new locale
- All components automatically re-render with new translations

### 5. Supported Languages

- **English (en)** - Default
- **French (fr)**
- **Spanish (es)**
- **Turkish (tr)**

### 6. Translation Namespaces

Organized by section for better maintainability:

- `common`: Live, notifications, profile, settings, logout
- `sidebar`: Navigation items
- `dashboard`: Greeting, earnings, time periods
- `charts`: Success rate, payment issues, labels
- `paymentErrors`: Error types
- `rightPanel`: Stats and messages tab

## Adding a New Language

1. Create new message file: `i18n/messages/[code].json`
2. Copy structure from `en.json`
3. Translate all values
4. Add language to dropdown in `Topbar.tsx`:

```tsx
const languages = [
  // ...existing
  { code: "de", label: "Deutsch" },
];
```

## Benefits

✅ **Automatic**: Change language once, entire app updates
✅ **Type-safe**: TypeScript checks translation keys
✅ **Organized**: Namespaced translations by feature
✅ **Scalable**: Easy to add new languages and content
✅ **No manual updates**: Add translation keys, use them - that's it!
