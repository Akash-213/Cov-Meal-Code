import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        minWidth: 100,
        margin: "20px",
    },

});

function PartnerCard({ partner }) {
    const classes = useStyles()


    const [dialog, setDialog] = React.useState(false);
    const [detailDialog, setDetailDialog] = React.useState(false);

    const handleDialogOpen = () => {
        setDialog(true);
    };

    const handleDialogClose = () => {
        setDialog(false);
    };

    const handleDetailOpen = () => {
        setDetailDialog(true);
    };

    const handleDetailClose = () => {
        setDetailDialog(false);
    };


    const handleWhatsApp = () => {
        const url = `https://api.whatsapp.com/send?phone=91${partner.mobile}`
        window.open(url, '_blank')
        setDialog(false)
    }

    const handleDialPad = () => {
        setDialog(false)
    }

    const meal = <div>
        {partner.availability[0]}
        <br />
        {partner.availability[1]}
        <br />
        {partner.availability[2]}

    </div>



    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography variant="h4" component="h3">
                    {partner.name}
                </Typography>
                <Typography variant="h6" component="h5" color="textSecondary">
                    {partner.locality}
                </Typography>
                <Typography variant="body2" component="p">
                    {partner.city} {partner.pincode}
                </Typography>
            </CardContent>
            <CardActions>

                <Button
                    variant="outlined" size="small" onClick={handleDetailOpen}>View Details</Button>
                <Button variant="outlined" size="small" onClick={handleDialogOpen} >Contact Now</Button>

            </CardActions>

            <Dialog
                className={classes.dialogPaper}
                open={detailDialog}
                onClose={handleDetailClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{partner.name}</DialogTitle>
                <Divider />
                <DialogContent>
                    <DialogContentText id="alert-dialog-title" variant="h5">
                        Meal Available At
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-title" variant="p">
                        {meal}
                    </DialogContentText>

                    <DialogContentText id="alert-dialog-title" variant="h5">
                        Details
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-title" variant="p">
                        {partner.details}
                    </DialogContentText>


                </DialogContent>
                <Divider />
                <DialogActions>
                    <Button onClick={handleDetailClose} color="primary">
                        Okay
                    </Button>
                </DialogActions>
            </Dialog>



            {/* contact Info  */}

            <Dialog
                open={dialog}
                onClose={handleDialogClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Contact Details"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {partner.name}
                    </DialogContentText>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleWhatsApp} color="primary">
                        Open WhatsApp
                    </Button>
                    <Button onClick={handleDialPad}>
                        <a href={"tel:+91" + partner.mobile} style={{
                            textDecoration: "none"
                        }}>Call Now</a>
                    </Button>
                </DialogActions>
            </Dialog>
        </Card >
    );

}
export default PartnerCard

