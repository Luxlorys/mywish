class Gift {
    constructor (userId, title, categoryId = null, status = 'available') {
        this.userId = userId;
        this.title = title;
        this.categoryId = categoryId;
        this.status = status;
    }

    static validate(data) {
        const errors = [];

        if (!data.userId) {
            errors.push('user Id is required');
        }

        if (!data.title || data.title.length < 3 || data.title.length > 30) {
            errors.push('Title length must be from 3 to 30 characters');
        }

        return errors;
    }
}

module.exports = Gift;