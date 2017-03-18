function salvaItem() {
  var nome = document.forms.ListaDeCompras.nome.value;
  var qtd = document.forms.ListaDeCompras.qtd.value;
  localStorage.setItem(nome, qtd);
  imprimeLista();
}

function atualizaItem() {
  var nome = document.forms.ListaDeCompras.nome.value;
  document.forms.ListaDeCompras.qtd.value = localStorage.getItem(nome);
  imprimeLista();
}

function deletaItem() {
  var nome = document.forms.ListaDeCompras.nome.value;
  document.forms.ListaDeCompras.qtd.value = localStorage.removeItem(nome);
  imprimeLista();
}

function limpaLista() {
  localStorage.clear();
  imprimeLista();
}

// Escrever a tabela

function imprimeLista() {
  if (conferirNavegador()) {
    var key = "";
    var lista = "<tr><th>Item</th><th>Quantidade</th></tr>\n";
    var i = 0;
    if (localStorage.length == 0) {
      lista += imprimeItem();
    } else {
      for (i = 0; i <= localStorage.length - 1; i++) {
        key = localStorage.key(i);
        lista += imprimeItem(key);
      }
    }
    document.getElementById('lista').innerHTML = lista;
  } else {
    alert('Seu navegador não tem suporte para localStorage');
  }
}

function conferirNavegador() {
  if ('localStorage' in window && window['localStorage'] !== null) {
    return true;
  } else {
    return false;
  }
}

function imprimeItem(key) {
  if (key == null) {
    return "<tr colspan='2'><td><i>Nenhum item na lista</i></td></tr>\n";
  }
  else {
    var val = localStorage.getItem(key);
    return "<tr><td>" + key + "</td>\n<td>" +
      localStorage.getItem(key) + "</td></tr>\n";
  }
}