import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import EmailIcon from "@mui/icons-material/Email";
import Header from "../../components/Header";
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Content = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="" subtitle="" />
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(4, 1fr)"
        gridAutoRows="150px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Grid item xs={12} md={8} lg={4}>
        <Card>
        <CardActionArea>
        <Box
          gridColumn="span 12"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <EmailIcon  sx={{ color: colors.greenAccent[600], fontSize: "60px" }}/>
          </Typography>
          <Typography variant="body2" color="text.secondary">
              Marketing
          </Typography>
          </CardContent>
        </Box>
        </CardActionArea>
        </Card>
        </Grid>
      </Box>
    </Box>
  );
};
export default Content;