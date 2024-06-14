function StopWatch() {
    let startTime = null;
    let stopTime = null;

    Object.defineProperties(this,
        {
            start: {
                get: function () {
                    if (startTime)
                        throw new Error('Stopwatch already started.')
                    startTime = Date.now()
                    console.log('Stopwatch Started');
                },
            },
            stop: {
                get: function () {
                    if (!startTime)
                        throw new Error('Stopwatch is not started.')
                    if (stopTime)
                        throw new Error('Stopwatch already stopped.')
                    stopTime = Date.now()
                    console.log('Stopwatch Stopped');
                },
            },
            duration: {
                get: function () {
                    if (!startTime)
                        throw new Error('Stopwatch is not started.')
                    if (!stopTime)
                        throw new Error('Stopwatch is not stopped.')
                    duration = (stopTime - startTime) / 1000;
                    console.log(duration);
                },
            },
            reset: {
                get: function () {
                    startTime = null;
                    stopTime = null;
                    console.log('Stopwatch Reseted');
                },
            }
        })
}


