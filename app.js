const express = require('express')

const app = express();

const port = 8070;



app.listen(port, () => console.log(`servidor levantada en el port ${port} `))