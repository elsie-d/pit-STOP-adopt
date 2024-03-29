const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const dogSchema = require('./Dog')

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
        },
        password: {
            type: String,
            required: true,
        },
        adopted: [
            {
                name: String,
                description: String,
                image: String,
                type: String,
                weight: String,
                height: String,
                family: String,
            }
        ],
        savedDogs: [dogSchema],
    },
    {
        toJSON: {
          virtuals: true,
        },
      }

);

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

userSchema.virtual('dogCount').get(function () {
    return this.savedDogs.length;
  });


const User = model('User', userSchema);

module.exports = User;
