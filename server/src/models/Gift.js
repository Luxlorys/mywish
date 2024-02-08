class Gift {
    constructor (userId, title, categoryId = null, status = 'available') {
        this.userId = userId;
        this.title = title;
        this.categoryId = categoryId;
        this.status = status;
    }

    async validate() {
        const errors = [];

        if (!this.userId) {
            errors.push('user Id is required');
        }

        if (!this.title || this.title.length < 3 || this.title.length > 30) {
            errors.push('Title length must be from 3 to 30 characters');
        }

        return errors;
    }
}

module.exports = Gift;