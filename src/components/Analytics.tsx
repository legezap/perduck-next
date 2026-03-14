"use client";

import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const GA_ID = "G-XXXXXXXXXX";
const YM_ID = "00000000";

const isGAActive = GA_ID !== "G-XXXXXXXXXX";
const isYMActive = YM_ID !== "00000000";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
    ym: (...args: unknown[]) => void;
  }
}

/** Track a custom GA4 event. No-op when GA is inactive. */
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
) {
  if (isGAActive && typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params);
  }
}

/** Convenience: track CTA clicks. Attach to onClick. */
export function trackCTA(label: string) {
  trackEvent("cta_click", { cta_label: label });
}

/** Convenience: track form submissions. */
export function trackFormSubmit(formName: string) {
  trackEvent("form_submit", { form_name: formName });
}

export default function Analytics() {
  const pathname = usePathname();

  // Track page views on route changes via Next.js pathname
  useEffect(() => {
    if (!isGAActive || typeof window === "undefined" || !window.gtag) return;
    window.gtag("event", "page_view", {
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname]);

  return (
    <>
      {/* ── Google Analytics 4 ── */}
      {isGAActive && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { send_page_view: true });
            `}
          </Script>
        </>
      )}

      {/* ── Yandex Metrica ── */}
      {isYMActive && (
        <Script id="ym-init" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for(var j=0;j<document.scripts.length;j++){
                if(document.scripts[j].src===r){return;}
              }
              k=e.createElement(t);a=e.getElementsByTagName(t)[0];
              k.async=1;k.src=r;a.parentNode.insertBefore(k,a);
            })(window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");
            ym(${YM_ID}, "init", {
              clickmap: true,
              trackLinks: true,
              accurateTrackBounce: true,
              webvisor: true
            });
          `}
        </Script>
      )}
    </>
  );
}
