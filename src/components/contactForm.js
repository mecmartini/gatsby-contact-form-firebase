import React, { Component } from 'react'
import { getFirebase } from "../utils/firebase";

class ContactForm extends Component {
  state = {
    submit: false,
    subject: "",
    name: "",
    email: "",
    phone: "",
    message: "",
    database: null,
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    const { database } = this.state;
    if (database) {
      database.collection('contact').add({
        subject: this.state.subject,
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        message: this.state.message,
      });
    }

    this.setState({
      submit: true,
      subject: "",
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  }

  componentDidUpdate() {
    const { database } = this.state;
    if (!database) {
      const lazyApp = import('firebase/app')
      const lazyDatabase = import('firebase/firestore')

      Promise.all([lazyApp, lazyDatabase]).then(([firebase]) => {
        const database = getFirebase(firebase).firestore()
        this.setState({ database: database })
      })
    }

    const { submit } = this.state;

    if (submit) {
      setTimeout(() => {
        this.setState({ submit: !submit });
      }, 4000);
    }
  }

  render() {
    const { submit } = this.state;

    return(
      <section>
        { submit &&
          <p>The message has been sent!</p>
        }

        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              required
              type="text"
              name="subject"
              value={this.state.subject}
              onChange={this.handleInputChange}
              placeholder="Subject"
            />
          </div>

          <div>
            <input
              required
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              placeholder="Name"
            />
          </div>

          <div>
            <input
              required
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              placeholder="Email"
            />
          </div>

          <div>
            <textarea
              required
              type="text"
              name="message"
              value={this.state.message}
              onChange={this.handleInputChange}
              placeholder="Message"
            />
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </section>
    )
  }
}


export default ContactForm;
