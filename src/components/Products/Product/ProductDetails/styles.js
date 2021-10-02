import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    flexGrow: 1
  },
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '5%',
    textAlign: 'center'
  },
  grid: {
    padding: theme.spacing(2),
    wordBreak: 'break-all',
  },
  form: {
    wordBreak: 'break-all',
    position: 'fixed'
  },
  select: {
    marginBottom: '10%',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
}));