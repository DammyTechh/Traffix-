# Traffix — landing page

React + Vite. No UI or animation library. The motion is CSS keyframes plus two
small rAF loops, so the JS bundle is essentially React itself.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
npm run preview
```

Vercel / Netlify: framework preset **Vite**, build `npm run build`, output `dist`.

## What's where

```
src/
  styles/tokens.css      every colour, size and spacing value
  styles/fonts.css       self-hosted Space Grotesk, IBM Plex Sans, IBM Plex Mono
  styles/global.css      reset, layout, labels, reveal
  hooks/
    useNavVisibility.js  pill nav: tuck on scroll, return on settle, tint swap
    useSectionSpy.js     active nav link
    useReveal.js         IntersectionObserver fade-up
  components/
    Nav / Hero / Sensing / Cycle / Stack / Operations / Safety / Closing / Footer
    SignalCycle.jsx      the live state machine (see below)
    FloatingRig.jsx      3D product float: tilt, parallax, sheen, contact shadow
    Icons.jsx            the icon set, audited at 18px
```

## SignalCycle

The centrepiece, in `src/components/SignalCycle.jsx`. It walks the documented
sequence: lane 1 green, lane 1 yellow, all red, lane 2 green, lane 2 yellow,
all red, repeat. At the top of each cycle it rolls new lane counts and
recomputes the green interval from them, which is what the real controller
does with the counts the Pi returns.

Three things are deliberate:

- **Green time** comes from `greenFor(count)`, clamped to 10 to 30 seconds.
  Change the clamp or the slope there and the demo follows.
- **The invariant holds by construction.** Each phase names one state per lane,
  so there is no code path that can put green on both. The page claims that in
  the safety section, so the demo had better not contradict it.
- **It runs at 3x** and says so on screen. The second values shown are the real
  computed ones; only the clock is compressed so a full cycle is watchable.

`prefers-reduced-motion` freezes it on the first phase and the badge reads
"Held".

## Palette

Sampled from the badge:

| token | value | from |
|---|---|---|
| `--navy-800` | `#082744` | the badge ring |
| `--bone-100` | `#F4F2E9` | the badge field |
| `--sig-red` / `--sig-amber` / `--sig-green` | `#CE4036` / `#DE9A28` / `#2F9655` | the signal states |

The red, amber and green are used only to mean red, amber and green. Nothing
decorative is tinted with them.

## Notes on the artwork

The supplied renders already carry clean alpha, so they are only cropped to
content and converted to WebP. Each `.fr` is sized by *width* with the height
following from `aspect-ratio`; re-export a render at a different crop and both
values need updating together.

## House rules carried over

- No em dashes in the copy.
- Counts are plain digits, never `01`-style.
- Every glyph was rendered at 18 / 22 / 40px and checked before shipping.
  Three were redrawn after that audit.
- The nav pill is close to opaque so it never reads as a smudge, and it
  re-tints to the band behind it.
- One safety warning, once, where it belongs.
- Everything respects `prefers-reduced-motion`.
- Partner logos sit on a plate and keep their own brand colours.
