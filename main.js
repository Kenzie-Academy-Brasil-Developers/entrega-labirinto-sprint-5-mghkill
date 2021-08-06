let inicio = false

    


    const game = (event) => {
        const keyName = event.key;
        if(inicio === false && keyName === "ArrowRight"){
            movimentacao(keyName)
            inicio = true
        }
        if(inicio == true){
            movimentacao(keyName)
        }
    }
    document.addEventListener('keydown', game);
    

    const main = document.getElementById('main')

        const map = [
            "WWWWWWWWWWWWWWWWWWWWW",
            "W   W     W     W W W",
            "W W W WWW WWWWW W W W",
            "W W W   W     W W   W",
            "W WWWWWWW W WWW W W W",
            "W         W     W W W",
            "W WWW WWWWW WWWWW W W",
            "W W   W   W W     W W",
            "W WWWWW W W W WWW W F",
            "S     W W W W W W WWW",
            "WWWWW W W W W W W W W",
            "W     W W W   W W W W",
            "W WWWWWWW WWWWW W W W",
            "W       W       W   W",
            "WWWWWWWWWWWWWWWWWWWWW",
        ];





    const criarLabirinto = (map) => {
        for (let i = 0; i < map.length; i++){
            const linha = map[i]
            for(let j = 0; j < linha.length; j++){
                const letraEspacoW = linha[j]
                const newDiv = document.createElement("div")
                if(letraEspacoW === " "){
                    newDiv.classList.add("espaco")
                    main.appendChild(newDiv)
                }
                if(letraEspacoW === "W"){
                    newDiv.classList.add("parede")
                    main.appendChild(newDiv)
                }
                if(letraEspacoW === "S"){
                    newDiv.classList.add("partida")
                    main.appendChild(newDiv)
                }
                if(letraEspacoW === "F"){
                    newDiv.classList.add("chegada")
                    main.appendChild(newDiv)
                }
                
            }
        }
    }
    criarLabirinto(map)

    

    const mainLength = main.childElementCount

    for(let i = 0; i < mainLength; i++){
        main.children[i].id = i
    }



    let idPosicao = "189"
    const player = document.createElement('div')
    player.classList.add("player")
    document.getElementById("189").appendChild(player)




    const movimentacao = (value) => 
    {
        if(inicio = true){

            if(value === "ArrowRight" && podeMudarBox(limparCodigo(String(Number(idPosicao) + 1)))){
                idPosicao = String(Number(idPosicao) + 1)
                const pai = limparCodigo(idPosicao)
                if(podeMudarBox(pai)){
                    pai.appendChild(player)
                }
                if(podeMudarBox(pai) === 1){
                    inicio = undefined
                    document.getElementById('modal-vitoria').classList.add('mostrar')
                }
            }
            if(value === "ArrowLeft" && podeMudarBox(limparCodigo(String(Number(idPosicao) - 1)))){
                idPosicao = String(Number(idPosicao) - 1)
                const pai = limparCodigo(idPosicao)
                if(podeMudarBox(pai)){
                    pai.appendChild(player)
                }
                if(podeMudarBox(pai) === 1){
                    inicio = undefined
                    document.getElementById('modal-vitoria').classList.add('mostrar')
                }
            }
            if(value === "ArrowUp" && podeMudarBox(limparCodigo(String(Number(idPosicao) - 21)))){
                idPosicao = String(Number(idPosicao) - 21)
                const pai = limparCodigo(idPosicao)
                if(podeMudarBox(pai)){
                    pai.appendChild(player)
                }
                if(podeMudarBox(pai) === 1){
                    inicio = undefined
                    document.getElementById('modal-vitoria').classList.add('mostrar')
                }
            }
            if(value === "ArrowDown" && podeMudarBox(limparCodigo(String(Number(idPosicao) + 21)))){
                idPosicao = String(Number(idPosicao) + 21)
                const pai = limparCodigo(idPosicao)
                if(podeMudarBox(pai)){
                    pai.appendChild(player)
                }
                if(podeMudarBox(pai) === 1){
                    inicio = undefined
                    document.getElementById('modal-vitoria').classList.add('mostrar')
                }
            }
        }
    }


    const limparCodigo = (value) =>{
        let output = document.getElementById(value)
        return output
    }



    const podeMudarBox = (value) =>{
        let classeValue = value.classList[0]
        if(classeValue === "espaco"){
            return true
        }
        if(classeValue === "parede"){
            return false
        }
        else if(classeValue === "partida"){
            false
        }
        else{
            return 1
        }
    }


    const restart = () => {
        idPosicao = "189"
        document.getElementById("189").appendChild(player)
        inicio = false
        document.getElementById('modal-vitoria').classList.remove('mostrar')
        
    }


const button = document.getElementById('button')

    button.addEventListener("click", restart);

