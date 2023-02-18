
import styles from './Graph.module.css';



function Graph({ positions }) {
  const cells = [];
  const letters ='0123456789ABCDEF';
  let color= "#";
  //  console.log("graph positions", positions)
  positions.forEach(({ initial_position_X, initial_position_Y },index) => {
    // console.log("x values", initial_position_Y, "y values", initial_position_X)
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
      // 6 rows
      for (let j = 0; j < 14; j++) {
      
        // 14 columns
        cells.push(
          <div className={styles.cell} key={`${initial_position_X}-${initial_position_Y}-${i}-${j}`}>
            {i === Math.floor(initial_position_Y / 36.5) &&
              j === Math.floor(initial_position_X / 42.9) && (
                <div className={styles.point} style={{ backgroundColor: color}}>{index+1}</div>
              )}
          </div>
        );
      }
    }
  });
// console.log("cells",cells)
  return <div className={styles.table}>{cells}</div>;
}

export default Graph;




