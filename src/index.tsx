import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "./utils/chakra-ui/provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
      <App />
    </Provider>
  </StrictMode>
);
