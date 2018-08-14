/**
 * Paciente.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    id: { type: 'number', required: false, unique: true, autoIncrement: true },
    nombres: { type: 'string', required: true },
    apellidos: { type: 'string', required: true },
    fechaNacimiento: { type: 'string', required: true },
    hijos: { type: 'number', required: true },
    seguro: { type: 'boolean', required: true },

    medicamentos: {
      collection: 'medicamento',
      via: 'owner'
    }

  },

};

