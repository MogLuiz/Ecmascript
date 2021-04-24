function enviarEmail(body, sender) {
    setTimeout(() => {
        console.log(`
            Para: ${sender}
            --------------------
            ${body}
            --------------------
            De: Luiz Henrique
        `)
    }, 8000)
}
console.log("Inicio do envio de email")
enviarEmail("Olá , seja bem vindo !", "luizhjramos@outlook.com")
console.log("Seu email foi enviado com sucesso!")
console.log("Tudo Ok!!")