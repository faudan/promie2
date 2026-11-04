# Fútbol Tracker

A personal, filtered view of promiedos.com.ar: only the teams you follow, the players you care about,
and the teams competing directly with yours.

## Run

Open `index.html` in a browser. No build step and no server needed (the promiedos API allows
cross-origin requests). To use it from your phone on the same network you can serve it:

    python3 -m http.server 8000

## Configure

**From the page:** use **Manage** to search for a team (or paste a promiedos team URL), then choose
**+ Team** to follow the team, or **+ Player** to follow a player in it, with the team's squad as autocomplete.
Followed teams appear in the "My teams" row and player-only teams in the "Players" row. Drag cards by
their ⋮⋮ handle to reorder them, and use ▾ to collapse a card to just its next (or live) match.
All of this is saved in that browser only.
**Copy settings** gives you a `teams` block to paste into `config.js` so they stick everywhere.

Each device uses `config.js` until you edit teams in Manage there. If `config.js` changes later (e.g. you
pushed from another computer), that device shows a banner offering **Use config.js** or **Keep this
device's list**. Card order and collapsed cards are saved per device and never block `config.js` updates.
After a push, GitHub Pages can take a minute to deploy, and browsers may keep the old files for up to
10 minutes, so reload again if you don't see the change.

The **Competitions** chips at the top list every competition your teams are playing. Click one (or a
competition name in a card's footer) to see its matchday (‹ › to move between rounds), standings, and top
scorers and assists. National teams work like clubs: search "Argentina" in Manage.

In **Rivals**, pick a team under "Rivals of" to see the current round of the teams around it. Its rivals are
also highlighted in the standings, and the day view can include their matches. Click the selected team
again to turn rivals off.

**In `config.js`:**

- `teams`: default teams to follow. The id comes from the promiedos URL (`/team/river-plate/igi` → `igi`).
  Add `players: ["Name", ...]` to show whether that player starts, is on the bench, or is out (injured/suspended).
  Add `followTeam: false` when you only follow the team for its players.
- `leagues`: standings to show at the bottom. `tables: ["current", "Tabla Anual"]`, where `current` is the
  tournament in progress. For these leagues, these are also the tables used for a team's positions and rivals.
- `rivals.places`: a team's rivals are the teams within this many positions above or below it in each table
  it's in, counted only within that competition. Choose whose rivals to see with the "Rivals of" buttons.
- `searchLeagues`: leagues scanned to build the team-search index. promiedos has no search endpoint, so
  the index is built on first search (about 20 requests) and cached for a week.

## Notes

- Data comes from `api.promiedos.com.ar`, the same API the site uses. It needs an `X-VER` header
  (`API_VERSION` in `index.html`). If everything comes back empty, promiedos probably bumped the
  version. The current value is in their JS bundle (search for `X-VER`).
- Lineups are usually published about an hour before kickoff. Before that, the player badge shows
  injuries and suspensions, or "lineup not out yet".
# promie2
