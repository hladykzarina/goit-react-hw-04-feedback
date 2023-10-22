import React, { Component } from 'react';
import Feedback from './Feedback/Feedback';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import Statistic from './Statistic/Statistic';
import { Main } from './App.style';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedbacks = button =>
    this.setState(prevState => {
      return { [button]: prevState[button] + 1 };
    });

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback !== 0
      ? Math.ceil((good / totalFeedback) * 100) + '%'
      : 0;
  };

  render() {
    const values = Object.keys(this.state);
    const isfeedBack = Object.values(this.state).every(value => value === 0);
    return (
      <Main>
        <Section title="Please leave feedback">
          <Feedback values={values} countFeedbacks={this.countFeedbacks} />
        </Section>

        {!isfeedBack ? (
          <Section title="Statistic">
            <Statistic
              state={this.state}
              countTotalFeedback={this.countTotalFeedback}
              countPositiveFeedback={this.countPositiveFeedbackPercentage}
            />
          </Section>
        ) : (
          <Section>
            <Notification message="Click the button and share your experience using this app." />
          </Section>
        )}
      </Main>
    );
  }
}
