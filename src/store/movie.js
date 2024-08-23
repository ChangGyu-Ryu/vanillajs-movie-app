import { Store } from '../core/ryucro'

const store = new Store({
  searchText: '',
  page: 1,
  movies: []
})

export default store
export const searchMovies = async page => { 
  if (page === 1) {
    store.state.page = 1
    store.state.movies = []
  }
  const res = await fetch(`https://omdbapi.com?i=tt3896198&apikey=c7cd1786&s=${store.state.searchText}&page=${page}`)
  const { Search } = await res.json()
  store.state.movies = [
    ...store.state.movies,
    ...Search
  ]
}
