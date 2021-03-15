$(document).ready(function() {
  loadRSS(
    "https://www.mensjournal.com/feed/",
    "#mensjournal",
    "Read more"
  );
});

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< Updated upstream
$(document).ready(function () {
=======
=======
>>>>>>> parent of 7e042aa (Update rss.js)
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
<<<<<<< HEAD
    debugger
=======
>>>>>>> parent of 7e042aa (Update rss.js)
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
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> parent of 7e042aa (Update rss.js)
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
<<<<<<< HEAD
<<<<<<< Updated upstream
$(document).ready(function () {
=======
=======
>>>>>>> parent of 7e042aa (Update rss.js)
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
<<<<<<< HEAD
    debugger
=======
>>>>>>> parent of 7e042aa (Update rss.js)
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
        var desc = entry.description;
        var el = document.createElement( 'html' );
        el.innerHTML = desc;
        //el.innerHTML = '<description><div class="hs-featured-image-wrapper"> <a href="https://www.afpafitness.com/blog/the-role-of-amino-acids-in-promoting-health" title="" class="hs-featured-image-link"> <img src="https://www.afpafitness.com/hubfs/image-from-rawpixel-id-86097-jpeg%20%281%29-1.jpg" alt="The Role of Amino Acids in Promoting Health&nbsp;" class="hs-featured-image" style="width:auto !important; max-width:50%; float:left; margin:0 15px 15px 0;"> </a> </div> <p>While plenty of research has been carried out on the importance of an adequate role of complete proteins, over the past several decades researchers have had a growing interest in the specific roles of protein building blocks, called amino acids, in overall health, metabolism, body composition, and sports performance.</p></description>'
=======
      for (var i = 0; i < 12; i++) {
        var entry = entries[i];
        var el = document.createElement( 'html' );
        el.innerHTML = entry.description;
>>>>>>> parent of 7e042aa (Update rss.js)
        var imgSrc = document.getElementById("mydiv").append( el.getElementsByTagName( 'img' )[0]);
        container.append(
          '<div class="owl-item"><div class="col-md-4 col-sm-6"><div class="card RSS"><img class="card-img-top img-fluid" src="' +
            //entry.enclosures[0].url +
            imgSrc +
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of 7e042aa (Update rss.js)
=======
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
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> parent of 7e042aa (Update rss.js)
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
<<<<<<< HEAD
<<<<<<< Updated upstream
$(document).ready(function () {
=======
=======
>>>>>>> parent of 7e042aa (Update rss.js)
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
<<<<<<< HEAD
<<<<<<< HEAD
        container.append(
          '<div class="col-md-4 col-sm-6"><div class="card RSS"><img class="card-img-top img-fluid" src="' +
            entry.description[0].url +
=======
=======
>>>>>>> parent of 7e042aa (Update rss.js)
=======
>>>>>>> parent of 7e042aa (Update rss.js)
        var el = document.createElement( 'html' );
        el.innerHTML = entry.description;
        var imgSrc = document.getElementById("mydiv").append( el.getElementsByTagName( 'img' )[0]);
        container.append(
          '<div class="col-md-4 col-sm-6"><div class="card RSS"><img class="card-img-top img-fluid" src="' +
            imgSrc +
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of 7e042aa (Update rss.js)
=======
>>>>>>> parent of 7e042aa (Update rss.js)
=======
        container.append(
          '<div class="col-md-4 col-sm-6"><div class="card RSS"><img class="card-img-top img-fluid" src="' +
            //entry.enclosures[0].url +
>>>>>>> parent of 08c8f59 (Update rss.js)
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
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> parent of 7e042aa (Update rss.js)
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
<<<<<<< HEAD
            //entry.enclosures[0].url +
=======
            entry.enclosures[0].url +
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
