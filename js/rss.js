$(document).ready(function() {
  loadRSS(
    "https://www.mensjournal.com/feed/",
    "#mensjournal",
    "Read more"
  );
});

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< Updated upstream
$(document).ready(function () {
=======
=======
>>>>>>> parent of 7e042aa (Update rss.js)
=======
>>>>>>> parent of 7e042aa (Update rss.js)
function loadRSS(link, htmlContainer, linktext) {
  var url = link;
  var container = $(htmlContainer);

  feednami.load(url, function(result) {
<<<<<<< HEAD
<<<<<<< HEAD
    debugger
=======
>>>>>>> parent of 7e042aa (Update rss.js)
=======
>>>>>>> parent of 7e042aa (Update rss.js)
    if (result.error) {
      console.log(result.error);
    } else {
      var entries = result.feed.entries;
      for (var i = 0; i < 10; i++) {
        var entry = entries[i];
        container.append(
          '<div class="owl-item"><div class="col-md-4 col-sm-6"><div class="card RSS"><img class="card-img-top img-fluid" src="' +
            entry.enclosures[0].url +
            '"><div class="card-body"><h5><a href="' +
            entry.link +
            '"  target="_blank" class="stretched-link">' +
            entry.title +
            '</a></h5><a href="' +
            entry.link +
            '" class="btn btn-primary" target="_blank">' +
            linktext +
            "</a></div></div></div></div>"
        );
      }
    }
  });
}

$(document).ready(function() {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> parent of 7e042aa (Update rss.js)
=======
>>>>>>> parent of 7e042aa (Update rss.js)
  loadRSS(
    "https://www.afpafitness.com/blog/rss.xml",
    "#afpafitness",
    "Read more"
  );
});

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< Updated upstream
$(document).ready(function () {
=======
=======
>>>>>>> parent of 7e042aa (Update rss.js)
=======
>>>>>>> parent of 7e042aa (Update rss.js)
function loadRSS(link, htmlContainer, linktext) {
  var url = link;
  var container = $(htmlContainer);

  feednami.load(url, function(result) {
<<<<<<< HEAD
<<<<<<< HEAD
    debugger
=======
>>>>>>> parent of 7e042aa (Update rss.js)
=======
>>>>>>> parent of 7e042aa (Update rss.js)
    if (result.error) {
      console.log(result.error);
    } else {
      var entries = result.feed.entries;
<<<<<<< HEAD
<<<<<<< HEAD
      for (var i = 0; i < 8; i++) {
        var entry = entries[i];
        entry.enclosures[0]=entry.description;

        container.append(
          '<div class="owl-item"><div class="col-md-4 col-sm-6"><div class="card RSS"><img class="card-img-top img-fluid" src="' +
            entry.enclosures[0] +
=======
=======
>>>>>>> parent of 7e042aa (Update rss.js)
      for (var i = 0; i < 12; i++) {
        var entry = entries[i];
        var el = document.createElement( 'html' );
        el.innerHTML = entry.description;
        var imgSrc = document.getElementById("mydiv").append( el.getElementsByTagName( 'img' )[0]);
        container.append(
          '<div class="owl-item"><div class="col-md-4 col-sm-6"><div class="card RSS"><img class="card-img-top img-fluid" src="' +
            //entry.enclosures[0].url +
            imgSrc +
<<<<<<< HEAD
>>>>>>> parent of 7e042aa (Update rss.js)
=======
>>>>>>> parent of 7e042aa (Update rss.js)
            '"><div class="card-body"><h5><a href="' +
            entry.link +
            '"  target="_blank" class="stretched-link">' +
            entry.title +
            '</a></h5><a href="' +
            entry.link +
            '" class="btn btn-primary" target="_blank">' +
            linktext +
            "</a></div></div></div></div>"
        );
      }
    }
  });
}

$(document).ready(function() {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> parent of 7e042aa (Update rss.js)
=======
>>>>>>> parent of 7e042aa (Update rss.js)
  loadRSS(
    "http://feeds.feedburner.com/acefitness/fitnovatives",
    "#acefitness",
    "Read more"
  );
});

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< Updated upstream
$(document).ready(function () {
=======
=======
>>>>>>> parent of 7e042aa (Update rss.js)
=======
>>>>>>> parent of 7e042aa (Update rss.js)
function loadRSS(link, htmlContainer, linktext) {
  var url = link;
  var container = $(htmlContainer);

  feednami.load(url, function(result) {
    if (result.error) {
      console.log(result.error);
    } else {
      var entries = result.feed.entries;
      for (var i = 0; i < 12; i++) {
        var entry = entries[i];
<<<<<<< HEAD
<<<<<<< HEAD
        container.append(
          '<div class="col-md-4 col-sm-6"><div class="card RSS"><img class="card-img-top img-fluid" src="' +
            entry.description[0].url +
=======
=======
>>>>>>> parent of 7e042aa (Update rss.js)
        var el = document.createElement( 'html' );
        el.innerHTML = entry.description;
        var imgSrc = document.getElementById("mydiv").append( el.getElementsByTagName( 'img' )[0]);
        container.append(
          '<div class="col-md-4 col-sm-6"><div class="card RSS"><img class="card-img-top img-fluid" src="' +
            imgSrc +
<<<<<<< HEAD
>>>>>>> parent of 7e042aa (Update rss.js)
=======
>>>>>>> parent of 7e042aa (Update rss.js)
            '"><div class="card-body"><h5><a href="' +
            entry.link +
            '"  target="_blank" class="stretched-link">' +
            entry.title +
            '</a></h5><a href="' +
            entry.link +
            '" class="btn btn-primary" target="_blank">' +
            linktext +
            "</a></div></div></div>"
        );
      }
    }
  });
}



$(document).ready(function() {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> parent of 7e042aa (Update rss.js)
=======
>>>>>>> parent of 7e042aa (Update rss.js)
  loadRSS(
    "https://www.mindbodygreen.com/rss/feed.xml",
    "#mindbody",
    "Read more"
  );
});

function loadRSS(link, htmlContainer, linktext) {
  var url = link;
  var container = $(htmlContainer);

  feednami.load(url, function(result) {
    if (result.error) {
      console.log(result.error);
    } else {
      var entries = result.feed.entries;
      for (var i = 0; i < 12; i++) {
        var entry = entries[i];
        container.append(
          '<div class="col-md-4 col-sm-6"><div class="card RSS"><img class="card-img-top img-fluid" src="' +
            entry.enclosures[0].url +
            '"><div class="card-body"><h5><a href="' +
            entry.link +
            '"  target="_blank" class="stretched-link">' +
            entry.title +
            '</a></h5><a href="' +
            entry.link +
            '" class="btn btn-primary" target="_blank">' +
            linktext +
            "</a></div></div></div>"
        );
      }
    }
  });
}
