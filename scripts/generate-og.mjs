/**
 * Generates public/og.png — the 1200x630 Open Graph / social-sharing card.
 *
 * The card is defined as an inline SVG (same palette as the site's dark
 * theme) and rasterized with @resvg/resvg-js using the static TTFs in
 * scripts/fonts/. Regenerate after editing:  npm run og
 */
import { writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Resvg } from '@resvg/resvg-js';

const here = path.dirname(fileURLToPath(import.meta.url));

// Palette — keep in sync with the dark theme in src/styles/global.css.
const BG = '#0C0E12';
const LINE = '#232833';
const TEXT = '#E9EDF3';
const MUTED = '#98A2B3';
const FAINT = '#7E8899';
const BUILD = '#5B9DFF';
const BREAK = '#FF5D5D';
const BOTH = '#A18CFF';

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="${BG}"/>
  <rect x="28.5" y="28.5" width="1143" height="573" fill="none" stroke="${LINE}"/>

  <text x="76" y="112" font-family="JetBrains Mono" font-size="22" letter-spacing="1.5" fill="${MUTED}">leo martinez iii · ai/llm security engineer</text>

  <text x="76" y="256" font-family="JetBrains Mono" font-weight="700" font-size="60" fill="${TEXT}">I <tspan fill="${BUILD}">build</tspan> AI agents.</text>
  <text x="76" y="336" font-family="JetBrains Mono" font-weight="700" font-size="60" fill="${TEXT}">I <tspan fill="${BREAK}">break</tspan> the ones that</text>
  <text x="76" y="416" font-family="JetBrains Mono" font-weight="700" font-size="60" fill="${TEXT}">can’t be trusted.</text>

  <rect x="76" y="456" width="60" height="4" fill="${BUILD}"/>
  <rect x="136" y="456" width="60" height="4" fill="${BREAK}"/>

  <text x="76" y="556" font-family="JetBrains Mono" font-size="20" letter-spacing="1" fill="${FAINT}">saic × scale ai · doe/nnsa llnl · dhs/cbp · cvs health · icaic 2026</text>

  <rect x="1044" y="506" width="10" height="48" rx="4" fill="${BUILD}"/>
  <rect x="1066" y="506" width="10" height="48" rx="4" fill="${BOTH}"/>
  <rect x="1088" y="506" width="10" height="48" rx="4" fill="${BREAK}"/>
</svg>
`;

const resvg = new Resvg(svg, {
  fitTo: { mode: 'width', value: 1200 },
  font: {
    fontFiles: [
      path.join(here, 'fonts', 'JetBrainsMono-Regular.ttf'),
      path.join(here, 'fonts', 'JetBrainsMono-Bold.ttf'),
    ],
    loadSystemFonts: false,
    defaultFontFamily: 'JetBrains Mono',
  },
});

const out = path.join(here, '..', 'public', 'og.png');
writeFileSync(out, resvg.render().asPng());
console.log(`wrote ${out}`);

// Apple touch icon: the III monogram on the dark ground, scaled up from the
// favicon. iOS rounds the corners itself, so this stays a plain square.
const iconSvg = `
<svg width="180" height="180" viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
  <rect width="180" height="180" fill="${BG}"/>
  <rect x="42" y="51" width="20" height="78" rx="7" fill="${BUILD}"/>
  <rect x="80" y="51" width="20" height="78" rx="7" fill="${BOTH}"/>
  <rect x="118" y="51" width="20" height="78" rx="7" fill="${BREAK}"/>
</svg>
`;

const iconResvg = new Resvg(iconSvg, { fitTo: { mode: 'width', value: 180 } });
const iconOut = path.join(here, '..', 'public', 'apple-touch-icon.png');
writeFileSync(iconOut, iconResvg.render().asPng());
console.log(`wrote ${iconOut}`);
