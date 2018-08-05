module.exports = (sequelize, DataTypes) => {
    const Game = sequelize.define('Game', {
        accessCode: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
            },
        },
        gameStarted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        gameEnded: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        currentRound: {
            type: DataTypes.TINYINT,
            defaultValue: 0,
        },
        gameData: {
            type: DataTypes.JSON,
            defaultValue: {},
        },
    });

    Game.associate = (models) => {
        Game.hasMany(models.GamePlayer, {
            onDelete: 'cascade',
        });
    };

    return Game;
};
