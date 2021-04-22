import { useState, useEffect } from 'react';
import { interval, fromEvent, timer } from 'rxjs';
import { buffer, filter, debounceTime, map } from 'rxjs/operators';

function App() {
  const [time, setTime] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  const count = timer(0, 1000);

  useEffect(() => {
    if (isCounting) {
      const timer = count.subscribe((val) => setTime(time + val));
      return () => timer.unsubscribe();
    }
    // eslint-disable-next-line
  }, [isCounting]);

  useEffect(() => {
    const clicks$ = fromEvent(document.getElementById('waitBtn'), 'click');
    clicks$
      .pipe(
        buffer(clicks$.pipe(debounceTime(300))),
        map((clicks) => clicks.length),
        filter((clickArray) => clickArray >= 2)
      )
      .subscribe(() => setIsCounting(false));
    return () => interval.unsubscribe();
  }, []);

  const toggleTimer = () => {
    if (isCounting) {
      setIsCounting(false);
      setTime(0);
    } else {
      setIsCounting(true);
    }
  };

  const resetTimer = () => {
    setTime(0);
    setIsCounting(true);
  };

  const formatTime = () => {
    const Seconds = `0${time % 60}`.slice(-2);
    const Minutes = `0${Math.floor(time / 60) % 60}`.slice(-2);
    const Hours = `0${Math.floor(time / 3600)}`.slice(-2);

    return `${Hours} : ${Minutes} : ${Seconds}`;
  };

  return (
    <div className="container mt-5" style={{ width: '25rem' }}>
      <div className="card">
        <div className="card-header">Stopwatch App</div>
        <div className="pt-0 d-flex flex-column align-items-center">
          <div className="fs-1 m-3">{formatTime()}</div>
          <div className="btn-group custom-btn-group" role="group">
            <button
              type="button"
              className="btn-outline-success"
              onClick={toggleTimer}
            >
              {isCounting ? 'Stop' : 'Start'}
            </button>
            <button
              type="button"
              className="btn-outline-success"
              id="waitBtn"
            >
              Wait
            </button>
            <button
              type="button"
              className="btn-outline-success"
              onClick={resetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
