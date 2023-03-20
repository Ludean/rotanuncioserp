import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { useEffect, useState } from "react";
const URL_LOGIN= 'http://app.api.modulocontable.com/rest-api/controller/inventoryController.php';


const Inventory = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [row, setRow] = useState([]);
    useEffect(()=>{
            fetch(URL_LOGIN)
            .then((response)=>response.json())
            .then((json)=>setRow(json))
    },[]);
    console.log(row.filter((row)=> row != null));
    const columns = [
      { field: "id_kardex", headerName: "ID", flex: 0.5 },
      { field: "fecha", headerName: "Fecha" },
      {
        field: "documento",
        headerName: "Documento",
        flex: 1,
        cellClassName: "name-column--cell",
      },
      {
        field: "detalle",
        headerName: "Detalle"
      },
      {
        field: "tipomovimiento",
        headerName: "Tipo de movimiento",
        flex: 1,
      },
      {
        field: "cantidad",
        headerName: "Cantidad",
        flex: 1,
      },
      {
        field: "valorunitario",
        headerName: "Valor Unitario",
        flex: 1,
      },
      {
        field: "saldocantidad",
        headerName: "Salto Cantidad",
        flex: 1,
      },
      {
        field: "pro_nombre",
        headerName: "Nombre Producto",
        flex: 1,
      },
    ];
  
    return (
      <Box m="20px">
        <Header
          title="Inventario"
          subtitle=""
        />
        <Box
          m="40px 0 0 0"
          height="75vh"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${colors.grey[100]} !important`,
            },
          }}
        >
          <DataGrid
            rows={row.filter((row)=> row != null)}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
            getRowId={(row:any) => row.id_kardex}
          />
        </Box>
      </Box>
    );
  };
  
  export default Inventory;