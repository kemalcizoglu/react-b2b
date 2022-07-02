import { createSlice } from '@reduxjs/toolkit'
import data from './../helpers/Data';

export const site = createSlice({

  name: 'site',
  initialState: {
    dark: false,
    language: 'tr',
    isLogged:false,
    token:'',
    admin_token:'',
    userName:'',
    data: data,
    cart:[]
  },

  reducers: {
    setDarkMode: state => {
      state.dark = !state.dark
    },
    setLanguage: (state, action) => {
      state.language = action.payload
    },
    setIsLogged: (state, action) => {
      state.isLogged = action.payload
    },
    setToken: (state, action) => {
      state.token = action.payload
    },
    setAdminToken: (state, action) => {
      state.admin_token = action.payload
    },
    setCart(state, action) {
      state.cart.push(action.payload);
    },
    removeCart(state, action) {
      state.cart = action.payload;
    },  
    setUserName: (state, action) => {
      state.userName = action.payload
    }  
  }
})

export const { setDarkMode, setLanguage, setIsLogged, setToken, setUserName, setCart, removeCart, setAdminToken } = site.actions
export default site.reducer