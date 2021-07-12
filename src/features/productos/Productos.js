import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './Productos.module.scss';
import { productosSelectors } from './productosSelectors';
import { fetchProductos } from './productosThunks';

const Tabla = ({ data }) => {
  if (!data || data.length === 0) return null;
  return (
    <div className={css.tabla}>
      <table>
        <thead>
          <tr>
            {Object.keys(data[0]).map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr key={idx}>
              {Object.values(item).map((val, index) => (
                <td key={index}>{val}</td>
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

  const productos = useSelector(productosSelectors.selectAll);

  return (
    <Tabla data={productos.map(({ __v, fecha_creacion, ...rest }) => rest)} />
  );
};

export default Productos;
