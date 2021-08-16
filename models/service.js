module.exports = (sequelize, DataTypes) => {
    const service = sequelize.define(
        'service',
        {
            id: {
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
                type: DataTypes.INTEGER,
            },
            title: {
                type: DataTypes.STRING,
            },

            shortDescription: {

                type: DataTypes.TEXT,
            },

            header1: {
                type: DataTypes.STRING,
            },

            description1: {
                type: DataTypes.TEXT,
            },

            header2: {
                type: DataTypes.STRING,
            },

            description2: {
                type: DataTypes.TEXT,
            },

            summary1: {
                type: DataTypes.STRING,
            },

            summary2: {
                type: DataTypes.STRING,
            },
        },
        {
            underscored: true,
            paranoid: true,
        }
    );

    service.associate = (models) => {
    };

    return service;
};
