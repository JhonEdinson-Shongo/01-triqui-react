export const Square = ({stateSquare, isSelected, updateBoard, index}) => {
    const className = `square ${isSelected ? 'is-selected' : ''}`
    const handleClick = () => {
        updateBoard(index)
    }
    return (
      <div onClick={ handleClick } className={ className }>
        { stateSquare }
      </div>
    )
}