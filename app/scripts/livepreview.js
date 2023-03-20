import ContentstackLivePreview from "@contentstack/live-preview-utils";
import "@contentstack/live-preview-utils/dist/main.css";


ContentstackLivePreview.init({
    stackSdk: Stack,
   });


ContentstackLivePreview.init({
    enable: true,
    stackDetails: {
        apiKey: "your-stack-api-key",
    },
});
