import React, { useState } from 'react';
import { CacheProvider, ThemeProvider } from "@emotion/react"
import { BrowserRouter } from 'react-router-dom'
import createCache from "@emotion/cache"
import theme from './styles/mui'
import RouterApp from './RouterApp';

const cacheRtl = createCache({
  key: "muirtl",
})

function App() {

  return (
    <BrowserRouter>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          {/* <ModalsProvider> */}
              <RouterApp />
          {/* </ModalsProvider> */}
        </ThemeProvider>
      </CacheProvider>
    </BrowserRouter>
  );
}

export default App;
