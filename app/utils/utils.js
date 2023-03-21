'use client';

import ContentstackLivePreview from "@contentstack/live-preview-utils";
// import Contentstack from '../scripts/contentstack.min.js'
import contentstack from 'contentstack';


// contentstack config ----------- (for live preview purpose)
const Stack = contentstack.Stack({ 
  live_preview: {
    management_token: "cs2a9497b4c940c5f89ef6a0d4",
    enable: true,
    host: 'api.contentstack.io'
  },
})

ContentstackLivePreview.init({
    stackSdk: Stack,
});

export const onEntryChange = ContentstackLivePreview.onEntryChange;