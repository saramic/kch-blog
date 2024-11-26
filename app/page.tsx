import Image from "next/image";

export default function Page() {
  return (
      <div className="columns">
        <div className="column"/>
        <div className="column is-one-quarter">
          <div className="card">
            <div className="card-image">
              <figure className="image is-1by1">
                <Image src={`/images/milewski_kch_headshot.jpg`} alt="alt" width="300" height="300" />
              </figure>
            </div>
            <div className="card-content">
              <h3>Związek Harcerstwa Polskiego (ZHP) w Australii</h3>
              <div>
                <ul>
                  <li>
                    <a href="https://www.zhp.org.au/">ZHP Australia main page</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="column"/>
      </div>
  )
}
