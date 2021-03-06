import markets from '@/store/modules/marketsMonitor'
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    markets
  }
})

const initialState = JSON.parse(JSON.stringify(store.state))

describe('markets module: actions', () => {
  beforeEach(() => {
    store.replaceState(JSON.parse(JSON.stringify(initialState)))
  })

  it('changeSearchStr', async done => {
    await store.commit('markets/UPDATE_SEARCH_STR', 'find')
    expect(store.state.markets.searchStr).toBe('find')
    done()
  })

  it('toggleFavourite', async done => {
    const base = 'USD'
    const quote = 'BTC'
    await store.dispatch('markets/toggleFavourite', {
      base,
      quote
    })
    expect(store.state.markets.favourites).toEqual({
      USD: ['BTC']
    })
    done()
  })

  it('setCurrentBase: currentBase = favourites', async done => {
    const base = 'favourites'

    await store.dispatch('markets/setCurrentBase', base)
    expect(store.state.markets.currentBase).toBe('favourites')
    done()
  })

  it('setCurrentBase: currentBase = other', async done => {
    const base = 'BTC'

    await store.dispatch('markets/setCurrentBase', base)
    expect(store.state.markets.currentBase).toBe('BTC')
    done()
  })
})
