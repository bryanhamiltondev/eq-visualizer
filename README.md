# eq-visualizer

![License](https://img.shields.io/badge/license-MIT-3fb950?style=flat)
![Dependencies](https://img.shields.io/badge/dependencies-0-3fb950?style=flat)
![CSS](https://img.shields.io/badge/animation-pure%20CSS-3fb950?style=flat)
![Size](https://img.shields.io/badge/eq.js-~1%20KB-777BB4?style=flat)

**[Try it live](https://bryanhamiltondev.github.io/eq-visualizer/demo/)** - the hosted demo, bars dancing and all.

The 8-bar sensory equalizer from [The DJ Calendar](https://thedjcalendar.com),
extracted as a standalone, open-source widget. It sits inline next to every
artist name on the site - a small, always-dancing signal that the page is
alive and the music is moving. On the homepage it plays a different role:
it waits hidden inside every artist card and fades in when you roll over
the photo.

## The opinion underneath it

An equalizer next to a DJ's name is a promise: this page is about sound.
Most sites express that with an autoplaying video or an animated hero and
call it sensory design. A meter that moves like audio - eight bars, each
with its own tempo and phase, never metronomic - says it in four pixels of
vertical space.

The motion is **pure CSS**: eight bars with desynchronized durations and
negative delays, so the loop never visibly repeats and there is no JavaScript
in the animation path at all.

## Quick start

**Option A - one line, auto-injected (uses the optional 1 KB `eq.js`):**

```html
<link rel="stylesheet" href="src/eq.css">
<script src="src/eq.js" defer></script>

<span data-eq></span>
```

**Option B - zero JavaScript, write the bars by hand:**

```html
<link rel="stylesheet" href="src/eq.css">

<span class="eq" role="img" aria-label="equalizer">
  <span class="eq__bar"></span><span class="eq__bar"></span><span class="eq__bar"></span><span class="eq__bar"></span><span class="eq__bar"></span><span class="eq__bar"></span><span class="eq__bar"></span><span class="eq__bar"></span>
</span>
```

## Knobs

Set per-instance with data attributes (Option A) or CSS custom properties (either option):

| Knob | data attribute | CSS variable | Default |
|---|---|---|---|
| Color | `data-eq-color` | `--eq-color` | `#3fb950` |
| Height | `data-eq-height` | `--eq-height` | `28px` |
| Bar width | `data-eq-width` | `--eq-width` | `5px` |
| Tempo | `data-eq-speed` | `--eq-speed` | `1.1s` |

```html
<span data-eq data-eq-color="#0A66C2" data-eq-height="48" data-eq-speed="0.6"></span>
```

## The hover reveal (homepage pattern)

On the homepage, the equalizer waits until you earn it. Each artist card
holds it at `opacity: 0` and fades it in over the photo on hover. The
reveal values below are the production ones - a 0.3s ease fade, and
`pointer-events: none` so the meter never intercepts the click that takes
you to the artist:

```css
.card-image { position: relative; overflow: hidden; }

.card-eq {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.card-image:hover .card-eq,
.card-image:focus .card-eq { opacity: 1; }
```

The demo renders this reveal with the CSS bars in the site's neon cyan.
(:focus is this repo's addition - keyboard visitors get the same reveal,
not just mouse users.)

## Accessibility

The bars are decorative and marked `aria-hidden` by the injector; if you
hand-write them, wrap them in `role="img"` with an `aria-label`. And because
the animation is plain CSS, one media query covers the most important
behavior: when a visitor's OS requests reduced motion, the bars stop dancing
and settle to a calm, static meter. No JavaScript required to be polite.

## Requirements

- Any browser from the last decade. No build step, no framework, no DOM library.
- `src/eq.js` is optional and framework-agnostic; call `eqVisualizer.init(container)`
  after dynamically inserting markup (or just let it run at load).

## Origin

Extracted from The DJ Calendar (https://thedjcalendar.com), where it runs
inline on every artist page and as the hover reveal on homepage cards.
Like everything published under this account, it is a production-derived
pattern: what ships here is the idea, not the infrastructure.

## License

MIT
