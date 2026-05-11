const add = require('./app');

if (add(40,60) === 100) {
    console.log('Test Passed!');
    process.exit(0);
} else {
    console.log('Test Failed!');
    process.exit(1);
}