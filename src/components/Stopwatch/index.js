import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {isTimerStarted: false, seconds: 0}

  setTime = () => {
    this.setState(prevState => ({seconds: prevState.seconds + 1}))
  }

  onReset = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerStarted: false, seconds: 0})
  }

  onTimerStart = () => {
    this.timeInterval = setInterval(this.setTime, 1000)
    this.setState({isTimerStarted: true})
  }

  onTimerStop = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerStarted: false})
  }

  renderSeconds = () => {
    const {seconds} = this.state
    const sec = Math.floor(seconds % 60)
    if (sec > 9) {
      return sec
    }
    return `0${sec}`
  }

  renderMinutes = () => {
    const {seconds} = this.state
    const min = Math.floor(seconds / 60)
    if (min > 9) {
      return min
    }
    return `0${min}`
  }

  render() {
    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="stop-watch-heading">Stopwatch</h1>
          <div className="card-container">
            <div className="timer-logo-container">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <h1 className="timer-heading">Timer</h1>
            </div>
            <h1 className="time">
              {this.renderMinutes()}:{this.renderSeconds()}
            </h1>
            <div className="buttons-container">
              <button
                onClick={this.onTimerStart}
                type="button"
                className="start-btn"
              >
                Start
              </button>
              <button
                onClick={this.onTimerStop}
                type="button"
                className="stop-btn"
              >
                Stop
              </button>
              <button
                onClick={this.onReset}
                type="button"
                className="reset-btn"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
