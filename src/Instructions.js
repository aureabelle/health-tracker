import React from "react";

export default function Instructions() {
  return (
    <>
      <p>
        This is a health tracker. The user can track their meals and their
        weights.
      </p>
      <p>
        Following is a list of requirements. I recommend forking this sandbox,
        but you can also download the code if you want to develop locally.
      </p>
      <p>
        <a href="https://www.fuze.com/careers#!/job/1728384">
          Submit the exercise along with your resume and cover letter here.
        </a>
      </p>
      <ol>
        <li>
          The app is functional (mostly), but it doesn't look great. Make it
          look presentable.
        </li>
        <li>
          Rather than having a list of meals and a list of weights, our design
          team would like to have a single list with both types of elements,
          ordered by date.
        </li>
        <li>
          Our weights don't have any units. Let's store the values in kilograms
          (to save bytes?) and allow the user to choose whether they want to use
          pounds or kilograms.
        </li>
        <li>
          Pick a requirement you think will benefit the app and implement it.
          Use this one to show off.
        </li>
      </ol>
    </>
  );
}
