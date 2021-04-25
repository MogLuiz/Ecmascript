/*
0 Obter um usuário
1 Obter o número de telefone de um usuário a partir de seu id
2 Obter o endereço do usuário pelo seu id
*/

function obterUsuario(callback) {
    setTimeout(() => {
        return callback(null, {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        })
    }, 1000)
}

function obterTelefone(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            telefone: '031997774711',
            ddd: 11
        })
    }, 2000)

}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'dos bobos',
            numero: 0
        })
    }, 2000)

}

function resolverUsuario(erro, usuario) {
    console.log('usuario', usuario)
}

obterUsuario(function resolverUsuario(error, usuario) {
    if (error) {
        console.error('Deu ruim no usuario', error)
        return
    }
})

obterTelefone(usuario.id, function resolveTelefone(error1, telefone) {
    if (error) {
        console.error('Deu ruim no TELEFONE', error)
        return
    }
    obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
        if (error2) {
            console.error('Deu ruim no TELEFONE', error)
            return
        }

        console.log(`
        Nome: ${usuario.nome},
        Endereco: ${endereco.rua},${endereco.numero}
        Telefone: (${telefone.ddd})${telefone.telefone}
        `)
    })
})