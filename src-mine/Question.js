import { Tile, unstable__Slug as Slug } from "@carbon/react";

function Question({children}) {
  const slug = <Slug></Slug>;

  return (
    <div className="question-wrapper">
      <Tile slug={slug} id="question-1" className="question-tile">
        {children}
      </Tile>
    </div>
  );
}

export default Question;
