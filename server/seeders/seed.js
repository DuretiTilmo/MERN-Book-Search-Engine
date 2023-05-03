const db = require('../config/connection');
const { User } = require('../models');

const profileSeeds = require('./profileSeeds.json');

db.once('open', async () => {
    await User.create(profileSeeds);

})