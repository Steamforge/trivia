module.exports = (sequelize, DataTypes) => {
    const GamePlayer = sequelize.define('GamePlayer', {
        playerScore: {
            type: DataTypes.TINYINT,
            defaultValue: 0,
        },
    });

    GamePlayer.associate = (models) => {
        GamePlayer.belongsTo(models.Game, {
            foreignKey: {
                allowNull: false,
            },
        });

        GamePlayer.belongsTo(models.Player, {
            foreignKey: {
                allowNull: false,
            },
        });
    };

    return GamePlayer;
};
