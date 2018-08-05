module.exports = (sequelize, DataTypes) => {
    const Player = sequelize.define('Player', {
        playerName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    Player.associate = (models) => {
        Player.hasMany(models.GamePlayer, {
            onDelete: 'cascade',
        });
    };

    return Player;
};
