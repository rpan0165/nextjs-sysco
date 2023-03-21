export const homePageURLs = {
    HEADER_URL: 'https://cdn.contentstack.io/v3/content_types/${data.entries[0].header[0]._content_type_uid}/entries/${data.entries[0].header[0].uid}?environment=development',
    SLIDER_CONTENT_URL: 'https://cdn.contentstack.io/v3/content_types/${data.entries[0].hero_slider[0]._content_type_uid}/entries/${data.entries[0].hero_slider[0].uid}?environment=development',
    FEATURE_SECTION_1_URL: 'https://cdn.contentstack.io/v3/content_types/${data.entries[0].feature_section[0]._content_type_uid}/entries/${data.entries[0].feature_section[0].uid}?environment=development',
    FEATURE_SECTION_2_URL: 'https://cdn.contentstack.io/v3/content_types/${data.entries[0].feature_section_2[0]._content_type_uid}/entries/${data.entries[0].feature_section_2[0].uid}?environment=development',
    FEATURE_SECTION_3_URL: 'https://cdn.contentstack.io/v3/content_types/${data.entries[0].feature_section_3[0]._content_type_uid}/entries/${data.entries[0].feature_section_3[0].uid}?environment=development',
    FEATURE_SECTION_4_URL: 'https://cdn.contentstack.io/v3/content_types/${data.entries[0].feature_section_4[0]._content_type_uid}/entries/${data.entries[0].feature_section_4[0].uid}?environment=development',
    FEATURE_CALLOUT_URL: 'https://cdn.contentstack.io/v3/content_types/${data.entries[0].feature_callout[0]._content_type_uid}/entries/${data.entries[0].feature_callout[0].uid}?environment=development',
    FOOTER_URL: 'https://cdn.contentstack.io/v3/content_types/${data.entries[0].footer[0]._content_type_uid}/entries/${data.entries[0].footer[0].uid}?environment=development',
}

        

const matchingComponents = {
    HEADER: Header,
    SLIDER_CONTENT: sliderContent,
    FEATURE_SECTION: featureSection,
    FEATURE_CALLOUT: featureCallout,
    FOOTER: footer
}