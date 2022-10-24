let userList = [];

async function returnUsers() {
    return userList;
}

async function createUser(user) {
    if(!user.nome) {
        return { error: "Preencha o nome!"};
    }
    if(!user.senha) {
        return { error: "Preencha a senha!"};
    }
    user.id = userList.length + 1;
    userList.push(user);
    return user;
}

async function login(data) {
    if(!data.nome) {
        return { error: "Preencha o nome!"};
    }
    if(!data.senha) {
        return { error: "Preencha a senha!"};
    }

    for (const user of userList) {
        if(user.nome == data.nome && user.senha == data.senha) {
            return "Login Efetuado!";
        }
    }
    return "Login Inválido!";
}

module.exports = {
    returnUsers,
    createUser,
    login
}