import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ColorPalette, createGlobalStyle } from '@freenow/wave/experimental';
import './index.css';
import App from './App.tsx';

// Loads the CSS variables the experimental components are styled with.
// Components from '@freenow/wave' need ModernColors or ClassicColors from '@freenow/wave' instead.
const WaveColors = createGlobalStyle({
    accent: ColorPalette.red['50'],
    onAccent: ColorPalette.neutral['100'],
    accentDark: ColorPalette.red['60']
});

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <WaveColors />
        <App />
    </StrictMode>
);
