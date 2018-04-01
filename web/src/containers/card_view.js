import { connect } from 'react-redux'
import CardView from "../components/card_view";
import actions from "../actions";

const mapStateToProps = (state, ownProps) => {
  return {
    current_files: state.files.current_files,
    parents: state.files.parents,
    selected_uuids: state.files.selected_uuids
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadFiles: (uuid) => {
      dispatch(actions.loadFiles(uuid));
    },
    onOpenFile: (uuid) => {
      dispatch(actions.openFile(uuid));
    },
    selectFile: (uuid) => {
      dispatch(actions.selectFile(uuid));
    },
    clearSelectedFile: () => {
      dispatch(actions.clearSelectedFile());
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardView)