import express from 'express';

const app = express();
const __dirname = import.meta.dirname;

app.get('/', (req, res) => {
    res.status(200).sendFile("./public/index.html", { root: __dirname});
});

app.get('/about', (req, res) => {
    res.status(200).sendFile("./public/about.html", { root: __dirname });
});

app.get('/contact-me', (req, res) => {
    res.status(200).sendFile("./public/contact-me.html", { root: __dirname });
});

app.get('/*', (req, res) => {
    res.status(404).sendFile("./public/404.html", { root: __dirname });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});