import React from "react";
import "./registrations.css"

import { Box, Stack, TextField, Typography } from "@mui/material";

export const Registrations = () => {
    return (
        <>
            <Typography
                sx={{
                    minHeight: "100vh",
                    padding: "5rem 9% 2rem",
                    backgroundColor: "rgb(55, 59, 59)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    overflow: 'hidden',
                }}
            >

                <h2>inscrições abertas para um novo Legendário </h2>
                <Box>


                    <div className="element-style">

                        <h2 to={{ color: 'red', margiTop: '', backgroundColor: 'red' }}>Registro Legendários</h2>
                    </div>
                </Box>

            </Typography>

        </>
    )
}