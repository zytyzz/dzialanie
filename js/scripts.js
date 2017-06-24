//script.js
function dzialanie(){
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value; 
  var dzialanie = (a * a) + (2 * a * b) - (b * b);
  document.getElementById("wynik").innerHTML = dzialanie;  

  if (dzialanie > 0) {
	console.log("Liczba jest większa od 0"); //wyswietli "Liczba jest większa od 0"
  } else if (dzialanie < 0) {
	console.log("Liczba jest mniejsza od 0"); //wyswietli "Liczba jest mniejsza od 0"
  } else {
	console.log("Liczba równa się 0"); //wyswietli "Liczba równa się 0"
	alert("Liczba równa sie 0"); //wyswietli alert "Liczba równa sie 0"
  };
}