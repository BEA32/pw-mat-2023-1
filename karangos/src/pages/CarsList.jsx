import React from 'react'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import { format } from 'date-fns'
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Link } from 'react-router-dom'

export default function CarsList() {

    const [state, setState] = React.useState({
        cars: {}
    })

    //Desestruturando as variaveis de estado
    const {
        cars
    } = state

    // Este useEffecy() será executado apenas uma vez, durante o
    //carregamento da página
    React.useEffect (() => {
        loadData() //carrega os dados do back-end
    }, [])

    async function loadData() {
        try {
            const result = await fetch('https://api.faustocintra.com.br/cars')

            //Requisição OK
            if(result.ok) setState({...state, cars: await result.json()})

            //Requisição com erro
            else throw new Error(`[HTTP ${result.status}] ${result.statusText}`)
        }
        catch(error) {
            //Exibimos o erro no console
            console.error(error)

        }
    }
//Colunas com as informações do carro: marca, modelo, cor, ano, se é importado, placa e preço.
//Na coluna de importado 1 é sim e 0 não, então fiz uma função
// que vai verificar no banco se é 1 ou 0 e retorna sim para 1 e não para 0.
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'brand',
          headerName: 'Marca',
          width: 300
        },
        {
            field: 'model',
            headerName: 'Modelo',
            align: 'center',
            headerAlign: 'center',
            width: 150
        },
        {
            field: 'color',
            headerName: 'Cor',
            align: 'center',
            headerAlign: 'center',
            width: 150
        },
        {
          field: 'year_manufacture',
          headerName: 'Ano de fabricação',
          align: 'center',
          headerAlign: 'center',
          width: 100,
          valueFormatter: params => {
            if(params.value) return format(new Date(params?.value), 'yyyy')
            else return ''
         }
        },
        {
            field: 'imported',
            headerName: 'Importado',
            align: 'center',
            headerAlign: 'center',
            width: 150,
            valueFormatter: (params) => {
                return params.value == 1 ? 'Sim' : 'Não'
            }
        },
        {
            field: 'plates',
            headerName: 'Placas',
            align: 'center',
            headerAlign: 'center',
            width: 150
        },
        {
            field: 'selling_price',
            headerName: 'Preço de venda',
            align: 'center',
            headerAlign: 'center',
            width: 150
        },
          {
            field: 'edit',
            headerName: 'Editar',
            headerAlign: 'center',
            align: 'center',
            width: 90,
            renderCell: params =>
            <Link to={'./' + params.id}>
            <IconButton aria-label="Editar">
                <EditIcon />
            </IconButton>
            </Link>
          },
          {
            field: 'delete',
            headerName: 'Excluir',
            headerAlign: 'center',
            align: 'center',
            width: 90,
            renderCell: params =>
            <IconButton
            aria-label="Excluir"
            onClick={() => handleDeleteButtonClick(params.id)}
            >
                <DeleteForeverIcon color="error" />
            </IconButton>
          },
      ];

      async function handleDeleteButtonClick(id){
        if(confirm('Deseja realmente excluir este item?')){
            try {
                const result = await fetch(`https://api.faustocintra.com.br/cars/${id}`, {
                    method: 'DELETE'
                })
                //Se a exclusão tiver sido feita com sucesso, atualiza a listagem
                if(result.ok) loadData()
                alert('Exclusão efetuada com sucesso!')
            }
            catch(error) {
                console.error(error)
            }
        }
      }
      
    return (

        <>
        <Typography variant="h1" sx={{ mb: '50px'}}>
            Listagem de carros
        </Typography>

        <Box sx= {{
            display: 'flex',
            justifyContent: 'right',
            mb: '25px' //margin-botton
        }}>
        <Link to="new">
            <Button
            variant="contained"
            color="secondary"
            size="large"
            startIcon={<AddBoxIcon />}>
                Cadastrar novo carro
            </Button>
        </Link>
        </Box>

        <Paper elevation={4} sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={cars}
                columns={columns}
                initialState={{
                pagination: {
                    paginationModel: {
                    pageSize: 5,
                    },
                },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Paper>
        </>
    )
}