const RAW_GAMES = [
  { id: 1, title: "The Legend of Zelda", genre: "Adventure", favorite: true },
  { id: 2, title: "Elden Ring", genre: "RPG", favorite: true },
  { id: 3, title: "Stardew Valley", genre: "Simulation", favorite: false },
  { id: 4, title: "Cyberpunk 2077", genre: "RPG", favorite: false },
  { id: 5, title: "Hades", genre: "Roguelike", favorite: true }
];


function getFavoriteGames(games) {
  return games.filter(game => game.favorite === true);
}


function getGameTitles(games) {
  return games.map(game => game.title);
}

console.log("Favorite Games:");
console.log(getFavoriteGames(RAW_GAMES));

console.log("Game Titles:");
console.log(getGameTitles(RAW_GAMES));
