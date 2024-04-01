import { Box, Button, Paper, Typography } from "@mui/material";

export const Description = (props: any) => {
    const { onClose, description } = props;

    return (
        <Box sx={{ pl: 3, height: "auto" }}>
            {description === "" ? <></> : <Paper sx={{ p: 2, textAlign: "end" }} >
                <Typography sx={{ textAlign: "start" }}>{description}</Typography>
                <Button onClick={onClose}>Close</Button>
            </Paper>}
        </Box>
    );
};