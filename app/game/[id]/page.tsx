export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const answers = {
    "0DD92EC6-1B34-469D-897B-87106FB7D790": "This is the answer for xyz",
    "31558C7E-9110-4F0E-B54A-00A8D7515919": "This is the answer for abc",
    "0B9396ED-786E-40B0-85D5-3F52D92B6EB7": <>
      <div>lat,long:</div><a href="https://google.com/maps/search/-37.938660, 145.235040">-37.93866, 145.23504</a>
    </>, // harcówka carpark
    "5792B0FB-A02F-4E79-9B47-9DA534681252": <>
      <div>lat,long:</div><a href="https://google.com/maps/search/-37.937622, 145.231536">-37.937622, 145.231536</a>
    </>, // front gates
    "B0F1CCC2-F100-499D-9F64-3DAA54C526FB": <>
      <div>lat,long:</div><a href="https://google.com/maps/search/-37.929900, 145.233609">-37.929900, 145.233609</a>
    </>, // charity bins, near Bergins rd
    "2EC71D74-5D5B-49DD-8FE2-35C5D3D2CCBE": <>
      <div>lat,long:</div><a href="https://google.com/maps/search/-37.941633, 145.230683">-37.941633, 145.230683</a>
    </>, // corner stud rd and police rd
    "38F37790-9006-4EE3-8932-92267A2A4A9C": <>
      <div>lat,long:</div><a href="https://google.com/maps/search/-37.942147, 145.235540">-37.942147, 145.235540</a>
    </>, // start rough police road
    "82F29E45-1E70-4FE1-AD8E-5A6849340019": <>
      <div>lat,long:</div><a href="https://google.com/maps/search/-37.951545, 145.237351">-37.951545, 145.237351</a>
    </>, // historical marker
    "D2918761-2ED6-4250-9A49-753AF9688E73": <>
      <div>lat,long:</div><a href="https://google.com/maps/search/-37.956188, 145.240308">-37.956188, 145.240308</a>
    </>, // historical marker
    "C851222D-5D8A-4919-9E1D-D8F972AD6012": <>
      <div>lat,long:</div><a href="https://google.com/maps/search/-37.943525, 145.230501">-37.943525, 145.230501</a>
    </>, // Shed near oval
    "69536812-B4BE-4264-9E9C-5E681D021814": <>
      <div>lat,long:</div><a href="https://google.com/maps/search/-37.943720, 145.244219">-37.943720, 145.244219</a>
    </>, // start north boundary track
    "69C8E074-24D7-424E-9E09-A77D6DC3A9D3": <>
      <div>lat,long:</div><a href="https://google.com/maps/search/-37.944342, 145.254097">-37.944342, 145.254097</a>
    </>, // east stump
    "A824C319-F53D-4AE8-9C04-2D39D4E7FA3A": <>
      <div>lat,long:</div><a href="https://google.com/maps/search/-37.944336, 145.253988">-37.944336, 145.253988</a>
    </>, // west stump
  };
  return (
    <main className="container">
      <div className="columns">
        <div className="column" />
        <div className="column is-half">
          <div className="card">
            <div className="card-content">
              <div className="is-size-3">{answers[id]}</div>
            </div>
          </div>
        </div>
        <div className="column" />
      </div>
    </main>
  );
}
