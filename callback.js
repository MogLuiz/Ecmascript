function enviarEmail(body, sender, callback) {
    setTimeout(() => {
        console.log(`
            Para: ${sender}
            --------------------
            ${body}
            --------------------
            De: Luiz Henrique
        `)
        callback()
    }, 8000)
}

enviarEmail("Olá , seja bem vindo !", "luizhjramos@outlook.com", () => {
    console.log("Seu email foi enviado com sucesso!")
    console.log("Tudo Ok!!")
})