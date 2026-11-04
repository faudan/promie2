// Default settings. Teams and players can also be managed from the page ("Manage" button);
// those changes are saved in the browser and override the `teams` list below.
// "Copy settings" in the Manage panel gives you a `teams` block to paste here to make them permanent.
//
// Team ids come from promiedos URLs: promiedos.com.ar/team/river-plate/igi -> "igi"
// League ids too:                    promiedos.com.ar/league/liga-profesional/hc -> "hc"
window.TRACKER_CONFIG = {
  teams: [
    { id: "igi", name: "River Plate" },
    // With `players`, each match shows whether they start / are on the bench / are out.
    // `followTeam: false` = you only care about the team because of those players
    // (shown in the "Players" row instead of "My teams").
    { id: "bde", name: "Atlético de Madrid", followTeam: false, players: ["Julián Álvarez"] },
    { id: "bai", name: "Liverpool" },
    { id: "bdc", name: "FC Barcelona" },
    { id: "cdhi", name: "Argentina" },
  ],

  // How many upcoming matches to list per team.
  upcomingPerTeam: 3,

  // Leagues whose standings you want at hand (bottom "Standings" section). They also set which tables
  // count for a team's footer and rivals, e.g. River: its Clausura group and the Tabla Anual.
  //   tables: which tables to show. "current" = the tournament in progress (first group on
  //           promiedos, e.g. Clausura); any other string matches a table/group name.
  leagues: [
    { id: "hc", name: "Liga Profesional", tables: ["current", "Tabla Anual"] },
  ],

  // Rivals of a followed team = teams within `places` positions above/below it in each of its tables.
  // Pick whose rivals to see in the "Rivals" section; the day view can include their matches.
  rivals: { places: 3 },

  // Leagues scanned to build the "add team" search index (cached in the browser for a week).
  // The last ones are national-team competitions (qualifiers, World Cup, Copa América, Nations League).
  searchLeagues: ["hc", "ebj", "h", "bb", "bh", "cf", "df", "hd", "bbd", "gbh", "gcb", "gca", "bdf", "beb", "bae",
                  "bac", "dij", "fhc", "fhd", "hgif",
                  "gbd", "fecb", "fjda", "fjf", "habg"],

  // Include the selected team's rivals' matches in the day view by default.
  showRivals: true,

  // Auto-refresh interval in seconds while the page is visible (0 = off).
  refreshSeconds: 120,
};
