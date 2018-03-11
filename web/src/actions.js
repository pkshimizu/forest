export const actionTypes = {
  LOAD_FILES: 'LOAD_FILES',
  OPEN_FILE: 'OPEN_FILE',
  SELECT_FILE: 'SELECT_FILE',
  CLEAR_SELECTED_FILE: 'CLEAR_SELECTED_FILE',
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
  },
  selectFile: (uuid) => {
    return {
      type: actionTypes.SELECT_FILE,
      payload: {
        uuid: uuid
      }
    }
  },
  clearSelectedFile: () => {
    return {
      type: actionTypes.CLEAR_SELECTED_FILE,
      payload: {
      }
    }
  }
}