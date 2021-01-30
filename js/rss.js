$(document).ready(function () {
  loadRSS(
    "https://www.mensjournal.com/feed/",
    "#mensjournal",
    "Read more"
  );
});

$(document).ready(function () {
  loadRSS(
    "https://www.afpafitness.com/blog/rss.xml",
    "#afpafitness",
    "Read more"
  );
});

$(document).ready(function () {
  loadRSS(
    "http://feeds.feedburner.com/acefitness/fitnovatives",
    "#acefitness",
    "Read more"
  );
});

$(document).ready(function () {
  loadRSS(
    "https://www.mindbodygreen.com/rss/feed.xml",
    "#mindbody",
    "Read more"
  );
});

function loadRSS(link, htmlContainer, linktext) {
  var url = link;
  var container = $(htmlContainer);

  feednami.load(url, function (result) {
    if (result.error) {
      console.log(result.error);
    } else {
      var entries = result.feed.entries;      
      for (var i = 0; i < 10; i++) {
        var entry = entries[i];
        if (entry != undefined) {
          if(htmlContainer == "#mensjournal")
            debugger; 
          var imgSrc = "";
          if(entry.enclosures.length <= 0){
            var el = document.createElement('html');
            el.innerHTML = entry.description;
            var img = el.getElementsByTagName('img')[0];
            
            if(img != undefined)
              imgSrc = img.src;
          }
          else {
            imgSrc = entry.enclosures[0].url 
          }
          container.append(
            '<div class="col-md-4 col-sm-6"><div class="card RSS"><img class="card-img-top img-fluid" src="' +
            imgSrc +
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
    }
  });
}
