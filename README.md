# battlespace.dev — Impact Forge LLC

Source for the official website of **Impact Forge LLC**, an independent video game
developer and publisher, and its game **Battlespace**.

The site is a [Jekyll](https://jekyllrb.com/) static site served at
<https://battlespace.dev/>.

## Why this site exists

Besides being the studio's public site, it is the domain submitted for
**Epic Account Services brand review**. Epic requires the domain to be publicly
accessible and to carry the organisation name plus the name and an overview of the
product, and a manual reviewer checks it. Several pages exist specifically to
satisfy that review:

| Page | Purpose |
| --- | --- |
| `index.html` | Publisher identity, role (developer *and* publisher), product summary |
| `battlespace.html` | Product page proving Battlespace is a video game: genre, platform, engine, features, fact sheet, Epic Account Services disclosure |
| `about.html` | Studio and legal-entity details |
| `press.html` | Company and product fact sheet, approved boilerplate |
| `contact.html` | Real, reachable contact channels |
| `privacy-policy.html` | Controller identity, legal bases, EOS data flows, retention, transfers, rights |
| `terms-of-service.html`, `eula.html` | Player-facing terms |

## Editing content

Company and product facts live in `_config.yml` under `company:` and `game:`, and
are rendered throughout the site via Liquid. **Change them there, not page by page.**

```yaml
company:
  name: "Impact Forge LLC"
  jurisdiction: ""      # set to the US state of registration, e.g. "Delaware"
game:
  title: "Battlespace"
  status: "In Development"
```

Two shared includes keep legal wording consistent:

- `_includes/entity-line.html` — the "Impact Forge LLC is a Limited Liability Company registered in …" sentence
- `_includes/legal-notice.html` — footer copyright plus the required Unreal Engine and Epic Games trademark attribution

## Local development

```bash
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>.

To build without serving:

```bash
bundle exec jekyll build   # output in _site/
```

## Design

Dark tactical aesthetic: near-black ground, condensed uppercase display type
(Oswald), body text in Barlow, an ember accent, hard 1px rules and clipped button
corners. All styling is in `assets/css/style.scss`; the palette and type scale are
CSS custom properties at the top of that file.
