
  var userFeed = new Instafeed({
    get: 'user',
    userId: '1505409056',
    clientId: '0b88734851ad4e78b3e34d95e67b2c71',
    accessToken: '1505409056.0b88734.4ea94cad5d3c4bda923f0464ccb16304',
    resolution: 'standard_resolution',
    template: '<a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /><span></span></a>',
    sortBy: 'most-recent',
    limit: 75,
    links: false
  });
  userFeed.run();

/*const req = new XMLHttpRequest(); // mordenare alternativet är fetch

req.onreadystatechange = function(){
    if (req.readyState === XMLHttpRequest.DONE){ //=== måste vara helt lika
      // req.responseText contains pokemen data JSON objekt in a string
      const el = document.getElementsById("instagramImg");
      //const prasedPokemon = JSON.pared
      el.innerHTML = JSON.parse(req.responseText).name

    }
}

const url = "https://api.instagram.com/v1/tags/nofilter/media/recent?client_id=CLIENT-ID";

req.open ("GET", url);
req.send();
*/
