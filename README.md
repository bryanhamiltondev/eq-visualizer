# eq-visualizer

![License](https://img.shields.io/badge/license-MIT-3fb950?style=flat)
![Dependencies](https://img.shields.io/badge/dependencies-0-3fb950?style=flat)
![CSS](https://img.shields.io/badge/animation-pure%20CSS-3fb950?style=flat)
![Size](https://img.shields.io/badge/eq.js-~1%20KB-777BB4?style=flat)

**[Try it live](https://bryanhamiltondev.github.io/eq-visualizer/demo/)** - the hosted demo, bars dancing and all.

The 8-bar sensory equalizer from [The DJ Calendar](https://thedjcalendar.com),
extracted as a standalone, open-source widget. On the homepage it plays one
role: it waits hidden inside every artist card and fades in when you roll over
the photo - part of the full listening overlay, anchored along the bottom edge
of the card.

> **Hearing things?** The homepage hover preview - the one that actually
> *plays* music, with an EQ driven by the real audio frequencies via Web
> Audio - lives in its own repo:
> [dj-card-preview](https://github.com/bryanhamiltondev/dj-card-preview).
> This repo is the decorative, pure-CSS member of the family.

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
<span data-eq data-eq-color="#0A66C2" data-eq-speed="0.6"></span>
```

## The hover reveal (homepage pattern)

On the homepage, the equalizer waits until you earn it. Each artist card
holds it at `opacity: 0`, and on hover the whole reveal fades in together:
a 75% black overlay with the "you are now listening to" label and track,
plus the EQ as a full-width strip flush to the bottom edge of the photo.
The production geometry is exact: on a 280px card, eight bars at 31.5px
with a 4px gap span the full width, 40px tall:

```css
.card-image { position: relative; overflow: hidden; }

.card-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.card-eq {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.card-image:hover .card-overlay,
.card-image:hover .card-eq { opacity: 1; }
```

The demo renders this reveal with the CSS bars in the site's neon cyan,
gradient-faded to transparent at the bottom to match the canvas rendering.
(:focus is this repo's addition - keyboard visitors get the same reveal,
not just mouse users.)

On the live site the card EQ is canvas, driven by the real audio frequencies
via Web Audio - that half lives in
[dj-card-preview](https://github.com/bryanhamiltondev/dj-card-preview),
which ships the full card treatment: real photo, rank badge, audio preview,
and the frequency-driven bars.

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
as the hover reveal inside the homepage artist cards. Like everything
published under this account, it is a production-derived pattern: what ships
here is the idea, not the infrastructure.

## License

MIT
