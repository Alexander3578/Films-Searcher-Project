import { SyntheticEvent } from "react"
import Alert from "@mui/material/Alert"
import { selectError, setErrorAC } from "@/app/app-slice"
import {useAppDispatch, useAppSelector} from '@/common/hooks';
import Snackbar from '@mui/material/Snackbar';

export const ErrorSnackbar = () => {
    const errorMsg = useAppSelector(selectError)
    const dispatch = useAppDispatch()

    const handleClose = (_: SyntheticEvent | Event, reason?: string) => {
        if (reason === "clickaway") {
            return
        }

        dispatch(setErrorAC({ error: null }))
    }

    return (
        <Snackbar
            open={!!errorMsg}
            autoHideDuration={6000}
            onClose={handleClose}
            anchorOrigin={{ horizontal: "center", vertical: "top" }}
        >
            <Alert onClose={handleClose} severity="error" variant="filled" sx={{ width: "100%" }}>
                {errorMsg}
            </Alert>
        </Snackbar>
    )
}
