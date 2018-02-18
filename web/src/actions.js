export const actionTypes = {
  LOAD_FILES: 'LOAD_FILES',
  LOAD_FILES_SUCCESS: 'LOAD_FILES_SUCCESS',
  OPEN_FILE: 'OPEN_FILE',
  OPEN_FILE_SUCCESS: 'OPEN_FILE_SUCCESS',
};

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
  },
  openFile: (uuid) => {
    return {
      type: actionTypes.OPEN_FILE,
      payload: {
        request: {
          url: `/api/files/${uuid}/application`
        }
      }
    }
  }
}