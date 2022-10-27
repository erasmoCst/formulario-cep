 document.querySelector("#cep").onblur = function()
{
    const cep = this.value;

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(function(response){
            //console.log(response);  //DEBUG
            response.json()
                .then(function (data)
                {
                    localStorage.setItem('cep', JSON.stringify(data));
                    //console.log(data);  //DEBUG
                    document.querySelector("#logradouro").value = data.logradouro;
                    document.querySelector("#bairro").value = data.bairro;
                    document.querySelector("#cidade").value = data.localidade;
                    document.querySelector("#estado").value = data.uf;
                    document.querySelector("#complemento").value = data.complemento;
                })
        });

    //alert(this.value);    //DEBUG
}

let cep = localStorage.getItem('cep');

if(cep)
{
    cep = JSON.parse(cep);
    document.querySelector("#CEP").value = cep.cep;
    document.querySelector("#logradouro").value = cep.logradouro;
    document.querySelector("#bairro").value = cep.bairro;
    document.querySelector("#cidade").value = cep.localidade;
    document.querySelector("#estado").value = cep.uf;
    document.querySelector("#complemento").value = cep.complemento;
    
    //console.log(cep);
}
 