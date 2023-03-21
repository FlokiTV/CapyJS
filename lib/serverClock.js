export class ServerClock {
  /**
   * Length of a tick in milliseconds. The denominator is your desired framerate.
   * e.g. 1000 / 20 = 20 fps,  1000 / 60 = 60 fps
   */
  tickLengthMs = 1000 / 60;
  /** timestamp of each loop */
  previousTick = Date.now();
  /** number of times ServerClock gets called */
  actualTicks = 0;
  /** store the delta value */
  _delta = 0;
  /** store the time from the start */
  startTime;
  /** store is the clock is running or not */
  _isRunning = false;
  _highAccuracy = true;
  _onTickCallback;
  constructor(fps = 60, autoStart = true) {
    if (autoStart) this.start(fps);
  }
  /**
   * Start the clock.
   * @param fps Interval in milliseconds. Default is 60 fps.
   */
  start(fps = 60) {
    if (fps <= 25) this.disableHighAccuracy();
    this.tickLengthMs = 1000 / fps;
    this._isRunning = true;
    this.startTime = Date.now();
    this.loop();
  }
  /** Stop the clock */
  stop() {
    this._isRunning = false;
  }
  /** Is clock running? */
  isRunning() {
    return this._isRunning;
  }
  /** Returns the last delta value. */
  getDelta() {
    return this._delta;
  }
  /** Keeps track of the total time that the clock has been running. */
  getElapsedTime() {
    return Date.now() - this.startTime;
  }
  /** Event listener for every new tick. */
  onTick(onTickCallback) {
    this._onTickCallback = onTickCallback;
  }
  loop() {
    if (!this._isRunning) return;
    var now = Date.now();
    this.actualTicks++;
    if (this.previousTick + this.tickLengthMs <= now) {
      this._delta = (now - this.previousTick) / 1000;
      this.previousTick = now;
      if (this._onTickCallback) this._onTickCallback(this._delta);
      this.actualTicks = 0;
    }
    if (this._highAccuracy) {
      if (Date.now() - this.previousTick < this.tickLengthMs - 16) {
        setTimeout(() => this.loop());
      } else {
        setImmediate(() => this.loop());
      }
    } else {
      setTimeout(() => {
        this.loop();
      }, this.tickLengthMs);
    }
  }
  /** Disable high accuracy to save some cpu power. This is very useful while developing. */
  disableHighAccuracy() {
    this._highAccuracy = false;
  }
  /** Enable hight accuracy. Much more precise but uses much more cpu power. */
  enableHighAccuracy() {
    this._highAccuracy = true;
  }
}
