var new_card_btn = document.getElementById('new_card_btn');
var print_btn = document.getElementById('print_btn');
var bingo_tile_arr = [
   'waw what a year its been', 
   'ion\'s devious grin',
   'classic news in opening ceremony',
   'moar heritage armor',
   'morally grey',
   'We can\'t wait to show you...',
  "World of Warcraft: Shadowlands",
  "Overwatch 2",
  "Lich King is Friendly",
  "Tinkers",
  "Dark Rangers",
  "Profession reworks",
  "Timewalking",
  "Calia Menethil",
  "New talent system",
  "FREE HONGKONG",
  "Faction merge",
  "Bwonsamdi's Boss",
  "Jaina <3 Thrall",
  "Chris Metzen",
  "Pet battle mobile game",
  "New artifact weapon",
   "Tyrande Becomes Evil",
   "New Hero Class",
   "Blizzard Subscription",
   "Level squish",
   "Wyaty Cheng announces Diablo",
   "LGBTQ Overwatch Hero",
   "Red Shirt Guy",
   "\"Available Now!\""
   "Goblin cannon fired",
   "\"Expanding to other platforms like Mobile\""
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
