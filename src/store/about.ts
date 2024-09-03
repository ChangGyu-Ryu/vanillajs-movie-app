import { Store } from "../core/ryucro";

interface State {
  photo: string
  name: string
  email: string
  blog: string
  github: string
  repository: string
}

export default new Store({
  photo: 'https://raw.githubusercontent.com/ChangGyu-Ryu/vanillajs-movie-app/main/src/images/logo.png',
  name: 'RYUCRO / RyuChangGyu',
  email: 'ckue21@gmail.com',
  blog: 'https://velog.io/@micaelknife/posts',
  github: 'https://github.com/ChangGyu-Ryu',
  repository: 'https://github.com/ChangGyu-Ryu/vanillajs-movie-app'
})

