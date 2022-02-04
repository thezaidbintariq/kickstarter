// importing the solc compiler
const solc = require('solc');

// importing the fs module
const fs = require('fs-extra');

// importing the path module
const path = require('path')

//delete the build folder if it exists
const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);


//getting the contract source code
const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');

//compiling the contract
const output = solc.compile(source, 1).contracts;

//creating the build directory again
fs.ensureDirSync(buildPath);

//iterating through the contracts stored in the output object and using outputJsonSync() to write the compiled contract to the build directory
for (let contract in output) {
    fs.outputJsonSync(
        path.resolve(buildPath, contract.replace(':', '') + '.json'),
        output[contract]
    );
}