import { DataTypes, InferAttributes, Sequelize } from 'sequelize';


const sequelizeModelMap: Record<string, any> = Object.freeze({
    "string": DataTypes.STRING
});

const buildSequelizeModel = (sequelize: Sequelize, model: Record<string, string>, name: string) => {
    const buildSequelizeColumn = (column : string) : [ string, any ] => [column, sequelizeModelMap[model[column]]]
    const modelDescription = Object.fromEntries(Object.keys(model).map(buildSequelizeColumn))

    return sequelize.define(name, modelDescription)
};

export default buildSequelizeModel;