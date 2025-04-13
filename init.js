const viewer = document.querySelector("spline-viewer");

viewer.addEventListener("load", () => {
  setTimeout(() => {
    viewer.setVariable("MAIN_CYL_HEIGHT", 35);
    viewer.setVariable("BASE_DIAMETER", 25);
    viewer.setVariable("MAIN_CYL_ROUND", 8);
    viewer.setVariable("SPINNER_COUNTER", 0);
    viewer.setVariable("MAIN_CYL_HOLLOW", 0);
    viewer.setVariable("HOLLOW", 0);
    viewer.setVariable("SPOUT_LENGTH", 10);
    viewer.setVariable("SPOUT_HEIGHT", -3);
    viewer.setVariable("SPOUT_POS", 20);
    viewer.setVariable("SPOUT_BOOL_POS", 15);
    viewer.setVariable("SPOUT_BOOLEAN HEIGHT", -35); // double-check name
    viewer.setVariable("MAIN_CYL_POS_UP", 0);
    console.log("✅ Variables initialized");
  }, 2000); // wait for camera to settle
});
