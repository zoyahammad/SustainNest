import React, { useState } from 'react';
import { TextField, Button, Checkbox, FormControlLabel, Typography } from '@material-ui/core';
import { FormContainer } from './CalculatorFormStyles';
import { calculatorAppliances } from '../../constants/constants';
import { GiCoalWagon, GiFruitTree } from "react-icons/gi";
import { FaOilCan } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";

const CalculatorForm = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [hours, setHours] = useState({});
    const [totalConsumption, setTotalConsumption] = useState(null);
    const [totalCost, setTotalCost] = useState(null);
    const [totalMonthlyCost, setTotalMonhtlyCost] = useState(null);
    const [coalBurnt, setCoalBurnt] = useState(null);
    const [oilConsumed, setOilConsumed] = useState(null);
    const [trees, setTrees] = useState(null);

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setSelectedItems((prevSelectedItems) =>
            checked ? [...prevSelectedItems, name] : prevSelectedItems.filter((item) => item !== name)
        );
    };

    const handleHourChange = (event) => {
        const { name, value } = event.target;
        setHours((prevHours) => ({
            ...prevHours,
            [name]: value !== '' ? parseInt(value) : ''
        }));
    };

    const handleSubmit = () => {
        let total = 0;
        let totalCost = 0;
        let totalMonhtlyCost = 0;
        let coalBurnt = 0;
        let oilConsumed = 0;
        let trees = 0;

        // Iterate over the selected items and their hours
        Object.entries(hours).forEach(([appliance, hour]) => {
            // Check if the appliance is selected and the hour is a valid number
            if (selectedItems.includes(appliance) && !isNaN(hour)) {
                // Multiply the hour with the max value of the appliance and add it to the total
                total += hour * calculatorAppliances[appliance].max;
            }
        });

        total = total/1000;
        totalCost = ((15.73 * total)/100).toFixed(2);
        totalMonhtlyCost = totalCost * 30;
        coalBurnt = (total * 0.459).toFixed(2);
        oilConsumed = (total * 30 * 0.001).toFixed(3);
        trees = ((total * 30)/55.3).toFixed(0);
        
        setTotalConsumption(total);
        setTotalCost(totalCost);
        setTotalMonhtlyCost(totalMonhtlyCost);
        setCoalBurnt(coalBurnt);
        setOilConsumed(oilConsumed);
        setTrees(trees);
    };

    return (
        <FormContainer>
            {Object.entries(calculatorAppliances).map(([appliance, values], index) => (
                <div key={index}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={selectedItems.includes(appliance)}
                                onChange={handleCheckboxChange}
                                name={appliance}
                            />
                        }
                        label={
                            <Typography variant="body1" style={{ fontSize: 20, color: 'black' }}>
                                {appliance}
                            </Typography>
                        }
                    />
                    {selectedItems.includes(appliance) && (
                        <TextField
                            type="number"
                            label="Hours"
                            name={appliance}
                            value={hours[appliance] || ''}
                            onChange={handleHourChange}
                        />
                    )}
                </div>
            ))}
            <br />
            <Button variant="contained" color="#FFFFFF" style={{ textColor: 'black', width: '200px', height: '60px', borderRadius: '15px', fontSize: 13 }} onClick={handleSubmit}>
                Submit
            </Button>
            {totalConsumption !== null && (
                <Typography variant="body1" style={{ fontSize: 20, color: 'black', marginTop: '20px' }}>
                    Daily Approx Consumption: {totalConsumption} Kilo Watts
                    <br></br>
                    Daily Approx. Cost: ${totalCost}
                    <br></br>
                    Monthly Stats:
                    <br></br><br></br>
                    <FaSackDollar size={70}/> ${totalMonthlyCost}
                    <br></br>
                    <GiCoalWagon size={70}/> {coalBurnt} pounds of coal burned
                    <br></br>
                    <FaOilCan size={70} /> {oilConsumed} barrels of oil consumed
                    <br></br>
                    <GiFruitTree size={70}/> {trees} trees destroyed
                </Typography>
            )}
        </FormContainer>
    );
};

export default CalculatorForm;