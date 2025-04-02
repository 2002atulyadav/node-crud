class Collage {
    constructor(collage_name, collage_address, collage_tier, collage_affiliation, collage_phone) {
        this._collage_name = collage_name;
        this._collage_address = collage_address;
        this._collage_tier = collage_tier;
        this._collage_affiliation = collage_affiliation;
        this._collage_phone = collage_phone;
    }

    // Getters
    get collage_name() {
        return this._collage_name;
    }

    get collage_address() {
        return this._collage_address;
    }

    get collage_tier() {
        return this._collage_tier;
    }

    get collage_affiliation() {
        return this._collage_affiliation;
    }

    get collage_phone() {
        return this._collage_phone;
    }

    // Setters with validation
    set collage_name(value) {
        if (!value || typeof value !== 'string') {
            throw new Error('College name must be a non-empty string');
        }
        this._collage_name = value;
    }

    set collage_address(value) {
        if (!value || typeof value !== 'string') {
            throw new Error('College address must be a non-empty string');
        }
        this._collage_address = value;
    }

    set collage_tier(value) {
        if (!value || typeof value !== 'string') {
            throw new Error('College tier must be in format "tier-X" where X is a number between 1 and 5');
        }

        // Check if the value matches the tier-X format
        if (!/^tier-[1-5]$/i.test(value)) {
            throw new Error('College tier must be in format "tier-X" where X is a number between 1 and 5');
        }

        
        this._collage_tier = tier;
    }

    set collage_affiliation(value) {
        if (!value || typeof value !== 'string') {
            throw new Error('College affiliation must be a non-empty string');
        }
        this._collage_affiliation = value;
    }

    set collage_phone(value) {
        if (!value || typeof value !== 'string') {
            throw new Error('College phone must be a non-empty string');
        }
        // Basic phone number validation (10 digits)
        if (!/^\d{10}$/.test(value)) {
            throw new Error('College phone must be a 10-digit number');
        }
        this._collage_phone = value;
    }

    // Validation method
    validate() {
        // Check if all required fields are present
        if (!this._collage_name || !this._collage_address || !this._collage_tier || 
            !this._collage_affiliation || !this._collage_phone) {
            throw new Error('All fields are required');
        }

        // Validate collage tier
        if (!/^tier-[1-5]$/i.test(value)) {
            throw new Error('College tier must be in format "tier-X" where X is a number between 1 and 5');
        }

        // Validate phone number format
        if (!/^\d{10}$/.test(this._collage_phone)) {
            throw new Error('Phone number must be a 10-digit number');
        }

        // Validate string lengths
        if (this._collage_name.length < 3) {
            throw new Error('College name must be at least 3 characters long');
        }
        if (this._collage_address.length < 5) {
            throw new Error('College address must be at least 5 characters long');
        }
    }

    // Convert to JSON
    toJSON() {
        return {
            collage_name: this._collage_name,
            collage_address: this._collage_address,
            collage_tier: this._collage_tier,
            collage_affiliation: this._collage_affiliation,
            collage_phone: this._collage_phone
        };
    }
}

module.exports = Collage;