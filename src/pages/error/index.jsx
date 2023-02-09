import { Link } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowSize";
import "./error.scss";

export default function Error() {
  const { width } = useWindowSize();

  return (
    <main>
      <section className="errorSection">
        <h1>404</h1>
        {width > 768 ? (
          <h2>Oups! La page que vous demandez n'existe pas.</h2>
        ) : (
          <h2>
            <p>Oups! La page que</p>
            <p>vous demandez n'existe pas.</p>
          </h2>
        )}
        <Link to="/">Retourner sur la page d'accueil</Link>
      </section>
    </main>
  );
}
