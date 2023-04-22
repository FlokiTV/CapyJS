/**
 * Ticker class that keeps track of time and provides a loop event for every tick.
 *
 * @class
 * @public
 */
export class $Ticker {
  /**
   * Length of a tick in milliseconds. The denominator is your desired framerate.
   * e.g. 1000 / 20 = 20 fps,  1000 / 60 = 60 fps
   * @type {number}
   */
  tickLengthMs = 1000 / 60;

  /**
   * Timestamp of each loop.
   * @type {number}
   */
  previousTick = Date.now();

  /**
   * Number of times $Ticker gets called.
   * @type {number}
   */
  actualTicks = 0;

  /**
   * Store the delta value.
   * @type {number}
   * @private
   */
  #delta = 0;

  /**
   * Store the time from the start.
   * @type {number}
   */
  startTime;

  /**
   * Store if the clock is running or not.
   * @type {boolean}
   * @private
   */
  #isRunning = false;

  /**
   * Enable high accuracy mode (default: true).
   * High accuracy mode uses much more CPU power, but provides much more precise tick intervals.
   * @type {boolean}
   * @private
   */
  #highAccuracy = true;

  /**
   * Callback function to be called on each tick.
   * @type {function}
   * @private
   */
  #onTickCallback;

  /**
   * Creates a new Ticker instance.
   *
   * @param {number} fps - Frames per second (default: 60).
   * @param {boolean} autoStart - Automatically start the ticker (default: true).
   */
  constructor(fps = 60, autoStart = true) {
    if (autoStart) this.start(fps);
  }

  /**
   * Start the clock.
   *
   * @param {number} fps - Frames per second (default: 60).
   */
  start(fps = 60) {
    if (fps <= 25) this.disableHighAccuracy();
    this.tickLengthMs = 1000 / fps;
    this.#isRunning = true;
    this.startTime = Date.now();
    this.#loop();
  }

  /**
   * Stop the clock.
   */
  stop() {
    this.#isRunning = false;
  }

  /**
   * Check if the clock is running.
   *
   * @returns {boolean} - True if the clock is running, false otherwise.
   */
  isRunning() {
    return this.#isRunning;
  }

  /**
   * Get the last delta value.
   *
   * @returns {number} - The last delta value.
   */
  getDelta() {
    return this.#delta;
  }

  /**
   * Get the total elapsed time since the clock started.
   *
   * @returns {number} - The total elapsed time.
   */
  getElapsedTime() {
    return Date.now() - this.startTime;
  }

  /**
   * Set a callback function to be called on each tick.
   *
   * @param {function} onTickCallback - The callback function.
   */
  onTick(onTickCallback) {
    this.#onTickCallback = onTickCallback;
  }

  /**
   * The ticker loop function.
   *
   * @private
   */
  #loop() {
    if (!this.#isRunning) return;
    var now = Date.now();
    this.actualTicks++;
    if (this.previousTick + this.tickLengthMs <= now) {
      this.#delta = (now - this.previousTick) / 1000;
      this.previousTick = now;
      if (this.#onTickCallback) this.#onTickCallback(this.#delta);
      this.actualTicks = 0;
    }
    if (this.#highAccuracy) {
      if (Date.now() - this.previousTick < this.tickLengthMs - 16) {
        setTimeout(() => this.#loop());
      } else {
        setImmediate(() => this.#loop());
      }
    } else {
      setTimeout(() => {
        this.#loop();
      }, this.tickLengthMs);
    }
  }
  /**
   * Disable high accuracy to save some cpu power.
   * This is very useful while developing.
   * */
  disableHighAccuracy() {
    this.#highAccuracy = false;
  }
  /**
   * Enable hight accuracy.
   * Much more precise but uses much more cpu power.
   * */
  enableHighAccuracy() {
    this.#highAccuracy = true;
  }
}
