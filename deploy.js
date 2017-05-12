'use strict';
const fs = require('fs');
const execSync = require('child_process').execSync;




const  out = (error, stdout, stderr) => {
    console.log(stdout);
    if(error) {
        console.error(stderr);
    }
}

if(fs.existsSync('./deploy')) {
    execSync('rm -r ./deploy', out);
}

require('simple-git')().clone('https://github.com/amagno/amagno.github.io.git', 'deploy').then(() => {
    execSync('rm -r ./deploy/*', out);
    const git = require('simple-git')('./deploy');
    const date = new Date().toString();
    execSync('cp -r ./build/* ./deploy/');
    git.add('.');
    git.commit(date);
    console.log('Please execute cd deploy && git push origin master.......');
});