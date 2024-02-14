var mes = prompt("digite o mês atual")

switch (mes) {

    case "janeiro":
    case "fevereiro":
    case "março":
    case "01":
    case "02":
    case "03":

        document.write("oh verão bom" )
        break;

    case "abril":
    case "maio":
    case "junho":
    case "04":
    case "05":
    case "06":
        document.write("você esta no outono, ta um clima bom")
        break;

    case "julho":
    case "agosto":
    case "setembro":
    case "07":
    case "08":
    case "09":
        document.write("você esta no inverno, que frio")
        break;

    case "outubro":
    case "novembro":
    case "dezembro":
    case "10":
    case "11":
    case "12":
        document.write("você esta na primavera")
        break;

        default:
            document.write("isso não existe cara, coloca um nome de mês ou numero do mês  <br\> " );
            
            document.write("ex: março , 01 ou 1")
}