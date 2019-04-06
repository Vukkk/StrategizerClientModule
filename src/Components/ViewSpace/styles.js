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
    padding: 0,
    marginTop: 20,
    marginBottom: 20,
  },
  viewSpace:{
    marginTop: 16,
  },
  substrategycard: {
    flexGrow: 1,
    padding: 16,
    marginTop: `${theme.spacing.unit * 1}px`,
    marginBottom: `${theme.spacing.unit * 1}px`,
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
    margin: 2,
  },
  strategyAvatar: {
    margin: 0,
    width: 18,
    height: 18,
  },
  backLink: {
    textDecoration: 'none',
    margin: `0 ${theme.spacing.unit * 1}px 0`,
    color: theme.palette.secondary.main
  },
  nested: {
    paddingLeft: theme.spacing.unit * 3,
  },
  strategyItem: {
    width: '100%'
  },
  strategyList: {
    padding: theme.spacing.unit * 1
  },
  teamsList:{
    padding: theme.spacing.unit * 5
  },
  strategyDocContainer: {
    padding: '15px 24px',
  },
  formCard: {
    padding: theme.spacing.unit * 3,
  },
  formPhaseCard: {
    padding: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 5
  },
  editNext:{
    paddingTop: 10,
    paddingRight: 0,
    fontSize: 36,
  },
  editBttnContainer:{
    paddingRight: 5,
  },
  editBttn:{
    color: '#666',
    padding: 0,
    minWidth: 32,
  },
  editBttnLabel:{
    fontSize: 20,
  },
  codeRenderCont:{
    padding: '1px 25px',
    backgroundColor: '#EEE',
    width: '100%',
  },
  codeRender: {
    padding: 0,
    '&p':{
      marginBlockStart: 0,
      marginBlockEnd: 0
    }
  },
  condButtonContainer: {
    top: '25%'
  },
  nested: {
    paddingLeft: theme.spacing.unit * 3,
  },
  nestedSituation: {
    paddingLeft: theme.spacing.unit * 5,
    backgroundColor: '#F9F9F9'
  },
  strategyItem: {
    width: '100%'
  },
  condRoot: {
    backgroundColor: '#888',
    '&:hover':{
      backgroundColor: '#444'
    },
    cursor:'pointer'
  },
  itemTitleRoot: {
    backgroundColor: 'none'
  },
  itemFirstTier:{
    backgroundColor: '#CCC'
  },
  condItemText: {
    width: '100%'
  },
  primary:{
    color: '#fff',
    backgroundColor: 'none',
    fontWeight: '700',
    textTransform: 'uppercase'
  },
  itemTopTier:{
    backgroundColor: '#F1F1F1',
    "&$itemTopTierSelected": {
      backgroundColor: '#DDD'
    }
  },
  itemTopTierSelected:{},
  itemFirstTier:{
    backgroundColor: '#F9F9F9',
    "&$itemFirstTierSelected": {
      backgroundColor: '#E1E1E1'
    }
  },
  itemFirstTierSelected:{},
  itemSecondTier:{
    backgroundColor: '#FCFCFC',
    "&$itemSecondTierSelected": {
      backgroundColor: '#FFF'
    }
  },
  itemSecondTierSelected:{},
  strategyList: {
    padding: theme.spacing.unit * 1,
    width: '100%'
  }
});

export default styles;
