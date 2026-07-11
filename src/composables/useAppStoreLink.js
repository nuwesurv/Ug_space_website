const GOOGLE_PLAY = 'https://play.google.com/store/apps/details?id=com.nuwesurvugspace.myapp&pcampaignid=web_share'
const APP_STORE   = 'https://apps.apple.com/ug/app/ug-space/id6780949664'

function isIOS() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent)
}

export function useAppStoreLink() {
  const appStoreLink = isIOS() ? APP_STORE : GOOGLE_PLAY
  return { appStoreLink }
}
