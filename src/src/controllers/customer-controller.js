'use strict';

const ValidatonContract = require('../validator/fluent-validator');
const repository = require('../repositories/customer-repository');

exports.post = async(req, res, next) => {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.name, 3, 'O nome deve conter pelo menos 3 caracteres!');
    contract.isEmail(req.body.email, 'E-mail inválido!');
    contract.hasMinLen(req.body.password, 6, 'A senha deve conter pelo menos 6 caracteres!');

    //se os dados forem inválidos
    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }

    try {
        await repository.create(req.body)
        res.status(201).send({
            message: 'Cliente cadastrado com sucesso!'});
    } catch (error) {
        res.status(500).send({
            message: 'Falha ao precessar sua requisição'
        }); 
    }
};