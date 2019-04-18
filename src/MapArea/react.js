const CommentListWithSubscription = withSubscription(
  CommentList,
  (DataSource) => DataSource.getComments()
)

function logProps(WrappedComponent) {
  return class extends React.Compoent {
    componentWillReceiveProps(nextProps) {
      console.log('Current props', this.props);
      console.log('Next props', nextProps);
    }
    render() {
      return <WrappedComponent {...this.props}/>
    }
  }
}

const enhance = connect(commenListSelector, commentListActions);