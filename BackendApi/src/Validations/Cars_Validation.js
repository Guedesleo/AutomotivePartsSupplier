const { Joi} = require('celebrate');


const Car_validation = Joi.object().keys({
    NomeCarro : Joi.string().trim().required().min(3).max(50).error(new Error('Nome do Carro não pode estar em branco!!Ou não pode ter nenhum número.')),
    id_Fabricante : Joi.number().integer().required(),
    Ano : Joi.number().integer().required().greater(1978).error(new Error('Ano do Carro e menor que temos no Cadastro que é 1978')),
    Modelo :  Joi.string().trim().required().min(3).max(3),
}); 



module.exports = Car_validation ;//.pattern(new RegExp(/^[A-Z][a-záàâãéèêíïóôõöúçñ/']+$/))