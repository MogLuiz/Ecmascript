function enviarEmail(body, sender, callback) {
    setTimeout(() => {
        console.log(`
            Para: ${sender}
            --------------------
            ${body}
            --------------------
            De: Luiz Henrique
        `)
        callback("OK", 5, "8s")
    }, 8000)
}

enviarEmail("Olá , seja bem vindo !", "luizhjramos@outlook.com", (status, amount, time) => {
    console.log(`
        Status: ${status}
        --------------------
        Contatos: ${amount}
        --------------------
        Tempo de envio: ${time}

    `)
    console.log("Seu email foi enviado com sucesso!")
    console.log("Tudo Ok!!")
})