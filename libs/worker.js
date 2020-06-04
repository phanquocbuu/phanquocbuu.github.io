if ('function' === typeof importScripts) {

    self.importScripts('./skulpt.min.js')
    self.importScripts('./skulpt-stdlib.js')

    let readModule = module => (
        self.Sk.builtinFiles["files"][module]
    );

    let sendMessage = (name, message) => {
        self.postMessage(JSON.stringify({
            type: name,
            data: message
        }));
    }

    let run = source => {
        Sk.configure({
            read: readModule,
            output: function (output) {
                sendMessage('stdout', output);
            }
        });
        
          (Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = 'result-box';
          console.log("SK.Tur = " + Sk.TurtleGraphics);
          console.log("ACE " + self.ace);
        try {
            Sk.importMainWithBody("<stdin>", false, source, true);
        } catch (e) {
            sendMessage('stderr', {
                exception: e.tp$name,
                description: String(e)
            });
        }

        sendMessage('exit');
    }

    self.addEventListener('message', (e) => {
        run(e.data)
    });
}