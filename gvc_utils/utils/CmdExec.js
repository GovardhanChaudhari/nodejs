var exec = require("child_process").exec;
var spawn = require('child_process').spawn;
//var _ = require("lodash");


module.exports = {
    execute: function (command, args,options) {
        if (args === "undefined") {
            args = [];

            //var cmd = spawn(process.env.comspec, _.union(['/c', command], args));
            /*cmd.stdout.on('data', function (data) {
                console.log('stdout: ' + data);
            });

            cmd.stderr.on('data', function (data) {
                console.log('stderr: ' + data);
            });

            cmd.on('close', function (code) {
                console.log('child process exited with code ' + code);
            });*/

            /*cmd.stderr.setEncoding('utf8');
            cmd.stderr.on('data', function (data) {
                if (/^execvp\(\)/.test(data)) {
                    console.log('Failed to start child process.');
                }
            });*/

        } else {
            //if(options === "")
            var child = exec(command, function (error, stdout) {
                if (error) {
                    console.log("Error: ", error);
                } else {
                    console.log("output: ", stdout);
                }
            });
        }

    }
};
