// Default settings. Teams and players can also be managed from the page ("Manage" button);
// those changes are saved in the browser and override the `teams` list below.
// "Copy settings" in the Manage panel gives you a `teams` block to paste here to make them permanent.
//
// Team ids come from promiedos URLs: promiedos.com.ar/team/river-plate/igi -> "igi"
// League ids too:                    promiedos.com.ar/league/liga-profesional/hc -> "hc"
window.TRACKER_CONFIG = {
    teams: [
    { id: "igi", name: "River Plate" },
    { id: "bai", name: "Liverpool" },
    { id: "cdhi", name: "Argentina" },
    { id: "bdc", name: "FC Barcelona" },
    { id: "ccf", name: "AS Roma" },
    { id: "fde", name: "Brest" },
    { id: "bde", name: "Atlético de Madrid", followTeam: false, players: ["Julián Álvarez"] },
    { id: "cce", name: "Inter Milan", followTeam: false, players: ["Lautaro Martínez"] },
    { id: "fehcj", name: "Inter Miami", followTeam: false, players: ["Lionel Messi"] },
    { id: "gbbh", name: "Como", followTeam: false, players: ["Nicolás Paz"] },
    { id: "bba", name: "Manchester City", followTeam: false, players: ["Enzo Fernández"] },
    { id: "baf", name: "Manchester United", followTeam: false, players: ["Lisandro Martínez"] },
    { id: "bag", name: "Chelsea", followTeam: false, players: ["Valentín Barco"] },
    { id: "fagb", name: "Francia", followTeam: false, players: ["Rayan Cherki"] },
    { id: "bdb", name: "Real Madrid", followTeam: false, players: ["Yan Diomande"] },
    { id: "hbhb", name: "RB Leipzig" },
    { id: "bae", name: "Arsenal", followTeam: false, players: ["Viktor Gyökeres"] },
  ],

  // How many upcoming matches to list per team.
  upcomingPerTeam: 3,

  // Default range of the "Next matches" section: 14 (2 weeks) or 30 (1 month). Its dropdown overrides it per device.
  nextMatchesDays: 14,

  // Which tables to use for these leagues in Standings, a team's footer and its rivals, e.g. River: its Clausura group and the Tabla Anual.
  //   tables: which tables to show. "current" = the tournament in progress (first group on
  //           promiedos, e.g. Clausura); any other string matches a table/group name.
  leagues: [
    { id: "hc", name: "Liga Profesional", tables: ["current", "Tabla Anual"] },
  ],

  // Rivals of a followed team = teams within `points` points above/below it in each of its tables.
  // Pick the team in the "Standings" section; the day view can include its rivals' matches.
  rivals: { points: 3 },

  // Leagues scanned to build the "add team" search index (cached in the browser for a week).
  // The last ones are national-team competitions (qualifiers, World Cup, Copa América, Nations League).
  searchLeagues: ["hc", "ebj", "h", "bb", "bh", "cf", "df", "hd", "bbd", "gbh", "gcb", "gca", "bdf", "beb", "bae",
                  "bac", "dij", "fhc", "fhd", "hgif",
                  "gbd", "fecb", "fjda", "fjf", "habg"],

  // Auto-refresh interval in seconds while the page is visible (0 = off).
  refreshSeconds: 120,

};