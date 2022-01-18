async function loadBridge() {
  return new Promise((resolve) => {
    const existingScript = document.getElementById("storyblokBridge");
    const script = document.createElement("script");
    script.src = "//app.storyblok.com/f/storyblok-v2-latest.js";
    script.id = "storyblokBridge";
    console.log(script.src);
    document.body.appendChild(script);
    script.onload = () => {
      resolve(true);
    };
  });
}

export default async function useBridge() {
  const bridgeInstance = useState("bridgeInstance", () => null);
  if (!bridgeInstance.value) {
    // load the bridge only once and only when inside of Storyblok
    if (!bridgeInstance.value) await loadBridge();
    const { StoryblokBridge, location } = window as any;
    bridgeInstance.value = new StoryblokBridge();

    bridgeInstance.value.on(["published", "change"], () => {
      location.reload(true);
    });
  }

  return {
    bridgeInstance,
  };
}
