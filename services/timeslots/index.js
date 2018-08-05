module.exports = async function (fastify, opts) {
    const { assert, mongo } = fastify
    const timeslotAvailability = mongo.db.collection('timeslot_availability')

    fastify.get('/timeslots', async function (request, reply) {
        const result = await timeslotAvailability.find({});
        assert(result != null, 404);
        return result.toArray();
    })
}
