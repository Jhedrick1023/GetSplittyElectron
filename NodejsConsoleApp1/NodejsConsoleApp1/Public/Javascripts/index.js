let setAddress;
const $ = require('../Public/Javascripts/jquery');

var iVar = {
    getAddress: require('../Public/Objects/Address').getAddress()
};


document.addEventListener('DOMContentLoaded', function () {
    iVar.getAddress.streetAddress = '101 W Coates St';
    iVar.getAddress.city = 'Moberly';
    iVar.getAddress.state = 'MO';
    iVar.getAddress.zipCode = 65270;
});

function showObject() {
    document.getElementById('streetAddress').innerText = iVar.getAddress.streetAddress;
    document.getElementById('city').innerText = iVar.getAddress.city;
    document.getElementById('state').innerText = iVar.getAddress.state;
    document.getElementById('zipCode').innerText = iVar.getAddress.zipCode;
};

function setObject() {

    var fullAddress = document.getElementById('enterAddress').value;
    if (fullAddress !== '') {
        var addressArray = fullAddress.split(',');
        var length = addressArray.length;
        for (var i = 0; i <= length - 1; i++) {
            //debugger;
            //console.log(length);
        }
        if (addressArray.length < 2) {
            window.alert('You did not use any commas!' + '\nPlease Re-enter an address');
        } else {

            setAddress = require('../Public/Objects/Address').setAddress(fullAddress);
            setAddress.streetAddress = addressArray[0];
            var splitAddress = addressArray[1].trim().split(' ');
            //console.log(splitAddress);
            setAddress.city = splitAddress[0];
            setAddress.state = splitAddress[1];
            setAddress.zipCode = splitAddress[2];

            $('#streetAddress').html(setAddress.streetAddress);
            $('#city').html(setAddress.city);
            $('#state').html(setAddress.state);
            $('#zipCode').html(setAddress.zipCode);
        }
    } else {
        window.alert('You did not enter an address!')
    }
}
