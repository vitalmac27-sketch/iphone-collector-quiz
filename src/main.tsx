// Domain redirect
if (
  window.location.hostname !== 'xn----jtbjgbccazg9frdtb.xn--p1ai' &&
  window.location.hostname !== 'localhost'
) {
  window.location.replace(
    'https://xn----jtbjgbccazg9frdtb.xn--p1ai' + window.location.pathname + window.location.search
  );
}

import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
