import NextLink from "next/link";
import { ShopLayout } from "../../components/layouts";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Chip, Grid, Link, Typography } from "@mui/material";

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "fullname", headerName: "Nombre Completo", width: 300 },

    {
        field: "paid",
        headerName: "Estado",
        description: "Muestra informacion si esta pagada la orden o no",
        width: 200,
        renderCell: (params: GridValueGetterParams) => {
            return params.row.paid ? (
                <Chip color="success" label="Pagada" variant="outlined" />
            ) : (
                <Chip color="error" label="No pagada" variant="outlined" />
            );
        },
    },
    {
        field: "orden",
        headerName: "Ver Orden",
        width: 200,
        sortable: false,
        renderCell: (params: GridValueGetterParams) => {
            return (
                <NextLink href={`/orders/${params.row.id}`} passHref>
                    <Link underline="always">Ver Orden</Link>
                </NextLink>
            );
        },
    },
];

const row = [
    { id: 1, paid: true, fullname: "Victor Alvarez" },
    { id: 2, paid: false, fullname: "Samantha Verde" },
    { id: 3, paid: true, fullname: "Jose Alvarez" },
    { id: 4, paid: true, fullname: "Esteller Silva" },
    { id: 5, paid: true, fullname: "Pepito Contrera" },
    { id: 6, paid: true, fullname: "Hailyn Colmenarez" },
];

const HistoryPage = () => {
    return (
        <ShopLayout
            title="Historial de ordenes"
            pageDescription="Historial de ordenes del cliente"
        >
            <Typography variant="h1" component="h1">
                Historial de ordenes
            </Typography>

            <Grid item xs={12} sx={{ height: 650, width: "100%" }}>
                <DataGrid
                    rows={row}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                />
            </Grid>
        </ShopLayout>
    );
};

export default HistoryPage;
