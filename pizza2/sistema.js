function cardapios (){

    const cardapio = [
    
            {
    
                
                
            nome: "Calabresa",
            desc: "massa de tomate, queijo parmesão, orégano, linguiça calabresa, cebola",
            valor: "R$54,99"
            
            
                
        },
        {
    
               
            nome: "Milho e Bacon",
            desc: "massa de tomate, queijo, orégano, milho, bacon",
            valor: "R$59,99"
            
               
        },
        {
    
                
            nome: "Frango e Catupiry",
            desc: "massa de tomate, queijo catupiry, frango desfiado",
            valor: "R$59,99"
            
            
               
        },
        {
    
           
            nome: "Mussarela",
            desc: "massa de tomate, queijo mussarela, orégano, tomate",
            valor: "R$54,99"
            
               
                
                
        }
    
    
    ];
    
    const  cardapioJson = JSON.stringify(cardapio);
    
    const objCardapio = JSON.parse(cardapioJson)
    
    let cardapioo = "<tr><td>Pizza:</td><td>Ingredientes:</td><td>Valor</td></tr>";
    
    objCardapio.map(function(itemA, indexA){
        cardapioo += "<tr>";
        cardapioo += "<td>"+itemA.nome+"</td>";
        cardapioo += "<td>"+itemA.desc+ "</td>";
        cardapioo += "<td>"+itemA.valor+ "</td>";
        
        
        cardapioo += "<tr>";
    })
    
    document.querySelector("#tabelaB").innerHTML = cardapioo;
    }