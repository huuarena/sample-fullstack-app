import CountryApi from '../../apis/country.js'
import slices from '../slices/index.js'

export const setCountry = async (dispatch, data) => {
  try {
    return dispatch(slices.country.actions.setData(data))
  } catch (error) {
    dispatch(slices.notify.actions.showNotify({ message: error.message, error: true }))
  }
}

export const getCountry = async (dispatch, id) => {
  try {
    let res = await CountryApi.findById(id)
    if (!res.success) throw res.error

    return dispatch(slices.country.actions.setData(res.data))
  } catch (error) {
    dispatch(slices.notify.actions.showNotify({ message: error.message, error: true }))
  }
}
