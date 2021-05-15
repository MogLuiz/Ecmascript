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

enviarEmail("Olá" , "luizhjramos@outlook.com").then( ({time , to}) => {
    console.log(`
    Time: ${time}
    --------------------
    To: ${to}
    `)
}).catch((erro) => {
    console.log("Deu erro" + erro)
})