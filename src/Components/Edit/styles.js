const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    padding: 0,
    margin: 0,
  },
  tabTitle: {
    width: '25%',
    maxWidth: 'none',
  },
  card: {
    flexGrow: 1,
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonList: {
    margin: theme.spacing.unit,
    float: 'right',
  },
  buttonGrid: {
    marginTop: 0,
  },
  title: {
    marginTop: 20,
  },
  backLink: {
    display: 'block',
    textDecoration: 'none',
    margin: `${theme.spacing.unit * 3}px 0 0`,
    color: theme.palette.secondary.main
  },
  expansionSituation: {
    backgroundColor: 'rgba(0,0,0,.03)',
  },
  addButton:{
    marginTop: `${theme.spacing.unit * 3}px`
  }
});

export default styles;
