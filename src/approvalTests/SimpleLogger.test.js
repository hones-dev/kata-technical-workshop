const approvals = require('approvals');
const sinon = require('sinon');


const { calculateTax } = require('../taxCalculator');


describe('Caclulate Approval Test',function() {

    approvals.configure({
        normalizeLineEndingsTo: '\n',
        appendEOL: true,
        EOL: '\n',
        reporter:'diffmerge'
    });

    


    //approvals.verify(__dirname, 'checkCalculation',result )

})
