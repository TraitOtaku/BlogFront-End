/*-------------
  Typing Effect
---------------*/

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

/*-------------
  End Typing Effect
---------------*/

/*-------------
  Table of contents 
---------------*/
    // Get ToC div
toc = document.getElementById("ToC");

//Add a header
tocHeader = document.createElement("h2");
tocHeader.innerText="Table of contents";
toc.appendChild(tocHeader);

// Create a list for the ToC entries
tocList = document.createElement("ul");    

// Get the h3 tags - ToC entries
headers = document.getElementsByTagName("h3");

// For each h3
for (i = 0; i < headers.length; i++){
  
  // Create an id
  nameid = "h"+i;
  headers[i].id=nameid;
  
  // a list item for the entry
  tocListItem = document.createElement("li");

  // a link for the h3
  tocEntry = document.createElement("a");
  tocEntry.setAttribute("href","#"+nameid);
  tocEntry.innerText=headers[i].innerText;
  
  tocListItem.appendChild(tocEntry);
  tocList.appendChild(tocListItem);
}
toc.appendChild(tocList);
/*-------------
  End Table of contents 
---------------*/
