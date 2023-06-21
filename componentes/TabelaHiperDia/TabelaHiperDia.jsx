import React, { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';

const TabelaHiperDia = ({
  data,
  colunas,
  }) => {
    const styles = {
        padding:40,
        height: "fitContent",
        width: '93%',
        marginLeft : '45px'
    }
    const rowsID = data.map((row, index) => ({ ...row, id: index }));
    return (
        <>
            <div style={styles}>
                <DataGrid
                    rows={rowsID}
                    columns={colunas}
                    disableColumnMenu
                    initialState={{
                        ...data.initialState,
                        pagination: { paginationModel: { pageSize: 100 } },
                    }}                                
                    pageSizeOptions={[10, 30, 45, 100]}
                    rowsPerPageOptions={[]}
                    getRowId={(row) => row.id}
                    rowHeight={35}
                    sx={{
                        '& .MuiDataGrid-columnHeaderTitle': {
                            textOverflow: "clip",
                            whiteSpace: "break-spaces",
                            lineHeight: 1.2,
                            textAlign: "center",
                            fontFamily : "Inter !important",
                            fontSize : "12px !important",
                            fontWeight : 400,
                        },
                        '& .MuiDataGrid-columnHeaders': {
                            backgroundColor: "#C9D2D8",
                            marginBottom: "15px",
                            border: "none",
                            borderRadius: "10px",
                        },
                        '& .MuiDataGrid-withBorderColor': {
                            border: "none",
                        },
                        '& .MuiDataGrid-row': {
                            marginBottom: "5px",
                            fontFamily : "Inter !important",
                            fontSize : "14px !important",
                            backgroundColor : "#EFF5F9",
                            borderRadius: "10px",
                            padding: "4px",
                            height: "30px",
                            display: "flex",
                            justifyContent : "center",
                            alignItems: "center",
                            width: "98%"
                        },
                        '& .MuiDataGrid-root': {
                            border: "none",
                            borderWidth: "0px"
                        },
                        '& .MuiDataGrid-iconSeparator': {
                            display: 'none',
                        },
                        '& .MuiDataGrid-iconButtonContainer': {
                            display: 'none',
                        },
                        '& .MuiToolbar-root': {
                            display: 'none',
                        },

                        border : 0,

                    }}
                />
            </div>
        </>
)}
  
export {TabelaHiperDia};