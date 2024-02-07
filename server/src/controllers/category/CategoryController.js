const Category = require('../../models/Category');
const CategoryService = require('../../services/category/CategoryService');

const service = new CategoryService();


const newCategory = async (req, res) => {
    const { title } = req.body;
    const categoryData = { title };

    const validationErrors = Category.validate(categoryData);

    if (validationErrors.length > 0) {
        return res.status(400).json({ errors: validationErrors });
    }

    const category = new Category(categoryData.title);

    try {
        await service.newCategory(category);
        res.status(200).json({messsage: `${title} category is added`});
    } catch (error) {
        res.status(400).json({error: error});
    }
}

module.exports = {
    newCategory
}