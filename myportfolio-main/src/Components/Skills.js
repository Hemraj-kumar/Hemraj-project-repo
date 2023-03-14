import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import { CircularProgress } from '@mui/material';
import Project from './Project';
import Typography from '@mui/material/Typography';
import Nav from './Nav';
export default function RowAndColumnSpacing() {
  return (
    <Box> 
      <Box>
        <Nav/>
        <div>Skills</div>
      </Box>
        <Box sx={{ width: '50%',marginLeft:'475px' ,marginTop:"2rem",flexGrow:'1'}}>
          <Grid container rowSpacing={8} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
            <Grid xs={6} sm={3}>
              <Typography position='relative' style={{textAlign:"center"}}>Java</Typography><br/>
              <Box display='flex' justifyContent='center' alignItems='center'>
                  <CircularProgress variant='determinate' size="100px" value={85}/>
                  <Typography position='absolute'>{85}%</Typography>
              </Box>
            </Grid>
            <Grid xs={6} sm={3}>
            <Typography position='relative' style={{textAlign:"center"}}>C</Typography><br/>
              <Box display='flex' justifyContent='center' alignItems='center'>
                    <CircularProgress variant='determinate' size="100px" value={85}/>
                    <Typography position='absolute'>{85}%</Typography>
                </Box>
            </Grid>
            <Grid xs={6} sm={3}>
            <Typography position='relative' style={{textAlign:"center"}}>Python</Typography><br/>
              <Box display='flex' justifyContent='center' alignItems='center'>
                      <CircularProgress variant='determinate' size="100px" value={78}/>
                      <Typography position='absolute'>{78}%</Typography>
                  </Box>
            </Grid>
            <Grid xs={6} sm={3}>
            <Typography position='relative' style={{textAlign:"center"}}>HTML</Typography><br/>
              <Box display='flex' justifyContent='center' alignItems='center'>
                      <CircularProgress variant='determinate' size="100px" value={85}/>
                      <Typography position='absolute'>{85}%</Typography>
                  </Box>
            </Grid>
            <Grid xs={6} sm={3}>
            <Typography position='relative' style={{textAlign:"center"}}>CSS</Typography><br/>
              <Box display='flex' justifyContent='center' alignItems='center'>
                      <CircularProgress variant='determinate' size="100px" value={80}/>
                      <Typography position='absolute'>{80}%</Typography>
                  </Box>
            </Grid>
            <Grid xs={6} sm={3}>
            <Typography position='relative' style={{textAlign:"center"}}>React.js</Typography><br/>
              <Box display='flex' justifyContent='center' alignItems='center'>
                      <CircularProgress variant='determinate' size="100px" value={80}/>
                      <Typography position='absolute'>{80}%</Typography>
                  </Box>
            </Grid>
            <Grid xs={6} sm={3}>
            <Typography position='relative' style={{textAlign:"center"}}>BootStrap & MUI</Typography><br/>
              <Box display='flex' justifyContent='center' alignItems='center'>
                      <CircularProgress variant='determinate' size="100px" value={75}/>
                      <Typography position='absolute'>{75}%</Typography>
                  </Box>
            </Grid>
            <Grid xs={6} sm={3}>
            <Typography position='relative' style={{textAlign:"center"}}>Javascript</Typography><br/>
              <Box display='flex' justifyContent='center' alignItems='center'>
                      <CircularProgress variant='determinate' size="100px" value={80}/>
                      <Typography position='absolute'>{80}%</Typography>
                  </Box>
            </Grid>
            <Grid xs={8} sm={3}>
            <Typography position='relative' style={{textAlign:"center"}}>MySql && MongoDb</Typography><br/>
              <Box display='flex' justifyContent='center' alignItems='center'>
                      <CircularProgress variant='determinate' size="100px" value={78}/>
                      <Typography position='absolute'>{78}%</Typography>
                  </Box>
            </Grid>
          </Grid>
        </Box>
      <br/><br/>
        <Project/>
    </Box>
  );
}