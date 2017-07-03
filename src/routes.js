import home from './pages/home/index'
import NotFound from './pages/home/NotFound'
import productUss from './pages/products/file-storage'
import productCdn from './pages/products/cdn'
import productUps from './pages/products/process'
import productMarketing from './pages/products/marketing'
import productVod from './pages/products/vod'
import productLive from './pages/products/live'
import productCertificate from './pages/products/certificate'
import productSms from './pages/products/sms'
import productAudit from './pages/products/audit'
import solutionAv from './pages/solutions/media'
import solutionMobile from './pages/solutions/mobile'
import solutionECommerce from './pages/solutions/ecommerce'
import solutionGame from './pages/solutions/game'
import solutionEducation from './pages/solutions/education'
import solutionFusion from './pages/solutions/fusionstorage'
import aboutUs from './pages/about/about_us'
import contact from './pages/about/contact'
import terms from './pages/about/terms'
import mobileStatsTerms from './pages/about/mobile_stats_terms'
import partners from './pages/about/partners'
import joinUs from './pages/about/join_us'
import pricing from './pages/about/pricing'
import price_instruction from './pages/about/price_instruction'
import webp from './pages/others/webp.vue'
import league from './pages/others/league.vue'
// import chunyu from './pages/others/chunyu.vue'
// import chunyu_tos from './pages/others/chunyu_tos.vue'
import https from './pages/others/https.vue'
import reports from './pages/about/reports.vue'
import brandnew from './pages/others/brandnew.vue'

export default [
  { path: '/', component: home },
  { path: '/products/file-storage', component: productUss },
  { path: '/products/cdn', component: productCdn },
  { path: '/products/process', component: productUps },
  { path: '/products/marketing', component: productMarketing },
  { path: '/products/vod', component: productVod },
  { path: '/products/live', component: productLive },
  { path: '/products/ssl', component: productCertificate },
  { path: '/products/sms', component: productSms },
  { path: '/products/audit', component: productAudit },
  { path: '/solutions/media', component: solutionAv },
  { path: '/solutions/mobile', component: solutionMobile },
  { path: '/solutions/ecommerce', component: solutionECommerce },
  { path: '/solutions/game', component: solutionGame },
  { path: '/solutions/education', component: solutionEducation },
  { path: '/solutions/fusionstorage', component: solutionFusion },
  { path: '/about_us', component: aboutUs },
  { path: '/contact', component: contact },
  { path: '/terms', component: terms },
  { path: '/mobile_stats_terms', component: mobileStatsTerms },
  { path: '/partners', component: partners },
  { path: '/join_us', component: joinUs },
  { path: '/pricing', component: pricing },
  { path: '/price_instruction', component: price_instruction },
  { path: '/webp', component: webp },
  { path: '/league', component: league },
  { path: '/chunyu', redirect: '/league' },
  { path: '/chunyu_tos', redirect: '/league' },
  { path: '/media_reports', component: reports },
  { path: '/https', component: https },
  { path: '/brandnew', component: brandnew },
  { path: '*', component: NotFound }
]
