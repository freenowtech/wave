export const enforceSchemeOnElement = (scheme: 'light-scheme' | 'dark-scheme', element: Element): void =>
    element.classList.add('wave', scheme);
