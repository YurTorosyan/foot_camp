import { configureStore } from "@reduxjs/toolkit"
import fixtureSlice from "./features/FixtureSlice/fixtureSlice"

const store = configureStore({
  reducer: {
    fixtures: fixtureSlice,
  },
})

export default store

// import { configureStore } from "@reduxjs/toolkit";
// import productSlice from "./features/productSlice/productSlice";

// const store = configureStore({
//   reducer: {
//     product: productSlice
//   }
// })

// export default store

//
