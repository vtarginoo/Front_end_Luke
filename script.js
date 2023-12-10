// --------------------------------------------------------------------------------------
//    Função para obter a lista existente do servidor via requisição GET
// --------------------------------------------------------------------------------------

const getList = async () => {
  let url = "http://127.0.0.1:5000/repay_list";
  fetch(url, {
    method: "get",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Dados recebidos da API:", data);
      data.repay_list.forEach((item) =>
        insertList(item.date_insert, item.repay, item.category, item.value)
      );
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

// --------------------------------------------------------------------------------------
//   Chamada da função para carregamento inicial dos dados
// --------------------------------------------------------------------------------------

getList();

//  --------------------------------------------------------------------------------------
//    Função para colocar um item na lista do servidor via requisição POST
//  --------------------------------------------------------------------------------------

const postItem = async (
  formattedDate,
  inputRepay,
  inputCategory,
  inputValue
) => {
  const formData = new FormData();
  formData.append("date_insert", formattedDate);
  formData.append("repay", inputRepay);
  formData.append("category", inputCategory);
  formData.append("value", inputValue);

  let url = "http://127.0.0.1:5000/repay";
  fetch(url, {
    method: "post",
    body: formData,
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
    });
};

// --------------------------------------------------------------------------------------
//  Função para criar um botão close para cada item da lista
// --------------------------------------------------------------------------------------

const insertButton = (parent) => {
  let span = document.createElement("span");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  parent.appendChild(span);
};

//  --------------------------------------------------------------------------------------
//  Função para remover um item da lista de acordo com o click no botão close
//  --------------------------------------------------------------------------------------

const removeElement = () => {
  let close = document.getElementsByClassName("close");
  // var table = document.getElementById("myTable");
  let i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement.parentElement;
      const RepayItem = div.getElementsByTagName("td")[1].innerHTML;
      if (confirm("Você tem deseja excluir o seu reembolso?")) {
        div.remove();
        console.log("O item a ser removido é o:", RepayItem);
        deleteItem(RepayItem);
        alert("Removido!");
      }
    };
  }
};

// --------------------------------------------------------------------------------------
//  Função para deletar um item da lista do servidor via requisição DELETE
// --------------------------------------------------------------------------------------

const deleteItem = (RepayItem) => {
  console.log("O nome do repay a ser deletado é:", RepayItem);
  let url = "http://127.0.0.1:5000/repay?repay_name=" + RepayItem;
  fetch(url, {
    method: "delete",
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
    });
};

// --------------------------------------------------------------------------------------
//  Função para adicionar um novo Repay com Data, Descrição, Categoria e Valor
// --------------------------------------------------------------------------------------

const newItem = () => {
  console.log("Função newItem chamada!");
  let inputDate = document.getElementById("newDate").value;
  let inputRepay = document.getElementById("newRepay").value;
  let inputCategory = document.getElementById("newCategory").value;
  let inputValue = document.getElementById("newValue").value;

  console.log(
    "Dados antes de chamar newItem:",
    inputDate,
    inputRepay,
    inputCategory,
    inputValue
  );

  if (inputRepay === "") {
    alert("Descreva o seu reembolso");
  } else if (isNaN(inputValue)) {
    alert(
      "Valor precisa ser número! (Caso você esteja usando vírgula, trocar por ponto.)"
    );
  } else {
    // Formate a data antes de chamar postItem
    const formattedDate = formatInputDate(inputDate);
    // const formattedDate = inputDate;

    insertList(formattedDate, inputRepay, inputCategory, inputValue);
    postItem(formattedDate, inputRepay, inputCategory, inputValue);
    alert("Item de Reembolso adicionado!");
  }
};

// --------------------------------------------------------------------------------------
//  Função para inserir items na lista apresentada do Front-end
// --------------------------------------------------------------------------------------

const insertList = (date_insert, repay, category, value) => {
  console.log("Data recebida:", date_insert);
  console.log("Inserindo na lista:", date_insert, repay, category, value);
  var item = [date_insert, repay, category, value];
  var table = document.getElementById("myTable");
  var row = table.insertRow();

  for (var i = 0; i < item.length; i++) {
    var cel = row.insertCell(i);
    cel.textContent = item[i];
  }

  insertButton(row.insertCell(-1));
  document.getElementById("newDate").value = "";
  document.getElementById("newRepay").value = "";
  document.getElementById("newCategory").value = "";
  document.getElementById("newValue").value = "";

  removeElement();
};

// --------------------------------------------------------------------------------------
//  Função para  formatar data de acordo com a base de dados no formato DD/MM/YYYY
// --------------------------------------------------------------------------------------

const formatInputDate = (inputDate) => {
  const date = new Date(inputDate);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  console.log("Valores em formatInputDate:", day, month, year);

  return `${day}/${month}/${year}`;
};
