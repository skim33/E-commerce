import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height: 260,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'center',
  },
  subCardContent: {
    display: 'flex',
    marginTop: '-5%',
    marginLeft: '25%',
    color: 'gray',
    flexDirection: "column",
    justifyContent: 'center',
  },
  cardActions: {
    justifyContent: 'center',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
}));