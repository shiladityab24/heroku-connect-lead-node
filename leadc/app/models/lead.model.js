module.exports = (sequelize, Sequelize) => {
    const Lead = sequelize.define("lead", {
        lastname: {
            type: Sequelize.STRING(80),
        },
        name: {
            type: Sequelize.STRING(121),
        },
        mobilephone: {
            type: Sequelize.STRING(40),
        },
        finserv__referredbyuser__c: {
            type: Sequelize.STRING(18),    
        },
        status: {
            type: Sequelize.STRING(255),
        },
        firstname: {
          type: Sequelize.STRING(40),
        },
        company: {
          type: Sequelize.STRING(255),
        },
        id: {
          type: Sequelize.BIGINT,
          primaryKey: true,
        },
        isdeleted: {
            type: Sequelize.BOOLEAN,
        },
        herokuexternalid__c: {
            type: Sequelize.STRING(255),
        },
        sfid: {
            type: Sequelize.STRING(18),
        },
        _hc_lastop: {
            type: Sequelize.STRING(32),
        },
        _hc_err: {
            type: Sequelize.TEXT,
        },
    },
    {
        timestamps: false,
        // schema: 'salesforces',
        freezeTableName: true,
    });
    return Lead;
};

        // systemmodstamp: {
        //     type: Sequelize.TIMESTAMP,
        // },
        // createddate: {
        //     type: Sequelize.TIMESTAMP,
        // },

