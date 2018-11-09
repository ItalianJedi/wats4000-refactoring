import Vue from 'vue'
import Router from 'vue-router'
import CitySearch from '@/components/CitySearch'
import CurrentWeather from '@/components/CurrentWeather'
import Forecast from '@/components/Forecast'
import ErrorsList from '@/components/ErrorsList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CitySearch',
      component: CitySearch
    },
    {
      path: '/:cityId/current',
      name: 'CurrentWeather',
      component: CurrentWeather
    },
    {
      path: '/:cityId/forecast',
      name: 'Forecast',
      component: Forecast
    },
    {
      path: '/:cityId/errorsList',
      name: 'ErrorsList',
      component: ErrorsList
    }
  ]
})
