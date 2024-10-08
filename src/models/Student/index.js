class Estudante {
    constructor(id, name, cpf, registration, password, roles, isEvaluator, isAdmin, idCampus) {
        this.id = id;
        this.name = name;
        this.cpf = cpf;
        this.registration = registration;
        this.password = password;
        this.roles = roles;
        this.isEvaluator = isEvaluator;
        this.isAdmin = isAdmin;
        this.idCampus = idCampus;
    }
}

export default Estudante;
