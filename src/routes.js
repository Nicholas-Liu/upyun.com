import home from './pages/home/index'
import productUss from './pages/product/uss'
import productCdn from './pages/product/cdn'
import productUps from './pages/product/ups'
import productMarketing from './pages/product/marketing'
import productVod from './pages/product/vod'
import productLive from './pages/product/live'
import solutionAv from './pages/solution/av'
import solutionMobile from './pages/solution/mobile'
import solutionECommerce from './pages/solution/e-commerce'
import solutionGame from './pages/solution/game'
import solutionEducation from './pages/solution/education'
import solutionFusion from './pages/solution/fusion'
import aboutUs from './pages/about/about_us'
import contact from './pages/about/contact'
import terms from './pages/about/terms'
import partners from './pages/about/partners'
import joinUs from './pages/about/join_us'
import pricing from './pages/about/pricing'
import price_instruction from './pages/about/price_instruction'
const webp = resolve => require(['./pages/others/webp.vue'], resolve)
const league = resolve => require(['./pages/others/league.vue'], resolve)
const chunyu = resolve => require(['./pages/others/chunyu.vue'], resolve)
const chunyu_tos = resolve => require(['./pages/others/chunyu_tos.vue'], resolve)
const https = resolve => require(['./pages/others/https.vue'], resolve)
const reports = resolve => require(['./pages/about/reports.vue'], resolve)

export default [
  { path: '/', component: home },
  { path: '/product/uss', component: productUss },
  { path: '/product/cdn', component: productCdn },
  { path: '/product/ups', component: productUps },
  { path: '/product/marketing', component: productMarketing },
  { path: '/product/vod', component: productVod },
  { path: '/product/live', component: productLive },
  { path: '/solution/av', component: solutionAv },
  { path: '/solution/mobile', component: solutionMobile },
  { path: '/solution/e-commerce', component: solutionECommerce },
  { path: '/solution/game', component: solutionGame },
  { path: '/solution/education', component: solutionEducation },
  { path: '/solution/fusion', component: solutionFusion },
  { path: '/about_us', component: aboutUs },
  { path: '/contact', component: contact },
  { path: '/terms', component: terms },
  { path: '/partners', component: partners },
  { path: '/join_us', component: joinUs },
  { path: '/pricing', component: pricing },
  { path: '/price_instruction', component: price_instruction },
  { path: '/webp', component: webp },
  { path: '/league', component: league },
  { path: '/chunyu', component: chunyu },
  { path: '/chunyu_tos', component: chunyu_tos },
  { path: '/media_reports', component: reports },
  { path: '/https', component: https }
]
