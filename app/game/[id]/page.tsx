export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const answers = {
    "0DD92EC6-1B34-469D-897B-87106FB7D790": "This is the answer for xyz",
    "31558C7E-9110-4F0E-B54A-00A8D7515919": "This is the answer for abc",
  };
  return (
    <main className="container">
      <div className="columns">
        <div className="column" />
        <div className="column is-one-quarter">
          <div className="card">
            <div className="card-content">
              <div>{answers[id]}</div>
            </div>
          </div>
        </div>
        <div className="column" />
      </div>
    </main>
  );
}
