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
    marginTop: -20,
  },
  title: {
    marginTop: 20,
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    flexBasis: '33.33%',
    fontWeight: '600',
    whiteSpace: 'nowrap',
    display: 'inline-flex',
    alignItems: 'center',
    paddingRight: theme.typography.pxToRem(20)
  },
  subheading: {
    fontSize: theme.typography.pxToRem(18),
    flexBasis: '33.33%',
    fontWeight: '300',
    whiteSpace: 'nowrap',
    display: 'inline-flex',
    alignItems: 'center',
    paddingRight: theme.typography.pxToRem(20)
  },
  avatar: {
    margin: 10,
  },
});

export default styles;
