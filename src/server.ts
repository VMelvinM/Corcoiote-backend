import express from 'express';
const app = express();
app.use(express.json());
app.get('/customers', (request, response) => {
    const customers = [{
        name:'Victor',
        status:true
    },{
         name:'Karol',
         status:true
    },{
         name:'Rafael',
         status:true
    }];

    response.status(200).json(customers);
});

app.listen(3000);