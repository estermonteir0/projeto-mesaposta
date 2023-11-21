function openModal(detalhes) {
    var txt1 = document.getElementById("txt1");
    var txt2 = document.getElementById("txt2");
    switch (detalhes) {
      case "Cor1":
        txt1.innerHTML  = "Jogo Americano";
        txt2.innerHTML  = "Vermelho";
        txt3.innerHTML  = "R$150";
        break;
      case "Cor2":
        txt1.innerHTML  = "Jogo Americano";
        txt2.innerHTML  = "Branco";
        txt3.innerHTML  = "R$160";
        break;    
      case "Cor3":
        txt1.innerHTML  = "Jogo Americano";
        txt2.innerHTML  = "Preto";
        txt3.innerHTML  = "R$160";
        break; 
      case "Cor4":
        txt1.innerHTML  = "Jogo Americano";
        txt2.innerHTML  = "Dourado";
        txt3.innerHTML  = "R$160";
        break; 
      case "Cor5":
        txt1.innerHTML  = "Jogo Americano";
        txt2.innerHTML  = "Verde";
        txt3.innerHTML  = "R$140";
        break; 
      case "Cor6":
        txt1.innerHTML  = "Jogo Americano";
        txt2.innerHTML  = "Rosa";
        txt3.innerHTML  = "R$130";
        break; 
      case "Talher1":
        txt1.innerHTML = "Jogo de talher";
        txt2.innerHTML  = "Dourado";
        txt3.innerHTML  = "R$230";
        break;
      case "Talher2":
        txt1.innerHTML = "Jogo de talher";
        txt2.innerHTML  = "Prata";
        txt3.innerHTML  = "R$200";
        break;

    }
    document.getElementById("knowMore").style.display = "inline-block";
  }
  
  function closeModal() {
    document.getElementById("knowMore").style.display = 'none';
  }

/* conteúdo para página com formulário */

function mascaraTelefone(event) {
    let tecla = event.key;
    let telefone = event.target.value.replace(/\D+/g, "");

    if (/^[0-9]$/i.test(tecla)) {
      telefone = telefone + tecla;
      let tamanho = telefone.length;
  
      if (tamanho >= 12) { 
        return false;
      }
  
      if (tamanho > 10) { 
        telefone = telefone.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
      } else if (tamanho > 5) { 
        telefone = telefone.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
      } else if (tamanho > 2) { 
        telefone = telefone.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
      } else {
        telefone = telefone.replace(/^(\d*)/, "($1");
      }
  
      event.target.value = telefone;
    }
  
    if (!["Backspace", "Delete", "Tab"].includes(tecla)) {
      return false;
    }
  }

/*  recepção de dados do formulário */

function getParameters() {

    var params = new Array();
    var paramsRet = new Array();
    var url = window.location.href;    
    var paramsStart = url.indexOf("?"); 
  
    if (paramsStart != -1) {
      // Encontrou ? na URL
      var paramString = url.substring(paramsStart + 1); 
      paramString = decodeURIComponent(paramString);    
      var params = paramString.split("&"); 
      for (var i = 0; i < params.length; i++) {
        var pairArray = params[i].split("="); 
        if (pairArray.length == 2) {
          paramsRet[pairArray[0]] = pairArray[1];
        }
  
      }
      return paramsRet;
    }
    return null; 
  }