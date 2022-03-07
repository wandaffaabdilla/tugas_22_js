function tugas22() {
  var kalimat = "saya ingin belajar bersama";

  var result = kalimat.split(" ");
  result.forEach(function (item, index) {
    console.log("item : " + item, "index ke " + index);
  });
}
tugas22();
