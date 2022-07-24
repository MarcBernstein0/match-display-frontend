import { Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';


interface TableToolbarProps {
    gameName: string;
}

export function TableToolBar({ gameName }: TableToolbarProps){
    return (
        <Toolbar 
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1},
            }}
        >
            <Typography
                sx={{ flex: '1 1 100%' }}
                variant="h6"
                id="tableTittle"
                component="div"
            >
                gameName
            </Typography>
        </Toolbar>
    )
}
