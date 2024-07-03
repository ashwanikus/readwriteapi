const fs = require('fs');
const path = require('path');
const express = require('express');
const ExcelJS = require('exceljs');
const router = express.Router();

const jsonData = [
    { name: 'John Doe', age: 28, city: 'New York' },
    { name: 'Jane Smith', age: 22, city: 'San Francisco' },
    { name: 'Sam Green', age: 33, city: 'Los Angeles' },
];


router.get('/export', async (req, res) => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('mysheet');

    workbook.creator = 'Ashwani';
    workbook.lastModifiedBy = 'Ashwani';
    workbook.created = new Date();

    worksheet.columns = [
        { header: 'Name', key: 'name', width: 30 },
        { header: 'Age', key: 'age', width: 10 },
        { header: 'City', key: 'city', width: 30 },
    ];

    // Add rows from JSON data
    jsonData.forEach((item) => {
        worksheet.addRow(item);
    });

    const buffer = await workbook.xlsx.writeBuffer();

    // Set the response headers
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename="data.xlsx"');

    // Send the buffer as the response
    res.send(buffer);
});


module.exports = router;