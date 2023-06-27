
import React from "react";
import { Box, Stack, TextField, Typography } from "@mui/material";
import './ materials.css'


export const Oquelevarparatop = () => {

    return (
        <>
            <Typography sx={{
                display: 'flex',
                alignContent: 'center',
                justifyItems: 'center',
                position: 'relative',
                width: '100%'

            }}>
                <Stack className="logo-containe">
                    <h2 className="div-text-top">Tudo o que precisa levar <span>para o seu Top</span></h2>

                    <button>Encontre na Lista</button>
                </Stack>




            </Typography>

        </>
    )
}




