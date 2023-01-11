import "./App.css";
import { useRandom } from "./hooks/useRandom";



export const App = () => {
  const query = useRandom();

  return (
    <div className="App">
      {query.isFetching ? (
        <h2> Cargando...</h2>
      ) : (
        <h2>Numero Aleatorio {query.data}</h2>
      )}
      {!query.isLoading && query.isError && <h2> {`${query.error}`}</h2>}
      <button onClick={() => query.refetch()} disabled={query.isFetching}>
        {query.isFetching ? "..." : "Nuevo Numero"}
      </button>
    </div>
  );
};
