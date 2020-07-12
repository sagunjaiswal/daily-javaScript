function getTheAttributes() {
  var valhref = document.getElementById("day4").href;
  var valhreflang = document.getElementById("day4").hreflang;
  var valrel = document.getElementById("day4").rel;
  var valtarget = document.getElementById("day4").target;
  var valtype = document.getElementById("day4").type;
  document.write(
    "value of the href attribute of the link is : " + valhref,
    "<br />"
  );
  document.write(
    "value of the hreflang attribute of the link is : " + valhreflang,
    "<br />"
  );

  document.write(
    "value of the rel attribute of the link is : " + valrel,
    "<br />"
  );

  document.write(
    "value of the taget attribute of the link is : " + valtarget,
    "<br />"
  );

  document.write(
    "value of the type attribute of the link is : " + valtype,
    "<br />"
  );
}
