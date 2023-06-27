import { Box, Stack } from "@mui/system";

import { Header } from "../Header/header";

export const MainLayout = ({ children }) => {
    return (
        <>
            <Stack sx={{ width: "100vw", height: "auto" }}>

                <Header />
                <Box sx={{ width: "100%", mt: "15vh", height: "80vh" }}>
                    {children}
                </Box>
            </Stack>
        </>
    );
};





