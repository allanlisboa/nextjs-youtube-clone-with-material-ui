import { Button } from '@material-ui/core'
import { Typography, Grid, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import Layout from 'components/Layout'

const useStyles = makeStyles({
  pageTitle: {
    fontWeight: 800,
    marginBottom: 10
  },
  itemThumb: {
    width: '100%'
  },
  itemTitle: {
    fontWeight: 800
  }
})

const videoList = [
  {
    id: 1,
    title: 'Criando uma rede social do zero - Feed de postagens #Aula01',
    channel: 'Allan Lisboa',
    views: '11 mi de visualizações',
    date: 'há uma semana',
    avatar: '/assets/avatar/jpeg',
    thumb: '/assets/thumb1.png'
  },
  {
    id: 2,
    title: 'Criando uma rede social do zero - Feed de postagens #Aula02',
    channel: 'Allan Lisboa',
    views: '11 mi de visualizações',
    date: 'há uma semana',
    avatar: '/assets/avatar/jpeg',
    thumb: '/assets/thumb2.png'
  },
  {
    id: 3,
    title: 'Criando uma rede social do zero - Feed de postagens #Aula03',
    channel: 'Allan Lisboa',
    views: '11 mi de visualizações',
    date: 'há uma semana',
    avatar: '/assets/avatar/jpeg',
    thumb: '/assets/thumb3.png'
  },
  {
    id: 4,
    title: 'Criando uma rede social do zero - Feed de postagens #Aula04',
    channel: 'Allan Lisboa',
    views: '11 mi de visualizações',
    date: 'há uma semana',
    avatar: '/assets/avatar/jpeg',
    thumb: '/assets/thumb4.png'
  },
  {
    id: 5,
    title: 'Criando uma rede social do zero - Feed de postagens #Aula05',
    channel: 'Allan Lisboa',
    views: '11 mi de visualizações',
    date: 'há uma semana',
    avatar: '/assets/avatar/jpeg',
    thumb: '/assets/thumb5.png'
  },
  {
    id: 6,
    title: 'Criando uma rede social do zero - Feed de postagens #Aula06',
    channel: 'Allan Lisboa',
    views: '11 mi de visualizações',
    date: 'há uma semana',
    avatar: '/assets/avatar/jpeg',
    thumb: '/assets/thumb6.png'
  },
  {
    id: 7,
    title: 'Criando uma rede social do zero - Feed de postagens #Aula07',
    channel: 'Allan Lisboa',
    views: '11 mi de visualizações',
    date: 'há uma semana',
    avatar: '/assets/avatar/jpeg',
    thumb: '/assets/thumb7.png'
  },
  {
    id: 8,
    title: 'Criando uma rede social do zero - Feed de postagens #Aula08',
    channel: 'Allan Lisboa',
    views: '11 mi de visualizações',
    date: 'há uma semana',
    avatar: '/assets/avatar/jpeg',
    thumb: '/assets/thumb8.png'
  }
]

const IndexPage = () => {
  const classes = useStyles()

  return (
    <Layout title="Youtube">
      <Box m={2}>
        <Typography variant="h5" className={classes.pageTitle}>
          Recomendados
        </Typography>
        <Grid container spacing={2}>
          {videoList.map(item => (
            <Grid key={item.id.toString()} item xs={12} sm={6} md={4} lg={3}>
              <img src={item.thumb} alt="" className={classes.itemThumb} />
              <Box>
                <Typography
                  color="textPrimary"
                  variant="body1"
                  className={classes.itemTitle}
                >
                  {item.title}
                </Typography>
                <Typography color="textSecondary" variant="body2">
                  {item.channel}
                </Typography>
                <Typography color="textSecondary" variant="body2">
                  {item.views} • {item.date}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  )
}

export default IndexPage
