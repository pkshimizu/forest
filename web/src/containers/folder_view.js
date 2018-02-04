import { connect } from 'react-redux'
import CardView from "../components/folder_view/card_view";
import actions from "../actions";

const mapStateToProps = (state, ownProps) => {
  return {
    files: [
      {
        uuid: '1234567890',
        name: 'file name1'
      },
      {
        uuid: '1234567891',
        name: 'file name2'
      },
    ]
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadFiles: () => {
      dispatch(actions.beginLoadFiles());
      dispatch(actions.loadFiles());
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardView)