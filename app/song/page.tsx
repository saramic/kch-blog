const data = [
  {
    section: "Jak dobrze nam bracia skauci",
    audioUrl:
      "https://kch-au-site.s3.ap-southeast-2.amazonaws.com/20250726_proba_01_jak_dobrze_nam_bracia_skauci.mp3",
  },
  {
    section: "Płonie ognisko w lesie",
    audioUrl:
      "https://kch-au-site.s3.ap-southeast-2.amazonaws.com/20250726_proba_02_plonie_ognisko_w_lesie.mp3",
  },
  {
    section: "Chusta, chusta, chusta",
    audioUrl:
      "https://kch-au-site.s3.ap-southeast-2.amazonaws.com/20250726_proba_03_chusta_chusta_chusta.mp3",
  },
  {
    section: "Goralskie tango",
    audioUrl:
      "https://kch-au-site.s3.ap-southeast-2.amazonaws.com/20250726_proba_04_goralskie_tango.mp3",
  },
  {
    section: "Maszeruje Podhale",
    audioUrl:
      "https://kch-au-site.s3.ap-southeast-2.amazonaws.com/20250726_proba_05_maszeruje_podhale.mp3",
  },
];
export default async function Page() {
  const audioUrl =
    "https://kch-au-site.s3.ap-southeast-2.amazonaws.com/Maszeruje+Podhale.mp3";
  const songTitle = "Maszeruje Podhale";

  return (
    <div className="columns">
      <div className="column is-1" />
      <div className="column is-10">
        <div className="card">
          <div className="card-content">
            <h2 className="title is-4">Chór Chorągwi</h2>

            {data.map((item, index) => (
              <div key={index} className="media-player">
                <p className="subtitle is-6">{item.section}</p>
                <audio
                  controls
                  className="audio-player"
                  style={{ width: "100%", marginBottom: "1rem" }}
                >
                  <source src={item.audioUrl} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            ))}

            <h3 className="subtitle is-5">{songTitle}</h3>
            <div className="media-player">
              <audio
                controls
                className="audio-player"
                style={{ width: "100%", marginTop: "1rem" }}
              >
                <source src={audioUrl} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>

            <div className="song-info" style={{ marginTop: "2rem" }}>
              <div className="box" style={{ backgroundColor: "#f8f9fa" }}>
                <h4 className="title is-6">Informacje o utworze</h4>
                <p>
                  <strong>Pieśń:</strong> Hufca &ldquo;Podhale&rdquo; w
                  Australii
                </p>
                <p>
                  <strong>Słowa:</strong> L. K. Piskozub, III.63
                </p>
                <p>
                  <strong>Melodia oryginalna:</strong> adaptacja Karpackiej
                  Brygady
                </p>
                <p>
                  <strong>Melodia nowa (2025):</strong> opracowanie Hania Terech
                </p>
              </div>

              <div className="lyrics" style={{ marginTop: "2rem" }}>
                <h4 className="title is-6">Tekst piosenki</h4>

                <div className="verse" style={{ marginBottom: "1.5rem" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "monospace",
                        fontSize: "1rem",
                        lineHeight: "1.6",
                        margin: 0,
                      }}
                    >
                      Maszeruje &ldquo;Podhale&rdquo;, maszeruje
                      <br />
                      Maszeruje drogami wzdłuż i w szerz
                      <br />
                      I z piosenką na ustach powędruje
                      <br />
                      Do rodaków rozsianych tutaj rzesz
                    </p>
                    <div
                      style={{
                        marginLeft: "2rem",
                        color: "#666",
                        fontFamily: "monospace",
                        fontSize: "0.9rem",
                      }}
                    >
                      G<br />G<br />a<br />a
                    </div>
                  </div>
                </div>

                <div className="verse" style={{ marginBottom: "1.5rem" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "monospace",
                        fontSize: "1rem",
                        lineHeight: "1.6",
                        margin: 0,
                      }}
                    >
                      Choć niełatwe są szlaki naszej drogi
                      <br />
                      I niebliskie wędrówki naszej kres
                      <br />
                      My jesteśmy harcerski hufiec młodych
                      <br />
                      Zdobędziemy i świat ten również też
                    </p>
                    <div
                      style={{
                        marginLeft: "2rem",
                        color: "#666",
                        fontFamily: "monospace",
                        fontSize: "0.9rem",
                      }}
                    >
                      G<br />G<br />a<br />D G
                    </div>
                  </div>
                </div>

                <div
                  className="refrain"
                  style={{
                    marginBottom: "1.5rem",
                    padding: "1rem",
                    backgroundColor: "#e8f4fd",
                    borderLeft: "4px solid #3273dc",
                  }}
                >
                  <h5
                    className="subtitle is-6"
                    style={{ marginBottom: "0.5rem" }}
                  >
                    Refren:
                  </h5>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "monospace",
                        fontSize: "1rem",
                        lineHeight: "1.6",
                        margin: 0,
                      }}
                    >
                      Więc z piosenką radosną i rodzinną
                      <br />
                      I z uśmiechem na ustach - równaj krok
                      <br />
                      Szeregami drużyny naprzód płyną
                      <br />
                      Lewa, prawa! i równaj! nie schodź w bok!
                    </p>
                    <div
                      style={{
                        marginLeft: "2rem",
                        color: "#666",
                        fontFamily: "monospace",
                        fontSize: "0.9rem",
                      }}
                    >
                      C G<br />C G<br />C G<br />C - C - D - G
                    </div>
                  </div>
                </div>

                <div className="verse" style={{ marginBottom: "1.5rem" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "monospace",
                        fontSize: "1rem",
                        lineHeight: "1.6",
                        margin: 0,
                      }}
                    >
                      I pognała piosenka w kraj daleki
                      <br />
                      Niósł ją polski na ustach hufiec nasz
                      <br />
                      By w Australii o Kraju głosić wieści
                      <br />
                      Bo w piosence ukryty urok jest
                    </p>
                    <div
                      style={{
                        marginLeft: "2rem",
                        color: "#666",
                        fontFamily: "monospace",
                        fontSize: "0.9rem",
                      }}
                    >
                      F<br />F<br />g<br />g
                    </div>
                  </div>
                </div>

                <div className="verse" style={{ marginBottom: "1.5rem" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "monospace",
                        fontSize: "1rem",
                        lineHeight: "1.6",
                        margin: 0,
                      }}
                    >
                      Maszeruje &ldquo;Podhale&rdquo; maszeruje
                      <br />
                      Maszeruje drogami wzdłuż i w szerz
                      <br />
                      I z piosenką na ustach powędruje
                      <br />
                      Do rodaków rozsianych tutaj rzesz
                    </p>
                    <div
                      style={{
                        marginLeft: "2rem",
                        color: "#666",
                        fontFamily: "monospace",
                        fontSize: "0.9rem",
                      }}
                    >
                      F<br />F<br />g<br />g
                    </div>
                  </div>
                </div>

                <div
                  className="refrain"
                  style={{
                    marginBottom: "1.5rem",
                    padding: "1rem",
                    backgroundColor: "#e8f4fd",
                    borderLeft: "4px solid #3273dc",
                  }}
                >
                  <h5
                    className="subtitle is-6"
                    style={{ marginBottom: "0.5rem" }}
                  >
                    Refren:
                  </h5>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "monospace",
                        fontSize: "1rem",
                        lineHeight: "1.6",
                        margin: 0,
                      }}
                    >
                      Więc z piosenką radosną i rodzinną
                      <br />
                      I z uśmiechem na ustach - równaj krok
                      <br />
                      Szeregami drużyny naprzód płyną
                      <br />
                      Lewa, prawa! i równaj! nie schodź w bok!
                    </p>
                    <div
                      style={{
                        marginLeft: "2rem",
                        color: "#666",
                        fontFamily: "monospace",
                        fontSize: "0.9rem",
                      }}
                    >
                      C G<br />C G<br />C G<br />C - C - D - G
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="content"
                style={{
                  marginTop: "2rem",
                  paddingTop: "1rem",
                  borderTop: "1px solid #ddd",
                }}
              >
                <p style={{ fontSize: "0.9rem", color: "#666" }}>
                  <strong>Audio URL:</strong>{" "}
                  <a href={audioUrl} target="_blank" rel="noopener noreferrer">
                    {audioUrl}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
