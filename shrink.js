function shrinkage (elems, width) {
  for(var i = 0; i< elems.length; i++) {
    elems[i].style.width = width;
  }
}

function shrinkBigLy() {
  var lilHeadlineWidth = "665px";
  var biglyHeadlineWidth = "900px";
  var previewHeadlines = document.getElementsByClassName("headine_css_class");

  if (previewHeadlines.length != 0) {
    shrinkage(previewHeadlines, lilHeadlineWidth);
  }
}

shrinkBigLy();
