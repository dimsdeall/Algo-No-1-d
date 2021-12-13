const myFunction = () =>{
    let val = document.getElementById('inputText').value;
    val = val.split("");
    let dec = {};
  
    val.map((value, key) => {
      if (value != " ") {
        dec[value] = dec[value] == null ? 1 : dec[value] + 1;
      }
    });
    // dec = dec.sort();
    dec = JSON.stringify(dec).replace("{", "[").replace("}", "]");
  
    document.getElementById("result").innerHTML = dec;
}