import React from "react"
import PrimaryLayout from "../layouts/PrimaryLayout"
/* export default function Home() {
  return <div>Hello Gatsby</div>
} */

//creating arrow function and get rid of function keyword and curly braces
//you always need a wrapping element that returns all the nested elements
export default () => (
  <PrimaryLayout column="col-sm-8">
    <h1>About Us</h1>
    <p>
      In entirely be to at settling felicity. Fruit two match men you seven
      share. Needed as or is enough points. Miles at smart ﻿no marry whole linen
      mr. Income joy nor can wisdom summer. Extremely depending he gentleman
      improving intention rapturous as.
    </p>
  </PrimaryLayout>
)
