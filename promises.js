function pegarId(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(8)
        },1500)
    })
}

function buscarEmailNoBanco(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("luizhjramos@outlook.com")
        },2000)
    })
}

function enviarEmail(corpo, para){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var erro = false
            if(!erro){
                resolve({time: 6 , to: "luizhjramos@outlook.com"})
            }else{
                reject("fila cheia")
            }
        },4000)
    })
}

pegarId().then((id) => {
    buscarEmailNoBanco(id).then((email) => {

        enviarEmail("Olá como vai " , email).then(() => {
            console.log("Email enviado para o usuário com o id : " + id)
        }).catch(err => {
            console.log(err)
        })
    })
})