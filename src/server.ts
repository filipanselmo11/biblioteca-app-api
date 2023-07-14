
import express from 'express'
import usuariosRoutes from './routes/usuarios.routes'
import livrosRoutes from './routes/livros.routes';

const app = express()

app.use(express.json())

app.use('/usuarios', usuariosRoutes);
app.use('/livros', livrosRoutes);


app.listen(4040, () => console.log('Servidor rodando na porta 4040'))