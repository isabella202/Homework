const { Schema, model }= require ('mongoose')

const taskSheme = Scheme({
    title: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref:'Usuario'
    },
});
module.exports = model('Task', TaskSchema);