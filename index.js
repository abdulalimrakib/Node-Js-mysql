const app = require('./app')

const PORT = 3000;


app.listen(PORT, () =>{
    console.log(`Server running successfully at http://localhost:${PORT}`);
})