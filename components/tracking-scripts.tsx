"use client"

import Script from "next/script"

export function TrackingScripts() {
  // Get tracking IDs from environment variables
  // TODO: Uncomment when Google Ads keys are available from marketing team
  // const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID
  // const googleConversionId = process.env.NEXT_PUBLIC_GOOGLE_CONVERSION_ID
  // const googleConversionLabel = process.env.NEXT_PUBLIC_GOOGLE_CONVERSION_LABEL

  return (
    <>
      {/* Google Ads / Google Analytics - Commented out until keys are available */}
      {/* {googleAdsId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
            strategy="afterInteractive"
          />
          <Script
            id="google-ads"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${googleAdsId}');
                ${googleConversionId && googleConversionLabel ? `
                gtag('config', '${googleConversionId}', {
                  'send_page_view': false
                });
                ` : ''}
              `,
            }}
          />
        </>
      )} */}
    </>
  )
}

