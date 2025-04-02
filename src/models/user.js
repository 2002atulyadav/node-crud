class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    validate() {
        if (!this.name || !this.email) {
            throw new Error('Name and email are required');
        }
        // Additional validation logic can be added here 
    }
}

module.exports = User;