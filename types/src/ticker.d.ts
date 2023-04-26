/**
 * Ticker class that keeps track of time and provides a loop event for every tick.
 *
 * @class
 * @public
 */
export class $Ticker {
    /**
     * Creates a new Ticker instance.
     *
     * @param {number} fps - Frames per second (default: 60).
     * @param {boolean} autoStart - Automatically start the ticker (default: true).
     */
    constructor(fps?: number, autoStart?: boolean);
    /**
     * Length of a tick in milliseconds. The denominator is your desired framerate.
     * e.g. 1000 / 20 = 20 fps,  1000 / 60 = 60 fps
     * @type {number}
     */
    tickLengthMs: number;
    /**
     * Timestamp of each loop.
     * @type {number}
     */
    previousTick: number;
    /**
     * Number of times $Ticker gets called.
     * @type {number}
     */
    actualTicks: number;
    /**
     * Store the time from the start.
     * @type {number}
     */
    startTime: number;
    /**
     * Start the clock.
     *
     * @param {number} fps - Frames per second (default: 60).
     */
    start(fps?: number): void;
    /**
     * Stop the clock.
     */
    stop(): void;
    /**
     * Check if the clock is running.
     *
     * @returns {boolean} - True if the clock is running, false otherwise.
     */
    isRunning(): boolean;
    /**
     * Get the last delta value.
     *
     * @returns {number} - The last delta value.
     */
    getDelta(): number;
    /**
     * Get the total elapsed time since the clock started.
     *
     * @returns {number} - The total elapsed time.
     */
    getElapsedTime(): number;
    /**
     * Set a callback function to be called on each tick.
     *
     * @param {function} onTickCallback - The callback function.
     */
    onTick(onTickCallback: Function): void;
    /**
     * Disable high accuracy to save some cpu power.
     * This is very useful while developing.
     * */
    disableHighAccuracy(): void;
    /**
     * Enable hight accuracy.
     * Much more precise but uses much more cpu power.
     * */
    enableHighAccuracy(): void;
    #private;
}
