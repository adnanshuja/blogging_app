module.exports = (sequelize, DataTypes) => {
    const blog = sequelize.define(
        'blog',
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

            description: {

                type: DataTypes.TEXT,
            },

            userId: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'user',
                    key: 'id',
                },
            },
        },
        {
            underscored: true,
            paranoid: true,
        }
    );

    blog.associate = (models) => {
        blog.belongsTo(models.user, {foreignKey: 'user_id'});
    };

    return blog;
};
