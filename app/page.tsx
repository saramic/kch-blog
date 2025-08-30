import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="columns">
      <div className="column" />
      <div className="column is-one-quarter">
        <div className="card">
          <div className="card-image">
            <figure className="image is-1by1">
              <Image
                src={`/images/milewski_kch_headshot.jpg`}
                alt="alt"
                width="300"
                height="300"
              />
            </figure>
          </div>
          <div className="card-content">
            <h3>Związek Harcerstwa Polskiego (ZHP) w Australii</h3>
            <div>
              <ul>
                <li>
                  <a href="https://www.zhp.org.au/">ZHP Australia main page</a>
                </li>
                <li>
                  <Link href="/calendar">️📅 Calendar</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <figure className="image" >
              <Image
                src={
                  "https://kch-au-site.s3.ap-southeast-2.amazonaws.com/20180907_100_lecie_niepodleglosci/100_years_niepodleglosci_choir_crop.jpg"
                }
                alt="alt"
                width="300"
                height="200"
              />
            </figure>
          </div>
          <div className="card-content">
            <h3>Chór (choir)</h3>
            <div>
              <ul>
                <li>
                  <Link href="/choir">🎶 Choir ♫ ♬</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="column" />
    </div>
  );
}
