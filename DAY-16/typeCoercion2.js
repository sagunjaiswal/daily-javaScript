document.write("TYPE COERCION WITH * OPERATOR", "<br/>");
document.write(2 * "2", " TYPE OF : ", typeof (2 * "2"), "<br/>");
document.write(2 * 2 * "2", " TYPE OF : ", typeof (2 * 2 * "2"), "<br/>");
document.write(true * 5, " TYPE OF : ", typeof (true * 5), "<br/>");
document.write(2 * true * "2", " TYPE OF : ", typeof (2 * true * "2"), "<br/>");
document.write(40 * "", " TYPE OF : ", typeof (40 * ""), "<hr/>");
document.write("TYPE COERCION WITH / OPERATOR", "<br/>");
document.write("100" / 100, " TYPE OF : ", typeof ("100" / 100), "<br/>");
document.write(100 / "100", " TYPE OF : ", typeof (100 / "100"), "<br/>");
document.write("" / 1, " TYPE OF : ", typeof ("" / 1), "<br/>");
document.write("2" / 1, " TYPE OF : ", typeof ("2" / 1), "<br/>");
document.write(false / true, " TYPE OF : ", typeof (false / true), "<br/>");
document.write(null / 2, " TYPE OF : ", typeof (null / 2), "<hr/>");
document.write("TYPE COERCION WITH % OPERATOR", "<br/>");
document.write(2 % "2", " TYPE OF : ", typeof (2 % "2"), "<br/>");
document.write((2 % 2) % "2", " TYPE OF : ", typeof ((2 % 2) % "2"), "<br/>");
document.write(true % 5, " TYPE OF : ", typeof (true % 5), "<br/>");
document.write(
  (2 % true) % "2",
  " TYPE OF : ",
  typeof ((2 % true) % "2"),
  "<br/>"
);
document.write(40 % "", " TYPE OF : ", typeof (40 % ""), "<br/>");
