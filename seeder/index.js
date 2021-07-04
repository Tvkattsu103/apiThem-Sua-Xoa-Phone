const seeder = require('mongoose-seed');

const phone = [
    {
        'model': 'Phone',
        'documents': [
            {
                'phoneNumber': '0935438630',
                'owner': 'voanhtuan'
                // 'email': 'vat@gmail.com',
                // 'address': 'Hue'
            },
            {
                'phoneNumber': '0915692567',
                'owner': 'haxuannghia'
                // 'email': 'hxn@gmail.com',
                // 'address': 'Hue'
            },
            {
                'phoneNumber': '0981346132',
                'owner': 'nguyenvanminhnhat'
                // 'email': 'nvmn@gmail.com',
                // 'address': 'Da Nang'
            }
        ]
    },
]

seeder.connect('mongodb://localhost:27017/traning', function() {
    seeder.loadModels([
        './models/phone.js'
    ]);
    seeder.clearModels(['Phone'], function() {
        seeder.populateModels(phone, () => {
            seeder.disconnect();
        });
    });
});