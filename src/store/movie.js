import axios from 'axios'
import _uniqBy from 'lodash/uniqBy'
// import { reject, resolve } from 'q'

export default {
    namespaced: true,
    state: () => ({
        movies: [],
        message:'Serch for the movie title!',
        loading: false,
        theMovie: {}
    }),
    getters: {},
    mutations: {
        updateState(state, payload) {
            Object.keys(payload).forEach(key => {
                state[key] = payload[key]
            })
        },
        resetMovies(state) {
            state.movies = []
            state.loading = false
        }
    },
    actions: {
        async serchMovies({ state, commit }, payload) {
            if (state.loading) {
                return 
            }

            commit('updateState', {
                message:'',
                loading: true
            })
            
            try {
                const res = await _fetchMovie({
                    ...payload,
                    page: 1
                })
                const { Search, totalResults } = res.data
                commit('updateState', {
                    movies: _uniqBy(Search, 'imdbID')
                })
                console.log(totalResults)
                console.log(typeof totalResults)
    
                const total = parseInt(totalResults, 10)
                const pageLength = Math.ceil(total / 10)
    
                // 추가 요청 전송
                if (pageLength > 1) {
                    for (let page = 2; page <= pageLength; page += 1) {
                        if(page > (payload.number / 10)) break
                        const res = await _fetchMovie ({
                            ...payload,
                            page
                        })
                        const { Search } = res.data
    
                        commit('updateState', {
                            movies: [
                                ...state.movies, 
                                ..._uniqBy(Search, 'imdbID')
                            ]
                        })
                    }
                }

            }
            catch (message) {
                commit('updateState', {
                    movies: [],
                    message
                })
            } finally {
                commit ('updateState', {
                    loading: false
                })
            }
        },
        async serchMovieWithId({state, commit}, payload) {
            if (state.loading) return

            commit('updateState', {
                theMovie: {},
                loading: true
            })

            try {
                const res = await _fetchMovie(payload)
                commit('updateState', {
                    theMovie: res.data
                })
                console.log(res)
            }
            catch(error) {
                commit('updateState', {
                    theMovie: {}
                })
            } finally {
                commit('updateState', {
                    loading:false
                })
            }
        }
    }
}

function _fetchMovie(payload) {
    const { title, type, year, page, id} = payload
    const OMDB_API_KEY = '7035c60c'
    const url = id ? `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}` 
    : `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`

    return new Promise((resolve, reject) => {
        axios.get(url)
            .then(res => {
                if (res.data.Error) {
                    reject(res.data.Error)
                }
                resolve(res)
            })
            .catch(err => {
                reject(err.message)
            })
    })
}