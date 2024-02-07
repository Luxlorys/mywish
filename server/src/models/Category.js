class Category {
    constructor (title) {
        this.title = title;
    }

    static validate(data) {
        const errors = [];

        if (!data.title || data.title.length < 3 || data.title.length > 30) {
            errors.push('Title length must be from 3 to 30 characters');
        }

        return errors;
    }    
}

module.exports = Category;