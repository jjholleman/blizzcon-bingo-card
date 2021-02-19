var new_card_btn = document.getElementById('new_card_btn');
var print_btn = document.getElementById('print_btn');
var bingo_tile_arr = [
   "\"waw what a year its been\"",
   'ion\'s devious grin',
   'classic news in opening ceremony',
   'morally grey',
   "\"We can\'t wait to show you...\"",
  "Anduin transformation cinematic",
  "Timewalking Legion",
  "Jaina <3 Thrall",
  "Chris Metzen",
  "Pet battle mobile game",
   "Tyrande Becomes Even More Evil",
   "Blizzard Subscription",
   "LGBTQ Overwatch Hero",
   "\"Available Now!\"",
   "Goblin cannon fired",
   "\"Expanding to other platforms like Mobile\"",
   "WORLD PREMIERE",
   "Blizzard franchise tv show/movie",
   "Unique Diablo class",
   "Starcraft AI",
   "Activision Game mentioned",
   "\"We hear you, We\'ve been listening\"",
   "Preorder bonusses",
   "AWC/MDI awkward prize pool moment",
    "Overwatch 2 cinematic",
    "Burning Crusade Classic announcement",
    "Diablo Immortal release date",
    "Diablo 2 remastered announcement",
    "Wandering ancient revealed",
    "Complaints about dataminers",
    "Diablo 4 endgame info",
    "Cosplayers working at home",
    "Info about attack on Arbiter",
    "Covid setbacks",
    "Overwatch 2 raids",
    "Overwatch 2 release date",
    "Cringy Blizzard face masks",
    "Ion blatantly lies",
    "chat spams 'Free HK'",
    "Southpark cosplayer tribute",
    "J Allen Brack having worse hair somehow",
    "Meaningful choices",
    "More covenant specific stuff",
    "Blizzard 30th year anniversary",


  ];

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}

function populate_card(arr, id) {
  var bingo_card = document.getElementById(id);
  for (var i = 24; i >= 0; i--) {
    if (i == 12) {
      document.getElementById(id).innerHTML += '<div class="bingo-tile"> <span>&nbsp;</span></div>';
    } else {
      if (i > 12) {
        document.getElementById(id).innerHTML += '<div class="bingo-tile"> <span>' + arr[i-1] + '</span></div>';
      } else {
        document.getElementById(id).innerHTML += '<div class="bingo-tile"> <span>' + arr[i] + '</span></div>';
      }

    }
  }
}

function generate_new_card() {
  bingo_card.innerHTML = '';
  shuffle(bingo_tile_arr);
  populate_card(bingo_tile_arr, 'bingo_card');
}

document.addEventListener("DOMContentLoaded", function(){
  shuffle(bingo_tile_arr);
  populate_card(bingo_tile_arr, 'bingo_card');
});

new_card_btn.addEventListener("click", function( event ) {
  generate_new_card();
  console.log('button was clicked');
}, false);

print_btn.addEventListener("click", function( event ){
  window.print();
  return false;
});
