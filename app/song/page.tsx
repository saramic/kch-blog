type Verse = {
  type:
    | "dialogue"
    | "verse"
    | "chorus"
    | "multi-part-timing"
    | "refrain"
    | "refrain-repeat"
    | "multi-part"
    | "multi-part-intro"
    | "multi-part-simultaneous"
    | "multi-part-finale";
  lines: string[];
  chords?: string[][];
};
type Song = {
  title: string;
  rehearsalAudioUrls: string[];
  audioUrl: string | null;
  info: Record<string, string>;
  verses: Verse[];
};

const songsData = [
  {
    title: "Jak Dobrze Nam – Bracia Skauci",
    rehearsalAudioUrls: [
      "https://kch-au-site.s3.ap-southeast-2.amazonaws.com/20250816_proba_01_jak_dobrze_nam_bracia_skaucki.mp3",
      "https://kch-au-site.s3.ap-southeast-2.amazonaws.com/20250809_proba_01_jak_dobrze_nam_bracia_skaucki.mp3",
      "https://kch-au-site.s3.ap-southeast-2.amazonaws.com/20250726_proba_01_jak_dobrze_nam_bracia_skauci.mp3",
    ],
    audioUrl: null,
    info: {
      Gatunek: "Pieśń harcerska",
      Styl: "Scena teatralna z dialogiem",
    },
    verses: [
      {
        type: "dialogue" as const,
        lines: [
          "<2 people walk on stage with backpacks>",
          "[harc 1] Ale mnie nogi bolą",
          "[harc 2] Ale plecak cięszki",
          "[together] ale z piosenką będzie weselej",
        ],
      },
      {
        type: "verse" as const,
        lines: ["<harc 1 & 2>", "Jak dobrze nam zdobywać góry"],
        chords: [[""], ["a", "d"]],
      },
      {
        type: "dialogue" as const,
        lines: [
          "[everyone] chór enters from sides and joins in",
          "[music] D minor chord from last line 'd'",
        ],
      },
      {
        type: "verse" as const,
        lines: [
          "I młodą piersią chłonąć wiatr,",
          "Prężnymi stopy deptać chmury",
          "I palce ranić o szczyt Tatr!",
        ],
        chords: [
          ["E7", "a"],
          ["a", "d"],
          ["E7", "a"],
        ],
      },
      {
        type: "chorus" as const,
        lines: [
          "Mieć w uszach szum, strumieni śpiew,",
          "A w żyłach roztętnioną krew. (bis)",
          "",
          "Hejże hej! Hejże ha!",
          "Żyjmy więc, póki czas,",
          "Bo kto wie, bo kto zna,",
          "Kiedy znowu ujrzym was! [only 1x]",
        ],
        chords: [
          ["a", "d"],
          ["E", "a"],
          [],
          ["a", "E"],
          ["E", "a"],
          ["a", "d"],
          ["E7", "a"],
        ],
      },
      {
        type: "dialogue" as const,
        lines: [
          "[Harc 2] Ale fajna polana na obóz",
          "[As we song] bring out prop fire, tent and maybe flag pole",
        ],
      },
      {
        type: "verse" as const,
        lines: [
          "[bracia skauci]",
          "W lesie cudna jest polana,",
          "Hufiec rozkaz stanąć ma,",
          "Wnet ogniska rozpalamy,",
          "A jest ich czterdzieści dwa.",
          "Wnet ogniska rozpalamy,",
          "A jest ich czterdzieści dwa.",
        ],
        chords: [
          [],
          ["A", "E"],
          ["E", "A"],
          ["A7", "D"],
          ["A", "E", "A"],
          ["A7", "D"],
          ["A", "E", "A"],
        ],
      },
    ],
  },
  {
    title: "Płonie ognisko w lesie",
    rehearsalAudioUrls: [
      "https://kch-au-site.s3.ap-southeast-2.amazonaws.com/20250816_proba_02_plonie_ognisko_w_lesie.mp3",
      "https://kch-au-site.s3.ap-southeast-2.amazonaws.com/20250809_proba_02_plonie_ognisko_w_lesie.mp3",
      "https://kch-au-site.s3.ap-southeast-2.amazonaws.com/20250726_proba_02_plonie_ognisko_w_lesie.mp3",
    ],
    audioUrl: null,
    info: {
      Struktura: "Śpiewane 2 razy przez wszystkie głosy",
    },
    verses: [
      {
        type: "dialogue",
        lines: ["[Harc 1] A kto rozpali ognisko?"],
      },
      {
        type: "multi-part-timing",
        lines: [
          "🎵 Struktura 3-głosowego kanonu:",
          "• All together once through",
          "• Second time as follows",
          "&nbsp;&nbsp; • Część 1 zaczyna - sing once and the verse a 2nd time",
          "&nbsp;&nbsp; • Część 2 once through - when 1 is Przy ogniu...",
          "&nbsp;&nbsp; • Część 3 once through - when 1 is Czuj or 2 is Przy...",
        ],
      },
      {
        type: "verse",
        lines: [
          "Płonie ognisko w lesie,",
          "Wiatr smętną piosnkę niesie,",
          "Przy ogniu zaś drużyna,",
          "Gawędę rozpoczyna",
        ],
        chords: [["C"], ["G", "C"], ["C"], ["G", "C"]],
      },
      {
        type: "refrain",
        lines: [
          "Czuj, czuj, czuwaj,",
          "Czuj, czuj, czuwaj",
          "Rozlega się dokoła.",
          "Czuj, czuj, czuwaj,",
          "Czuj, czuj, czuwaj",
          "Najstarszy druh zawoła.",
        ],
        chords: [["C"], [""], ["G", "C"], ["C"], [""], ["G", "C"]],
      },
      {
        type: "multi-part-finale",
        lines: [
          "🎵 Finał w 3-głosowej harmonii:",
          "Czuwaj, czuwaj, czuwaj – CZUWAJ!!!",
        ],
        chords: [[""], ["C"]],
      },
    ],
  },
  {
    title: "Chusta, chusta, chusta",
    rehearsalAudioUrls: [
      "https://kch-au-site.s3.ap-southeast-2.amazonaws.com/20250816_proba_03_chusta_chusta_chusta.mp3",
      "https://kch-au-site.s3.ap-southeast-2.amazonaws.com/20250809_proba_03_chusta_chusta_chusta.mp3",
      "https://kch-au-site.s3.ap-southeast-2.amazonaws.com/20250726_proba_03_chusta_chusta_chusta.mp3",
    ],
    audioUrl: null,
    info: {
      Gatunek: "Pieśń harcerska",
      Styl: "Wielogłosowa komedia muzyczna",
      Rocznica: "75 lat harcerstwa w Australii (1950-2025)",
    },
    verses: [
      {
        type: "dialogue",
        lines: [
          "[music]",
          "[Harc 1] Jak już długo nosimy te chusty w Australii",
          "[Harc 2] Zaczęliśmy w roku 50-tym",
        ],
      },
      {
        type: "verse",
        lines: [
          "[everybody]",
          "Mam chustę harcerską,",
          "W Australii ja ją mam,",
          "Już siedemdziesiąt pięć lat,",
          "Harcerze tutaj są!",
        ],
        chords: [[], ["C", "C"], ["C", "G7"], ["G7", "G7"], ["G7", "C"]],
      },
      {
        type: "refrain",
        lines: [
          "O, chusto, chusto, chusto",
          "W Australii ja ją mam,",
          "Już siedemdziesiąt pięć lat,",
          "Harcerze tutaj są!",
        ],
        chords: [
          ["C", "C"],
          ["C", "G7"],
          ["G7", "G7"],
          ["G7", "C"],
        ],
      },
      {
        type: "dialogue",
        lines: [
          "[music]",
          "Ale na obozie to też lasy szumią i sztandary lśnią",
        ],
      },
      {
        type: "multi-part-intro",
        lines: [
          "[Harcerki]",
          "Las szumi, sztandar lśni,",
          "Polska w sercu naszym brzmi!",
        ],
      },
      {
        type: "multi-part",
        lines: [
          "<1st group>",
          "O, chusto, chusto, chusto",
          "W Australii ja ją mam,",
          "Już siedemdziesiąt pięć lat,",
          "Harcerze tutaj są!",
        ],
      },
      {
        type: "multi-part",
        lines: [
          "<2nd group>",
          "Las szumi, sztandar lśni,",
          "Polska w sercu naszym brzmi",
        ],
      },
      {
        type: "dialogue",
        lines: ["[harc 1] Ale nie wszyscy tacy sprawni"],
      },
      {
        type: "multi-part",
        lines: [
          "<3rd group Boys>",
          "Druh — mapy gubi",
          "Druh — zawsze błądzi!",
          "[second time]",
          "Druh — mapy gubi",
          "Druh — zawsze błądzi!",
        ],
      },
      {
        type: "dialogue",
        lines: [
          "[harc 3] O śpiew czy mogę się dołączyć?",
          "[harc 2] Oczywiście wszyscy razem, raz, dwa, trzy",
        ],
      },
      {
        type: "verse",
        lines: [
          "[everybody]",
          "Mam chustę harcerską,",
          "W Australii ja ją mam,",
          "Już siedemdziesiąt pięć lat,",
          "Harcerze tutaj są!",
        ],
      },
      {
        type: "multi-part-simultaneous",
        lines: ["🎵 [sing below parts 2 times] 🎵"],
      },
      {
        type: "multi-part",
        lines: [
          "<1st group>",
          "O, chusto, chusto, chusto",
          "W Australii ja ją mam,",
          "Już siedemdziesiąt pięć lat,",
          "Harcerze tutaj są!",
        ],
      },
      {
        type: "multi-part",
        lines: [
          "<2nd group>",
          "Las szumi, sztandar lśni,",
          "Polska w sercu naszym brzmi!",
        ],
      },
      {
        type: "multi-part",
        lines: [
          "<3rd group Boys>",
          "Druh — mapy gubi",
          "Druh — zawsze błądzi!",
        ],
      },
      {
        type: "multi-part",
        lines: [
          "[harc 3]",
          "Druhno Basiu, lubimy Cię,",
          "Przy ognisku, przytulę",
        ],
      },
      {
        type: "multi-part-simultaneous",
        lines: ["🛑 [EVERYONE STOP] 🛑"],
      },
      {
        type: "verse",
        lines: [
          "[harc 3 continues solo]",
          "Druhno Basiu, lubimy Cię,",
          "Przy ognisku, przytulę",
          "&nbsp;&nbsp; [harcerz 3 continues solo cutting off]",
          "&nbsp;&nbsp; Druhno Basiu, lubimy Cię,",
          "&nbsp;&nbsp; Przy ognisku, przytulę",
        ],
      },
      {
        type: "dialogue",
        lines: [
          "[harc 1]",
          "Druhu, śpiewamy o chuście a nie druhnie Basi, jeszcze raz",
        ],
      },
      {
        type: "multi-part-simultaneous",
        lines: ["🎵 [all at the same time - one last time] 🎵"],
      },
      {
        type: "verse",
        lines: [
          "[everybody]",
          "Mam chustę harcerską,",
          "W Australii ja ją mam,",
          "Już siedemdziesiąt pięć lat,",
          "Harcerze tutaj są!",
        ],
      },
      {
        type: "multi-part",
        lines: [
          "<1st group>",
          "O, chusto, chusto, chusto",
          "W Australii ja ją mam,",
          "Już siedemdziesiąt pięć lat,",
          "Harcerze tutaj są!",
        ],
      },
      {
        type: "multi-part",
        lines: [
          "<2nd group>",
          "Las szumi, sztandar lśni,",
          "Polska w sercu naszym brzmi!",
        ],
      },
      {
        type: "multi-part",
        lines: [
          "<3rd group Boys>",
          "Druh — mapy gubi",
          "Druh — zawsze błądzi!",
        ],
      },
      {
        type: "multi-part",
        lines: [
          "[harcerz 3]",
          "Druhno Basiu, lubimy Cię,",
          "Przy ognisku, przytulę",
        ],
      },
      {
        type: "verse",
        lines: [
          "[everybody and key change]",
          "O, chusto, chusto, chusto",
          "W Australii ja ją mam,",
          "Już siedemdziesiąt pięć lat,",
          "Harcerze tutaj są!",
        ],
      },
    ],
  },
  {
    title: "Góralskie Tango",
    rehearsalAudioUrls: [
      "https://kch-au-site.s3.ap-southeast-2.amazonaws.com/20250816_proba_04_goralskie_tango.mp3",
      "https://kch-au-site.s3.ap-southeast-2.amazonaws.com/20250809_proba_04_goralskie_tango.mp3",
      "https://kch-au-site.s3.ap-southeast-2.amazonaws.com/20250726_proba_04_goralskie_tango.mp3",
    ],
    audioUrl: null, // No main recording yet
    info: {},
    verses: [
      {
        type: "dialogue",
        lines: [
          "[harc 4]",
          "My harcerze z Podhala - wy górale, my górale a tera' Góralskie Tango",
        ],
      },
      {
        type: "verse",
        lines: [
          "Zaszumiały wichry halne",
          "Niosąc w dal melodię swą",
          "A smorełki z jodełkami",
          "Pozdrowienia ślą",
        ],
        chords: [["D", "A"], ["D"], ["A"], [""]],
      },
      {
        type: "verse",
        lines: [
          "Cały las uśmiecha się",
          "Piosnki w górę ślę",
          "A górale na skrzypeczkach",
          "Grają tango swe",
        ],
        chords: [["G", "D"], ["A", "D"], ["A"], [""]],
      },
      {
        type: "refrain",
        lines: [
          "Góralskie tango gdy zagrają",
          "Melodie rzewne płyną w dal",
          "Dokoła wszyscy je śpiewają",
          "Hej, hej rozlega się wśród hal",
        ],
        chords: [["D", "G"], ["A", "D"], ["G"], ["A", "D"]],
      },
      {
        type: "refrain",
        lines: [
          "Hej, za górami, za lasami",
          "Górale tańczą z góralkami",
          "Góralskie tango gdy zagrają",
          "Melodie smętnie płyną w dal",
        ],
        chords: [["G"], ["A", "D"], ["G"], ["A", "D"]],
      },
      {
        type: "verse",
        lines: [
          "Gdy zaszumią ciemne bory",
          "I potoki górskie w nich",
          "Za wtórują im górale",
          "Na skrzypeczkach swych",
        ],
        chords: [["D", "A"], ["D"], ["A"], [""]],
      },
      {
        type: "verse",
        lines: [
          "Milkną lasy, pieśń się rwie",
          "Cisza wkrada się",
          "Bo górale na skrzypeczkach",
          "Grają tango swe",
        ],
        chords: [["G", "D"], ["A", "D"], ["A"], [""]],
      },
      {
        type: "refrain",
        lines: [
          "Góralskie tango gdy zagrają",
          "Melodie rzewne płyną w dal",
          "Dokoła wszyscy je śpiewają",
          "Hej, hej rozlega się wśród hal",
        ],
        chords: [["D", "G"], ["A", "D"], ["G"], ["A", "D"]],
      },
      {
        type: "refrain",
        lines: [
          "Hej, za górami, za lasami",
          "Górale tańczą z góralkami",
          "Góralskie tango gdy zagrają",
          "Melodie smętnie płyną w dal",
        ],
        chords: [["G"], ["A", "D"], ["G"], ["A", "D"]],
      },
    ],
  },
  {
    title: "Maszeruje Podhale",
    rehearsalAudioUrls: [
      "https://kch-au-site.s3.ap-southeast-2.amazonaws.com/20250816_proba_05_maszeruje_podhale.mp3",
      "https://kch-au-site.s3.ap-southeast-2.amazonaws.com/20250809_proba_05_maszeruje_podhale.mp3",
      "https://kch-au-site.s3.ap-southeast-2.amazonaws.com/20250726_proba_05_maszeruje_podhale.mp3",
    ],
    audioUrl:
      "https://kch-au-site.s3.ap-southeast-2.amazonaws.com/Maszeruje+Podhale.mp3",
    info: {
      Pieśń: "Hufca &ldquo;Podhale&rdquo; w Australii",
      Słowa: "L. K. Piskozub, III.63",
      "Melodia oryginalna": "adaptacja Karpackiej Brygady",
      "Melodia nowa (2025)": "opracowanie Hania Terech",
    },
    verses: [
      {
        type: "dialogue",
        lines: [
          "[harc 3]",
          "Harcerstwo Podhala z Melbourne, juź maszeruje 75 lat, a tu nasza piosenka",
        ],
      },
      {
        type: "verse",
        lines: [
          "",
          "Maszeruje &ldquo;Podhale&rdquo;, maszeruje",
          "Maszeruje drogami wzdłuż i w szerz",
          "I z piosenką na ustach powędruje",
          "Do rodaków rozsianych tutaj rzesz",
        ],
        chords: [
          ["C – D – G"],
          ["G | F or G capo 5th to drop"],
          ["G"],
          ["a | d"],
          ["D", "G", "|"],
        ],
      },
      {
        type: "verse",
        lines: [
          "Choć niełatwe są szlaki naszej drogi",
          "I niebliskie wędrówki naszej kres",
          "My jesteśmy harcerski hufiec młodych",
          "Zdobędziemy i świat ten również też",
        ],
        chords: [["G"], ["G"], ["a"], ["D", "G"]],
      },
      {
        type: "refrain",
        lines: [
          "Więc z piosenką radosną i rodzinną",
          "I z uśmiechem na ustach - równaj krok",
          "Szeregami drużyny naprzód płyną",
          "Lewa, prawa! i równaj! nie schodź w bok!",
        ],
        chords: [
          ["C", "G"],
          ["C", "G"],
          ["C", "G"],
          ["C", "-", "C", "-", "D", "-", "G"],
        ],
      },
      {
        type: "verse",
        lines: [
          "I pognała piosenka w kraj daleki",
          "Niósł ją polski na ustach hufiec nasz",
          "By w Australii o Kraju głosić wieści",
          "Bo w piosence ukryty urok jest",
        ],
        chords: [["G"], ["G"], ["a"], ["D", "G"]],
      },
      {
        type: "verse",
        lines: [
          "Maszeruje &ldquo;Podhale&rdquo; maszeruje",
          "Maszeruje drogami wzdłuż i w szerz",
          "I z piosenką na ustach powędruje",
          "Do rodaków rozsianych tutaj rzesz",
        ],
        chords: [["G"], ["G"], ["a"], ["D", "G"]],
      },
      {
        type: "refrain",
        lines: [
          "Więc z piosenką radosną i rodzinną",
          "I z uśmiechem na ustach - równaj krok",
          "Szeregami drużyny naprzód płyną",
          "Lewa, prawa! i równaj! nie schodź w bok!",
        ],
        chords: [
          ["C", "G"],
          ["C", "G"],
          ["C", "G"],
          ["C", "-", "C", "-", "D", "-", "G"],
        ],
      },
      {
        type: "dialogue",
        lines: ["[harc 3]", "Lewo zwrot - naprzód marsz"],
      },
      {
        type: "refrain",
        lines: [
          "[marching to]",
          "Lewa, lewa, Podhale w Melbourne śpiewa!",
          "Lewa, lewa, Podhale w Melbourne śpiewa!",
        ],
      },
    ],
  },
] satisfies Song[];

export default async function Page() {
  const renderVerse = (verse: Verse, index: number) => {
    const isRefrain = verse.type === "refrain";
    const isRefrainRepeat = verse.type === "refrain-repeat";
    const isChorus = verse.type === "chorus";
    const isDialogue = verse.type === "dialogue";
    const isMultiPart = verse.type === "multi-part";
    const isMultiPartIntro = verse.type === "multi-part-intro";
    const isMultiPartSimultaneous = verse.type === "multi-part-simultaneous";
    const isMultiPartTiming = verse.type === "multi-part-timing";
    const isMultiPartFinale = verse.type === "multi-part-finale";

    const containerStyle =
      isRefrain || isRefrainRepeat || isChorus
        ? {
            marginBottom: "1.5rem",
            padding: "1rem",
            backgroundColor: "#e8f4fd",
            borderLeft: "4px solid #3273dc",
          }
        : isDialogue
          ? {
              marginBottom: "1.5rem",
              padding: "1rem",
              backgroundColor: "#fff8dc",
              borderLeft: "4px solid #ffa500",
              fontStyle: "italic",
            }
          : isMultiPart
            ? {
                marginBottom: "0.5rem",
                padding: "0.75rem",
                backgroundColor: "#f0f8ff",
                borderLeft: "3px solid #87ceeb",
                marginLeft: "1rem",
              }
            : isMultiPartIntro
              ? {
                  marginBottom: "1rem",
                  padding: "0.75rem",
                  backgroundColor: "#f5f5f5",
                  borderLeft: "3px solid #666",
                }
              : isMultiPartSimultaneous
                ? {
                    marginBottom: "1rem",
                    padding: "1rem",
                    backgroundColor: "#ffe4e1",
                    borderLeft: "4px solid #ff6347",
                    textAlign: "center" as const,
                    fontWeight: "bold",
                  }
                : isMultiPartTiming
                  ? {
                      marginBottom: "1.5rem",
                      padding: "1rem",
                      backgroundColor: "#f0fff0",
                      borderLeft: "4px solid #32cd32",
                      fontStyle: "italic",
                    }
                  : isMultiPartFinale
                    ? {
                        marginBottom: "1.5rem",
                        padding: "1rem",
                        backgroundColor: "#ffd700",
                        borderLeft: "4px solid #ff8c00",
                        textAlign: "center" as const,
                        fontWeight: "bold",
                      }
                    : { marginBottom: "1.5rem" };

    return (
      <div key={index} className={verse.type} style={containerStyle}>
        {(isRefrain || isRefrainRepeat) && (
          <h5 className="subtitle is-6" style={{ marginBottom: "0.5rem" }}>
            Refren:
          </h5>
        )}
        {isChorus && (
          <h5 className="subtitle is-6" style={{ marginBottom: "0.5rem" }}>
            Chór:
          </h5>
        )}
        {isDialogue && (
          <h5 className="subtitle is-6" style={{ marginBottom: "0.5rem" }}>
            Dialog:
          </h5>
        )}
        {isMultiPartIntro && (
          <h5 className="subtitle is-6" style={{ marginBottom: "0.5rem" }}>
            Przygotowanie do wielogłosu:
          </h5>
        )}
        {isMultiPartSimultaneous && (
          <h5 className="subtitle is-6" style={{ marginBottom: "0.5rem" }}>
            Śpiewane jednocześnie:
          </h5>
        )}
        {isMultiPartTiming && (
          <h5 className="subtitle is-6" style={{ marginBottom: "0.5rem" }}>
            Instrukcje kanonu:
          </h5>
        )}
        {isMultiPartFinale && (
          <h5 className="subtitle is-6" style={{ marginBottom: "0.5rem" }}>
            Finał:
          </h5>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom:
              isRefrain || isRefrainRepeat || isChorus ? "0" : "0.5rem",
          }}
        >
          <p
            style={{
              fontFamily: "monospace",
              fontSize: isMultiPart ? "0.9rem" : "1rem",
              lineHeight: "1.6",
              margin: 0,
              fontStyle: isRefrainRepeat ? "italic" : "normal",
              color: isDialogue
                ? "#8b4513"
                : isMultiPart
                  ? "#2c5282"
                  : isMultiPartTiming
                    ? "#006400"
                    : "inherit",
              fontWeight:
                isMultiPartSimultaneous || isMultiPartFinale
                  ? "bold"
                  : "normal",
            }}
          >
            {verse.lines.map((line: string, lineIndex: number) => (
              <span key={lineIndex}>
                {lineIndex > 0 && <br />}
                <span dangerouslySetInnerHTML={{ __html: line }} />
              </span>
            ))}
          </p>
          <div
            style={{
              marginLeft: "2rem",
              color: "#666",
              fontFamily: "monospace",
              fontSize: "0.9rem",
            }}
          >
            {verse.chords &&
              verse.chords.map((lineChords: string[], chordIndex: number) => (
                <span key={chordIndex}>
                  {chordIndex > 0 && <br />}
                  {lineChords.join(" ")}
                </span>
              ))}
          </div>
        </div>
      </div>
    );
  };

  const songDateFromName = (songUrl: string): string => {
    const match = songUrl.match(/20\d{6}/);
    const [year, month, day] = [
      match[0].slice(0, 4),
      match[0].slice(4, 6),
      match[0].slice(6, 8),
    ];
    const date = new Date(`${year}-${month}-${day}`);
    return date.toDateString();
  };

  const renderSong = (song: Song, songIndex: number) => {
    return (
      <div
        key={songIndex}
        className="song-section"
        style={{ marginBottom: "3rem" }}
      >
        <h3 className="subtitle is-5">{song.title}</h3>

        {/* Rehearsal Audio */}
        {song.rehearsalAudioUrls.map((rehearsalAudioUrl) => (
          <div key={rehearsalAudioUrl} className="media-player" style={{ marginBottom: "1rem" }}>
            <p
              className="has-text-weight-semibold"
              style={{ fontSize: "0.9rem", marginBottom: "0.5rem" }}
            >
              🎵 Nagranie z próby: {songDateFromName(rehearsalAudioUrl)}
            </p>
            <audio controls className="audio-player" style={{ width: "100%" }}>
              <source src={rehearsalAudioUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}

        {/* Main Audio */}
        {song.audioUrl && (
          <div className="media-player" style={{ marginBottom: "1rem" }}>
            <p
              className="has-text-weight-semibold"
              style={{ fontSize: "0.9rem", marginBottom: "0.5rem" }}
            >
              🎤 Nagranie główne:
            </p>
            <audio controls className="audio-player" style={{ width: "100%" }}>
              <source src={song.audioUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        )}

        <div className="song-info" style={{ marginTop: "2rem" }}>
          {/* Song Info */}
          {Object.keys(song.info).length > 0 && (
            <div className="box" style={{ backgroundColor: "#f8f9fa" }}>
              <h4 className="title is-6">Informacje o utworze</h4>
              {Object.entries(song.info).map(([key, value]) => (
                <p key={key}>
                  <strong>{key}:</strong>{" "}
                  <span dangerouslySetInnerHTML={{ __html: value }} />
                </p>
              ))}
            </div>
          )}
        </div>
        {/* Lyrics */}
        <div className="lyrics" style={{ marginTop: "2rem" }}>
          <h4 className="title is-6">Tekst piosenki</h4>
          {song.verses.map((verse: Verse, index: number) =>
            renderVerse(verse, index)
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="columns">
      <div className="column is-1" />
      <div className="column is-10">
        <div className="card">
          <div className="card-content">
            <h2 className="title is-4">Chór Chorągwi</h2>

            {/* Songs with lyrics */}
            <div style={{ marginTop: "2rem" }}>
              {songsData.map((song, index) => renderSong(song, index))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
