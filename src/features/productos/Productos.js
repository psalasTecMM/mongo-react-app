import { Alert } from 'react-bootstrap';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toHeaderTitle } from '../../utils/convertores';
import { hasError, selectAll } from './productosSelectors';
import { fetchProductos } from './productosThunks';

import css from './Productos.module.scss';

const Tabla = ({ title,data }) => {
  if (!data || data.length === 0) return null;
  return (
    <div className={css.tabla}>
      <h3 style={{textAlign: 'center'}}>{title}</h3>
      <table>
        <thead>
          <tr>
            {Object.keys(data[0]).map((column, index) => (
              <th key={index} style={{textAlign: 'center'}}>{toHeaderTitle(column)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr key={idx}>
              {Object.values(item).map((val, index) => (
                <td key={index}>{typeof(val)==='number'?`$ ${val}`:val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Productos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductos());
  }, [dispatch]);

  const productos = useSelector(selectAll);
  const productosError = useSelector(hasError);

  return (
    <div className={css.contenedor}>
      <div className={css.center}>
        {productosError && <Alert variant='danger'>{productosError}</Alert>}
        <Tabla title='Tabla Productos' data={productos.map(({ __v, fecha_creacion, ...rest }) => rest)} />
      </div>
    </div>
  );
};

export default Productos;
