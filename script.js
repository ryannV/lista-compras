function adicionar(){
    const item = document.getElementById("item");

    if(item.value != ""){
        // Criando o formulário
        const form = document.createElement("form");
        form.setAttribute("action", "#");
        form.classList.add("form-item"); //setando uma classe

        // Criando o elemento <input> e <label>
        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");

        const label = document.createElement("label");
        label.setAttribute("for", "item");
        label.textContent = item.value;

        // Anexar o <input> e <label> ao <form>
        form.appendChild(checkbox);
        form.appendChild(label);

        // Encontrando o elemento onde irei adicionar o formulário
        const divItem = document.getElementById("div-item");

        // Adicionando o formulário ao elemento
        divItem.appendChild(form);

        // Ajustando minha tag main, de acordo com o tamanho da lista
        const section = document.querySelector("section");
        const sectionHeight = section.scrollHeight;
        section.style.height = sectionHeight + "px";

        // Limpa o conteúdo do input
        item.value = "";
    }
}

// function comprado(){
//     const itemComprado
// }

// colocar onclick comprado em todos os itens que for criados no checkbox
// quando clicar, vai para a lista de comprados
    // pegar este item form, jogar ou excluir aqui
    // e mandar para la