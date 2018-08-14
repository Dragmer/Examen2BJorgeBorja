/**
 * Medicamento.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    id: { type: 'number', required: false, unique: true, autoIncrement: true },
    nombre: { type: 'string', required: true },
    composicion: { type: 'string', required: true },
    usadoPara: { type: 'string', required: true },
    gramosIngerir: { type: 'string', required: true },
    numeroPastillas: { type: 'number', required: true },
    fechaCaducidad: { type: 'string', required: true },

    owner: {
      model: 'paciente'
    }

  },

};

