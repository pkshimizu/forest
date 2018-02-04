export const actionTypes = {
  LOAD_FILES: 'LOAD_FILES',
  LOAD_FILES_SUCCESS: 'LOAD_FILES_SUCCESS',
}

export default {
  loadFiles: (uuid = '') => {
    return {
      type: actionTypes.LOAD_FILES,
      payload: {
        request: {
          url: `/api/files/${uuid}`
        }
      }
    }
  }
}