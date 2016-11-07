var mongoose = require('mongoose'),
    bcrypt = require('bcryptjs'),
    SALT_INDEX = 10,    // the larger this value is, the stronger the encryption,
                        // but the longer it will take to compare hashes
    UserSchema = new mongoose.Schema({
        username: {
            type: String,
            unique: true,
        },
        email: {
            type: String,
            unique: true
        },
        name: String,
        password: String,
        created: {
            type: Number,
            default: () => Date.now()
        }
    });



UserSchema.pre('save', function(next) {
    var user = this; // new User(req.body);

    if( !user.isModified('password') ) {
        return next();
    }

    bcrypt.genSalt(SALT_INDEX, (saltErr, salt) =>{
        if( saltErr ) {
            console.error(saltErr);
            return next(saltErr);
        }
        console.info('SALT GENERATED', salt);

        bcrypt.hash(user.password, salt, (hashErr, hashedPassword) => {
            if( hashErr ) {
                console.error(hashErr);
                return next(hashErr);
            }
            user.password = hashedPassword;
            next();
        });
    });
});

module.exports = mongoose.model('User');
