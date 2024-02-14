var mes = prompt("digite o mês atual")

switch (mes) {

    case "janeiro":
    case "fevereiro":
    case "março":
        document.write("verão")
        break;

    case "abril":
    case "maio":
    case "junho":
        document.write("outono")
        break;

    case "julho":
    case "agosto":
    case "setembro":
        document.write("inverno")
        break;

    case "outubro":
    case "novembro":
    case "dezembro":
        document.write("primavera")
        
}