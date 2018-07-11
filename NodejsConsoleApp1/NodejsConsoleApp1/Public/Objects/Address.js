module.exports = {
    getAddress: function () {
        //debugger;
        var address = {
            address: '',
            streetAddress: '',
            city: '',
            state: '',
            zipCode: '',
        }
        return address;
    },

    setAddress: function (address) {
        var address = {
            address: address.address,
            streetAddress: address.streetAddress,
            city: address.city,
            state: address.state,
            zipCode: address.zipCode,
        }
        return address;
    }
}