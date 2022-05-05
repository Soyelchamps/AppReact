import PropTypes from 'prop-types'

import Button from './Button'

const Header = ({ title, onAdd , mostrarForm }) => {

    const onClick = () => {
        console.log('Click')
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={mostrarForm ? 'red' :'green'} text={mostrarForm ? 'Ocultar' : 'Nuevo'} onClick={onAdd} />
        </header>
    )
}


Header.defaultProps = {
    title: 'Administrador de Tareas',
}


Header.propTypes = {
    title: PropTypes.string.isRequired,
}

/*
const headingStyle = {
    color: 'red',
    backgroundColor: 'black'
}
*/

export default Header