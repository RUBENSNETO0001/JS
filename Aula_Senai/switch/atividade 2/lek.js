var fruta = prompt("qual e a fruta?")

switch (fruta){

    case "maça":
    document.write("maça, não vedemos maça aqui")
    break;

    case "kiwi":
    document.write("kiwi, está em falta no estoque")
    break;

    case "melancia":
    prompt("melancia, esta aqui, o kilo esta saindo por 3 reais");
    document.write ("obrigado volte sempre")
    break;

    case "abacate":
        prompt("abacate, você tem uma sorte. Temos ainda, o kilo esta saindo por 3 reais");
        prompt ("uma velha senhora passou aqui com um garoto ele disse que era irmao de um tal joseu eu acho, ai comprarm o monte de abacate kkk. ela e bem engraçada");
        document.write ("obrigado volte sempre")
        break;

    case "abacaxi":
            prompt("abacaxi acabou infelizmente, venha aqui depois,");
            document.write (" aahh, obrigado volte sempre")
            break;

    case "banana":
                prompt(" sim, temos banana esta 6 reais o kilo vai querer?");
                document.write (" aahh, obrigado volte sempre")
                break;

    case "laranja":
                    prompt(" sim, temos laranja de monte aliais, esta 5,23 reais o kilo vai querer?");
                    document.write (" aahh, obrigado volte sempre")
                    break;     

    case "limão":
                        prompt(" limao, limão e muito bom para o corpo sabia, aqui oh");
                        document.write (" aahh, obrigado volte sempre")
                        break;    

    case "mamão":
                        prompt(" mamão muito gosto não e?");
                        prompt(" aqui oh");
                        document.write (" aahh, obrigado volte sempre")
                        break ;
    case "manga":
                        prompt(" manga esta em falta aqui ");
                        document.write (" mais obrigado volte sempre")
                        break;
    case "maracujá":
                        prompt("suco de maracuja e muito bom kk");
                        document.write (" aqui esta, obrigado volte sempre")
                        break;
    case "melão":
                            prompt("cara desculpa, não temos melão. um cara entrou ontem aqui e quebrou todo os melões");
                            document.write (" mais obrigado, volte sempre")
                            break;
    case "morango":
                                prompt("morango, nao vendemos. Mais pode olaha na segunda barraca");
                                document.write (" obrigado, volte sempre")
                                break;
                                
default:
    document.write("isso não existe aqui");
}