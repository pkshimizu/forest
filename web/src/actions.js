export const actionTypes = {
  BEGIN_LOAD_FILES: 'BEGIN_LOAD_FILES',
  LOAD_FILES: 'LOAD_FILES',
  LOAD_FILES_SUCCESS: 'LOAD_FILES_SUCCESS',
}

export default {
  beginLoadFiles: () => {
    return {
      type: actionTypes.BEGIN_LOAD_FILES
    }
  },
  loadFiles: () => {
    return {
      type: actionTypes.LOAD_FILES,
      payload: {
        request: {
          url: '/api/files/'
        }
      }
    }
  }
}