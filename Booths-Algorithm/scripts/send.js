let M,
  Q,
  A,
  QMO, 
  cycle,
  i = 0, 
  total = 0, 
  shift = false;

function send() {
  if (i !== 0) {
    tableReset();
  }

  let multiplicant = document.getElementById("Multiplicant").value;
  let multiplier = document.getElementById("Multiplier").value;
  let input_type = document.getElementById("inlineFormCustomSelectPref").value;

  if (multiplicant === "" || multiplier === "") {
    alert("Enter The Valid Input");
    return;
  }

  if (input_type === "DEC") {
    M = decimalToBinary(parseInt(multiplicant));
    Q = decimalToBinary(parseInt(multiplier));
  } else {
    M = multiplicant;
    Q = multiplier;

    if (CheckInputBIN(M) !== undefined || CheckInputBIN(Q) !== undefined) {
      alert("Input inválido");
      return;
    }
  }

  cycle = Q.length;
  total = cycle;
  QMO = "0";

  A = new String();
  while (A.length !== M.toString().length) {
    A = A + "0";
  }

  if (input_type === "DEC") {
    document.getElementById("info").innerHTML += `
    (${multiplicant})<sub>10</sub> = (${M})<sub>2</sub>
    <br/>(${multiplier})<sub>10</sub> = (${Q})<sub>2</sub>
    <br/>M = (${M})<sub>2</sub>`;
  } else {
    M_dec = binaryToDecimal(multiplicant);
    Q_dec = binaryToDecimal(multiplier);

    document.getElementById("info").innerHTML += `
    (${M})<sub>2</sub> = (${M_dec})<sub>10</sub><br/>
    (${Q})<sub>2</sub> = (${Q_dec})<sub>10</sub><br/>
    M = (${M})<sub>2</sub>
    `;
  }

  document.getElementById("info").style.display = "block";
  document.getElementById("send").disabled = true;
  document.getElementById("steps").disabled = false;
}
