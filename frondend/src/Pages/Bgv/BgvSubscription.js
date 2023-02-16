import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import "../../Components/Css/Employer/Subscription.scss";
import { AiOutlineCheck } from "react-icons/ai";

const useStyles = makeStyles((theme) => ({
    section: {
        backgroundImage: 'url("../../assets/Aboutmain.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
    cardHeader: {
        paddingTop: theme.spacing(3),
    },
}));

export default function BgvSubscription(props) {
    const classes = useStyles();
    const content = {
        // badge: "Post a Job",
        "header-p1": "Pick Best The Plan",
        description: "select your packages here for posting",
        option1: "Monthly",
        option2: "Yearly",
        "01_title": "Normal",
        "01_price": "₹1000",
        "011_price": "₹2000",
        "01_suffix": " / month",
        "01_benefit1": "  Education Verification",
        "01_benefit2": "  Employer Verification",
        // "01_benefit3": "  Non Branding",
        "01_emp": "  No. of Verif. 50",
        "011_emp": "  No. of Verif. 200",
        "01_primary-action": "Select plan",
        "01_secondary-action": "Add to cart",
        "02_title": "Standard",
        "02_price": "₹1500",
        "012_price": "₹2500",
        "02_suffix": " / month",
        "02_benefit1": "  Education Verification",
        "02_benefit2": " Employer Verification ",
        "02_benefit3": "  Police Verification",
        "02_emp": " No. of Verif. 100 ",
        "022_emp": " No. of Verif. 250 ",
        "02_primary-action": "Select plan",
        "02_secondary-action": "Add to cart",
        "03_title": "Premium",
        "03_price": "₹3000",
        "013_price": "₹5000",
        "03_suffix": " / momth",
        "03_benefit1": "  Education Verification",
        "03_benefit2": "  Employer Verification",
        "03_benefit3": "  Police Verification",
        "03_emp": "  No. of Verif. 250",
        "033_emp": "  No. of Verif. 500",
        "03_primary-action": "Select plan",
        "03_secondary-action": "Add to cart",
        ...props.content,
    };

    const [state, setState] = React.useState({
        checkbox: false,
    });

    const handleChange = (event) => {
        setState({ ...state, checkbox: event.target.checked });
    };

    const [noEmp, setnoEmp] = useState(true);
    const [number, setNumber] = useState(true);
    let value = "";
    if (number) {
        value = "₹1000";
    } else {
        value = "₹2000";
    }
    let value1 = "";
    if (number) {
        value1 = "₹1500";
    } else {
        value1 = "₹3500";
    }
    let value2 = "";
    if (number) {
        value2 = "₹3000";
    } else {
        value2 = "₹6000";
    }
    let value3 = "";
    if (number) {
        value3 = " / month";
    } else {
        value3 = " / year";
    }


    let NoOfEmp = "";
    if (noEmp) {
        NoOfEmp = "No. of Verif. 50";
    } else {
        NoOfEmp = "No. of Verif. 200";
    }
    let NoOfEmp2 = "";
    if (noEmp) {
        NoOfEmp2 = " No. of Verif. 100";
    } else {
        NoOfEmp2 = "No. of Verif. 250";
    }
    let NoOfEmp3 = "";
    if (noEmp) {
        NoOfEmp3 = "No. of Verif. 250";
    } else {
        NoOfEmp3 = "No. of Verif. 500";
    }
    return (
        <section className={classes.section}>
            <Container maxWidth="lg">
                <Box py={8} textAlign="center">
                    <div className="container-style">
                        <Box mb={3}>
                            <Container maxWidth="sm">
                                <Typography variant="h2" component="h3" gutterBottom={true}>
                                    <Typography
                                        variant="h5"
                                        component="span"
                                        color="primary"
                                        className="subscription-page1 mt-5"
                                    >
                                        {content["header-p1"]}
                                    </Typography>
                                </Typography>
                                <Typography
                                    variant="subtitle"
                                    color="textSecondary1"
                                    paragraph={true}
                                    className="subscription-page"
                                >
                                    {content["description"]}
                                </Typography>

                                <div className="subscription-page">
                                    <Typography
                                        variant="subtitle1"
                                        component="span"
                                        style={{ marginRight: "20px", color: "white" }}
                                    >
                                        {content["option1"]}
                                    </Typography>
                                    &nbsp;
                                    <label class="switch">
                                        <input
                                            type="checkbox"
                                            id="checbox"
                                            onClick={(e) => {
                                                setnoEmp(!noEmp)
                                                setNumber(!number)
                                            }}
                                        />
                                        <span class="slider round"></span>
                                    </label>
                                    &nbsp;
                                    <Typography
                                        variant="subtitle1"
                                        component="span"
                                        style={{ marginLeft: "20px", color: "white" }}
                                    >
                                        {content["option2"]}
                                    </Typography>
                                </div>
                            </Container>
                        </Box>
                    </div>
                    <div className="container-style1">
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={4} className="p-5">
                                <Card variant="outlined" className="card-subscription">
                                    <CardHeader
                                        title={content["01_title"]}
                                        color="primary"
                                        className={classes.cardHeader}
                                    ></CardHeader>
                                    <CardContent>
                                        <Box px={1}>
                                            <Typography
                                                variant="h4"
                                                component="h2"
                                                gutterBottom={true}
                                            >
                                                {value}
                                                <Typography
                                                    variant="h6"
                                                    color="textSecondary"
                                                    component="span"
                                                >
                                                    {value3}
                                                    {/* {content["01_suffix"]} */}
                                                </Typography>
                                            </Typography>
                                            <Typography
                                                variant="h6"
                                                // component="h2"
                                                gutterBottom={true}
                                            >
                                                {NoOfEmp}
                                                <Typography
                                                    variant="h6"
                                                    color="textSecondary"
                                                    component="span"
                                                >
                                                    {value3}
                                                    {/* {content["01_suffix"]} */}
                                                </Typography>
                                            </Typography>
                                            <Typography
                                                color="textSecondary"
                                                variant="subtitle1"
                                                component="p"
                                            >
                                                <AiOutlineCheck color="blue" /> &nbsp;
                                                {content["01_benefit1"]}
                                            </Typography>
                                            <Typography
                                                color="textSecondary"
                                                variant="subtitle1"
                                                component="p"
                                            >
                                                <AiOutlineCheck color="blue" /> &nbsp;
                                                {content["01_benefit2"]}
                                            </Typography>
                                            <Typography
                                                color="textSecondary"
                                                variant="subtitle1"
                                                component="p"
                                            >
                                                {/* <AiOutlineCheck color="blue" /> &nbsp; */}
                                                {content["01_benefit3"]}
                                            </Typography>
                                            <Typography
                                                color="textSecondary"
                                                variant="subtitle1"
                                                component="p"
                                                paragraph={true}
                                            >
                                                {content["01_benefit4"]}
                                            </Typography>
                                        </Box>
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            className="mt-4 mb-2"
                                        >
                                            {content["01_primary-action"]}
                                        </Button>
                                        <Box mt={2}>
                                            <Link href="#" color="primary1">
                                                {content["03_secondary-action"]}
                                            </Link>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={4} className="p-5">
                                <Card variant="outlined" className="card-subscription">
                                    <CardHeader
                                        title={content["02_title"]}
                                        color="primary"
                                        className={classes.cardHeader}
                                    ></CardHeader>
                                    <CardContent>
                                        <Box px={1}>
                                            <Typography
                                                variant="h4"
                                                component="h2"
                                                gutterBottom={true}
                                            >
                                                {value1}
                                                <Typography
                                                    variant="h6"
                                                    color="textSecondary"
                                                    component="span"
                                                >
                                                    {value3}
                                                </Typography>
                                            </Typography>
                                            <Typography
                                                variant="h6"
                                                component="h2"
                                                gutterBottom={true}
                                            >
                                                {NoOfEmp2}
                                                <Typography
                                                    variant="h6"
                                                    color="textSecondary"
                                                    component="span"
                                                >
                                                    {value3}
                                                </Typography>
                                            </Typography>
                                            <Typography
                                                color="textSecondary"
                                                variant="subtitle1"
                                                component="p"
                                            >
                                                <AiOutlineCheck color="blue" /> &nbsp;
                                                {content["02_benefit1"]}
                                            </Typography>
                                            <Typography
                                                color="textSecondary"
                                                variant="subtitle1"
                                                component="p"
                                            >
                                                <AiOutlineCheck color="blue" /> &nbsp;
                                                {content["02_benefit2"]}
                                            </Typography>
                                            <Typography
                                                color="textSecondary"
                                                variant="subtitle1"
                                                component="p"
                                            >
                                                <AiOutlineCheck color="blue" /> &nbsp;
                                                {content["02_benefit3"]}
                                            </Typography>
                                            <Typography
                                                color="textSecondary"
                                                variant="subtitle1"
                                                component="p"
                                                paragraph={true}
                                            >
                                                {content["02_benefit4"]}
                                            </Typography>
                                        </Box>
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            className="mt-4 mb-2"
                                        >
                                            {content["02_primary-action"]}
                                        </Button>
                                        <Box mt={2}>
                                            <Link href="#" color="primary1">
                                                {content["03_secondary-action"]}
                                            </Link>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={4} className="p-5">
                                <Card variant="outlined" className="card-subscription">
                                    <CardHeader
                                        title={content["03_title"]}
                                        color="primary"
                                        className={classes.cardHeader}
                                    ></CardHeader>
                                    <CardContent>
                                        <Box px={1}>
                                            <Typography
                                                variant="h4"
                                                component="h2"
                                                gutterBottom={true}
                                            >
                                                {value2}
                                                <Typography
                                                    variant="h6"
                                                    color="textSecondary"
                                                    component="span"
                                                >
                                                    {value3}
                                                </Typography>
                                            </Typography>
                                            <Typography
                                                variant="h6"
                                                component="h2"
                                                gutterBottom={true}
                                            >
                                                {NoOfEmp3}
                                                <Typography
                                                    variant="h6"
                                                    color="textSecondary"
                                                    component="span"
                                                >
                                                    {value3}
                                                </Typography>
                                            </Typography>
                                            <Typography
                                                color="textSecondary"
                                                variant="subtitle1"
                                                component="p"
                                            >
                                                <AiOutlineCheck color="blue" /> &nbsp;
                                                {content["03_benefit1"]}
                                            </Typography>
                                            <Typography
                                                color="textSecondary"
                                                variant="subtitle1"
                                                component="p"
                                            >
                                                <AiOutlineCheck color="blue" /> &nbsp;
                                                {content["03_benefit2"]}
                                            </Typography>
                                            <Typography
                                                color="textSecondary"
                                                variant="subtitle1"
                                                component="p"
                                            >
                                                <AiOutlineCheck color="blue" /> &nbsp;
                                                {content["03_benefit3"]}
                                            </Typography>
                                            <Typography
                                                color="textSecondary"
                                                variant="subtitle1"
                                                component="p"
                                                paragraph={true}
                                            >
                                                {content["03_benefit4"]}
                                            </Typography>
                                        </Box>
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            className="mt-4 mb-2"
                                        >
                                            {content["03_primary-action"]}
                                        </Button>
                                        <Box mt={2}>
                                            <Link href="#" color="primary1">
                                                {content["03_secondary-action"]}
                                            </Link>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </div>
                </Box>
            </Container>
        </section>
    );
}
