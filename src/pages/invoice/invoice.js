import { Box, Button, TextField, Grid } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Header from "../../components/Header";

const Invoice = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  return (
    <Box m="20px">
        <Header title="Facturas" />
        <Box
        display="grid"
        gap="30px"
        gridTemplateColumns="repeat(2, minmax(0, 1fr))"
        sx={{
          "& > div": { gridColumn: isNonMobile ? undefined : "span 6" },
          //border: '1px dashed grey'
        }}>
        <Grid sx={{
                border: '1px dashed grey',
                m:"20px",
                width:"auto"
            }}
            container spacing={6}
            >
            <Grid item xs={11}>
                <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Nombre emisor"
                name="firstName"
                />
            </Grid>  
            <Grid item xs={3}>
                <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="dirección"
                name="firstName"
                />
            </Grid>
            <Grid item xs={3}>
                <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Teléfono"
                name="firstName"
                />
            </Grid>
            <Grid item xs={3}>
                <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Correo"
                name="firstName"
                />
            </Grid>
        </Grid>

        <Grid sx={{
                border: '1px dashed grey',
                m:"20px",
                width:"auto"
            }}
            container spacing={6}
            >
            <Grid item xs={8}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker />
            </LocalizationProvider>
            </Grid>  
            <Grid item xs={3}>
                <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Serie"
                name="firstName"
                />
            </Grid>
            <Grid item xs={3}>
                <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Adquiriente"
                name="firstName"
                />
            </Grid>
        </Grid>

        
        </Box>
        <Box
        display="grid"
        gap="30px"
        gridTemplateColumns="repeat(1, minmax(0, 1fr))"
        sx={{
          "& > div": { gridColumn: isNonMobile ? undefined : "span 12" },
          //border: '1px dashed grey'
        }}>
        <Grid sx={{
                border: '1px dashed grey',
                m:"20px",
                width:"auto"
            }}
            container spacing={2}
            >
            <Grid item xs={3}>
                <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="codigo"
                name="firstName"
                />
            </Grid>  
            <Grid item xs={3}>
                <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="descripción"
                name="firstName"
                />
            </Grid>
            <Grid item xs={2}>
                <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="cantidad"
                name="firstName"
                />
            </Grid>
            <Grid item xs={2}>
                <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Precio"
                name="firstName"
                />
            </Grid>
            <Grid item xs={2}>
            <Button  color="success" variant="contained">
                agregar
              </Button>
              <Button  color="error" variant="contained">
                Cancelar
              </Button>
            </Grid>
        </Grid>
            
        </Box>
        <Box
        display="grid"
        gap="30px"
        gridTemplateColumns="repeat(2, minmax(0, 1fr))"
        sx={{
          "& > div": { gridColumn: isNonMobile ? undefined : "span 6" },
          //border: '1px dashed grey'
        }}>
        <Grid sx={{
                border: '1px dashed grey',
                m:"20px",
                width:"auto"
            }}
            container spacing={6}
            >
            <Grid item xs={10}>
                <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Forma de pago"
                name="firstName"
                />
            </Grid>  
            <Grid item xs={11}>
                <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Nota"
                name="firstName"
                />
            </Grid>
        </Grid>
        </Box>
        <Box display="flex" justifyContent="end" mt="20px">
              <Button  color="success" variant="contained">
                Generar factura
              </Button>
              <Button color="secondary" variant="contained">
                Guardar como proforma
              </Button>
              <Button  color="error" variant="contained">
                Cancelar
              </Button>
        </Box>
    </Box>
  );
};

export default Invoice;
