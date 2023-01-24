

// all users+admins are allowed to get catalogs list
const getCatalogs = (req, res) => {
    try {
        res.send('You can get the list of catalogs');
    } catch (error) {
        
    }
}


// only users can create a catalog
const createCatalogs = (req, res) => {
    try {
        res.send('You can create a catalog');
    } catch (error) {
        
    }
}

// only admin can update a catalog
const updateCatalogs = (req, res) => {
    try {
        res.send('You can update a catalog');
    } catch (error) {
        
    }
}

module.exports = {
    getCatalogs,
    createCatalogs,
    updateCatalogs,
}