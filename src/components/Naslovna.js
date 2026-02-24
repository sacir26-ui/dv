export default function Naslovna() {
  return (
    <section className="naslovna pb-5">
      <div className="container">
        <h2>Vrijednost je uvijek u načinu na koji radimo.</h2>
        <p className="podnaslov">
          Digital Value je kreativno-tehnički tim za brendove koji žele promišljena i održiva<br />
          rješenja - od kreativnog smjera do tehničke izvedbe.
        </p>

        <div className="row">
          <div className="col-md-4">
            <div className="slicice">
              <img src="/DV-materijali/1.png" alt="pp" />
              <p>PROMIŠLJEN<br />PRISTUP</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="slicice">
              <img src="/DV-materijali/2.png" alt="SNN" />
              <p>SURADNJA, NE<br />NARUDŽBA</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="slicice">
              <img src="/DV-materijali/3.png" alt="KIK" />
              <p>KVALITETA<br />ISPRED KOLIČINE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}