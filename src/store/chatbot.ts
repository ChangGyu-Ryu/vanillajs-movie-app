import { Store } from '../core/ryucro'

interface State {
  chatText: string
  messages: Message[]
  loading: boolean
}
interface Message {
  role: 'assistant' | 'user'
  content: string
}
const defaultMessages: Message[] = [
  { role: 'assistant', content: '좋아하는 영화 장르나 제목을 알려주세요.'}
]

const store = new Store<State>({
  chatText: '',
  messages: defaultMessages,
  loading: false
}) 

export default store
export const sendMessages = async () => {
  if (!store.state.chatText.trim()) return
  if (store.state.loading) return
  store.state.loading = true
  store.state.messages = [
    ...store.state.messages,
    { role: 'user', content: store.state.chatText }
  ]
  try {
    const res = await fetch('/api/chatobt', {
      method: 'POST',
      body: JSON.stringify({
        messages: store.state.messages
      })
    })
    const message = await res.json()
    store.state.messages = [
      ...store.state.messages,
      message
    ]
    store.state.chatText = ''
  } catch (error) {
    console.log('sendMessages error:', error)
  } finally {
    store.state.loading = false
  }
}
export const resetMessages = () => {
  store.state.messages = defaultMessages
}
