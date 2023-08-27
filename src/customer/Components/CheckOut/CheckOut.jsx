import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Navigation from "../Navigation/Navigation";
import { useLocation } from "react-router-dom";
import DeliveryAdress from "./DeliveryAdress";
import OrderSummary from "./OrderSummary";

const steps = ["Login", "Delivery address", "Order Summary", "Payment"];

export default function Checkout() {
  const location = useLocation();
  const querySearch = new URLSearchParams(location.search);
  const stepParam = querySearch.get("step");

  const initialStep = stepParam ? parseInt(stepParam, 10) : 0;
  const [activeStep, setActiveStep] = useState(initialStep);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  useEffect(() => {
    // Update the URL with the current step
    const searchParams = new URLSearchParams({ step: activeStep });
    window.history.replaceState({}, "", `${location.pathname}?${searchParams}`);
  }, [activeStep, location.pathname]);

  return (
    <div className="px-10 lg:px-20">
      <Navigation />
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
            </Box>
            <div className="mt-10">
              {activeStep === 1 ? <DeliveryAdress /> : <OrderSummary />}
            </div>
          </React.Fragment>
        )}
      </Box>
    </div>
  );
}
