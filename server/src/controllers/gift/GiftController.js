const GiftService = require('../../services/gift/GiftService');
const Gift = require('../../models/Gift');

const service = new GiftService();

const newGift = async (req, res) => {
    const { title, userId, categoryId } = req.body;

    try {
        const gift = new Gift(userId, title, categoryId);
        const validationErrors = await gift.validate();
    
        if (validationErrors.length > 0) {
            return res.status(400).json({ errors: validationErrors });
        }

        await service.newGift(gift);
        return res.status(201).json({messsage: `${gift.title} gift is added`});
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({ errors: error.errors });
        } else {
            console.error('Error creating gift:', error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
}


const getGifts = async (req, res) => {
    try {
        const gifts = await service.getGifts();
        return  res.status(200).json({ gifts: gifts })
    } catch (error) {
        return res.status(400).json({ message: 'error geting gifts', error })
    }
}

const getGiftsForSpecificUser = async (req, res) => {
    const { username } = req.params;

    if (!username || username.length < 4) {
        return res.status(406).json({ message: 'Invalid username' });
    }

    try {
        const gifts = await service.getGiftsForSpecificUser(username);

        if (gifts.length === 0) {
            return res.status(404).json({ message: `No gifts found for user: ${username}` });
        }


        return res.status(200).json({ gifts: gifts });

    } catch (error) {
        console.error(`Error getting gifts for user: ${username}`, error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

const deleteGift = async (req, res) => {
    const { id } = req.params;
    const gift = await service.getGiftById(id);
  
    // Check if id is a valid integer
    if (isNaN(parseInt(id))) {
      return res.status(400).json({ message: 'Id must be a valid integer' });
    }

    // check whether there is gift in db
    if (gift.length === 0) {
        return res.status(400).json({ message: 'Gift not found' });
    }
  
    try {
      await service.deleteGift(id);
  
      return res.status(200).send({ message: `successfully deleted` });
    } catch (error) {
      console.error(`Error deleting gift ${id}:`, error);
  
      return res.status(500).json({ message: error });
    }
  };


module.exports = {
    newGift,
    getGifts,
    getGiftsForSpecificUser,
    deleteGift
}