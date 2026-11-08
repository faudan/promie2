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

**Next matches** lists the upcoming matches of everything you follow, grouped by day and competition.

**Matches by day** can show all matches, hide the finished ones, or show only the ones being played right now.
Followed players' badges show ⚽ for each goal and 🅰️ for each assist. Click a section title (Matches by day,
Next matches, Standings) to fold it; folded sections are remembered per device.

**Standings**: pick one of your teams to see its standings. The dropdown switches between the competitions
it's playing (its league first, then e.g. Champions League or a cup, taken from its recent and upcoming
matches). Cups show their knockout rounds instead (pick a round; the latest one your team plays in opens
first, ✓ marks who went through); competitions with a league phase show them below the tables once the
knockout rounds are listed. **Show competing teams fixtures** below lists the current round of the teams within
`rivals.points` points of it (above or below). Those teams are also highlighted in the tables, and the day view's "Display
competing teams fixtures" toggle (off on every page load) adds their matches, with the points difference.
Match rows show each team's position and points in that competition, and competition headers show the
matchday or stage (e.g. "Premier League · Fecha 10", "Copa de la liga · Cuarta Ronda").

**Export… / Import…** in Manage save your teams, players and layout to a JSON file and restore them from it
(on this or another device).

**In `config.js`:**

- `teams`: default teams to follow. The id comes from the promiedos URL (`/team/river-plate/igi` → `igi`).
  Add `players: ["Name", ...]` to show whether that player starts, is on the bench, or is out (injured/suspended).
  Add `followTeam: false` when you only follow the team for its players.
- `nextMatchesDays`: default range of the "Next matches" section, 14 (2 weeks) or 30 (1 month). The dropdown
  at the top right of the section changes it on that device.
- `leagues`: which tables to use for a league. `tables: ["current", "Tabla Anual"]`, where `current` is the
  tournament in progress. These are the tables shown in Standings and used for a team's positions and rivals.
- `rivals.points`: a team's rivals are the teams within this many points above or below it in each table
  it's in, counted only within that competition. Choose the team with the buttons in Standings.
- `searchLeagues`: leagues scanned to build the team-search index. promiedos has no search endpoint, so
  the index is built on first search (about 20 requests) and cached for a week.

## Notes

- Data comes from `api.promiedos.com.ar`, the same API the site uses. It needs an `X-VER` header
  (`API_VERSION` in `index.html`). If everything comes back empty, promiedos probably bumped the
  version. The current value is in their JS bundle (search for `X-VER`).
- Lineups are usually published about an hour before kickoff. Before that, the player badge shows
  injuries and suspensions, or "lineup not out yet".
# promie2
