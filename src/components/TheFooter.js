import { Component } from '../core/ryucro'

export default class TheFooter extends Component {
  constructor() {
    super({
      tagName: 'footer'
    })
  }
  render() {
    this.el.innerHTML = /* html */ `
      <div>
        <a href="https://github.com/ChangGyu-Ryu/vanillajs-movie-app" target="_blank">
          GitHub Repository
        </a>
      </div>
      <div>
        <a href="https://github.com/ChangGyu-Ryu/" target="_blank">
          ${new Date().getFullYear()}
          RYUCRO
        </a>
      </div>

    `
  }
}