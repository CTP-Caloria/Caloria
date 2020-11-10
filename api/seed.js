const db = require('./models');
const {Journal} = db;


const JOURNALS = [
    {mealTyep: 'breakfast'},
    {mealType: 'lunch'},
    {mealType: 'dinner'},
    {mealType: 'snack'},
];


const seed = () => {
    return db.sequelize.sync({force: false})
        .then(() => {
            let journalPromise = JOURNALS.map(j => Journal.create(j));
            return journalPromise;
        });
};

module.exports = seed;