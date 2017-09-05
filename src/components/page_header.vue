<style lang="sass" src="./page_header.sass"></style>
<template lang="pug">
#page_header(:class="{'page-fixed': fixedStyle}")
  .container.clearfix
    router-link.logo(to="/")
      img(v-if="!fixedStyle", src="../assets/logo.svg")
      img(v-if="fixedStyle", src="../assets/logo-fixed.svg")
    .navs
      .nav(@mouseover="showMenu(0)", @mouseout="hideMenu") 产品
        span.select-triangle
      .nav(@mouseover="showMenu(1)", @mouseout="hideMenu") 解决方案
        span.select-triangle
      router-link.nav(to="/pricing") 价格
      .nav(@mouseover="showMenu(2)", @mouseout="hideMenu") 帮助与文档
        span.select-triangle
      .nav(@mouseover="showMenu(3)", @mouseout="hideMenu") 小拍日志
        span.select-triangle
      .nav(@mouseover="showMenu(4)", @mouseout="hideMenu") 热门专题
        span.select-triangle
    .side-navs
      a.nav(:href="$links.register" target="_blank") 注册
      a.nav.console(:href="$links.login" target="_blank") 控制台
    .menu(:class="{active: menuActive}", @mouseover="showMenu()", @mouseout="hideMenu", v-show="menuShowing", :style="{left: `${menuCondition.left}px`}")
      .triangle
      .inner(:style="{width: `${menuCondition.width}px`, height: `${menuCondition.height}px`}")
        .list-with-icon(v-show="menuCondition.contentNumber === 0")
          router-link.item(to="/products/cdn")
            .title.green CDN
            .description 跨地区、跨运营商覆盖的内容分发网络
            .icon.cdn
          router-link.item(to="/products/live")
            .title.yellow 直播云
            .description 超低延迟、高码率和大并发的音视频直播服务
            .icon.live
          router-link.item(to="/products/file-storage")
            .title.orange 云存储
            .description 海量、安全和高可靠的云存储服务
            .icon.uss
          router-link.item(to="/products/vod")
            .title.blue 点播云
            .description 安全稳定、弹性和高可用的音视频点播服务
            .icon.vod
          router-link.item(to="/products/process")
            .title.purple 云处理
            .description 简单、灵活并支持多终端的云处理服务
            .icon.ups
          router-link.item(to="/products/short-video")
            .title.lighten-blue 短视频
            .description 集短视频采集、存储、分发、播放的整体解决方案
            .icon.short-video
          router-link.item(to="/products/marketing")
            .title.darkBlue 流量营销服务
            .description 三网通用、超低成本并可快速开展的营销服务
            .icon.marketing
          router-link.item(to="/products/ssl")
            .title.red SSL 证书服务
            .description 申购、管理一站式服务，快速实现全站 HTTPS
            .icon.certificate
          router-link.item(to="/products/sms")
            .title.green 短信服务
            .description 提供企业级短信送达服务，三网合一，到达率高
            .icon.sms
          router-link.item(to="/products/audit")
            .title.bluePurple 内容识别
            .description 高准确率的直播、点播、图片色情识别服务
            .icon.audit
        .list-with-icon(v-show="menuCondition.contentNumber === 1")
          router-link.item(to="/solutions/media")
            .title.green 音视频
            .description 海量存储、加速分发、高效处理一站式解决
            .icon.av
          router-link.item(to="/solutions/mobile")
            .title.yellow 移动 APP
            .description 有效降低网络延迟，大幅提升访问速度
            .icon.mobile-s
          router-link.item(to="/solutions/education")
            .title.orange 在线教育
            .description 提供点播/直播/版权保护服务，满足多样化需求
            .icon.education
          router-link.item(to="/solutions/game")
            .title.blue 游戏
            .description 多线 BGP 覆盖各地区运营商，解决网络延迟问题
            .icon.game
          router-link.item(to="/solutions/ecommerce")
            .title.purple 电商 & O2O
            .description 加速网站访问，高峰期弹性扩展从容应对“大促”
            .icon.e-commerce
          router-link.item(to="/solutions/fusionstorage")
            .title.darkBlue 融合云存储
            .description 构建多源存储架构，数据可平滑迁移
            .icon.fusion
        .list(v-show="menuCondition.contentNumber === 2")
          .row
            .title 文档中心
            a.link(href="http://docs.upyun.com/" target="_blank") 产品文档
            a.link(href="http://docs.upyun.com/guide/#api" target="_blank") API 文档
            a.link(href="http://docs.upyun.com/download/#sdk" target="_blank") SDK 与工具
          .row
            .title 帮助
            a.link(href="http://docs.upyun.com/guide/" target="_blank") 新手指南
            a.link(href="http://docs.upyun.com/faq/" target="_blank") 常见问题
          .row
            .title 开发者社区
            a.link(href="http://segmentfault.com/t/又拍云存储" target="_blank") 技术问答
            a.link(href="https://blog.upyun.com/" target="_blank") BLOG
        .list.list-one-column(v-show="menuCondition.contentNumber === 3")
          a.link(href="https://tech.upyun.com/?topic=%E4%BA%A7%E5%93%81%E5%8A%A8%E6%80%81&page=1", target="_blank") 产品动态
          a.link(href="https://tech.upyun.com/?topic=%E5%AA%92%E4%BD%93%E6%8A%A5%E9%81%93&page=1", target="_blank") 媒体报道
          a.link(href="https://tech.upyun.com/?topic=%E6%8A%80%E6%9C%AF%E5%88%86%E4%BA%AB&page=1", target="_blank") 技术分享
          a.link(href="https://tech.upyun.com/?topic=Opentalk&page=1", target="_blank") Open Talk
        .list.list-one-column(v-show="menuCondition.contentNumber === 4")
          router-link.link(to="/https") HTTPS 加密
          router-link.link(to="/webp") WebP 体验
          router-link.link(to="/league") 又拍云联盟
          router-link.link(to="/brandNew") 品牌形象升级
</template>

<script>
export default {
  data () {
    return {
      menuActive: false,
      menuShowing: false,
      menuCondition: { left: -41, width: 455, height: 460, contentNumber: 0 },
      conditions: [
        { left: -41, width: 455, height: 460, contentNumber: 0 },
        { left: 51, width: 455, height: 290, contentNumber: 1 },
        { left: 277, width: 384, height: 164, contentNumber: 2 },
        { left: 525, width: 134, height: 147, contentNumber: 3 },
        { left: 620, width: 159, height: 150, contentNumber: 4 }
      ],
      timeout: {},
      fixedStyle: false
    }
  },
  mounted () {
    window.addEventListener('scroll', () => {
      const top = window.pageYOffset || document.documentElement.scrollTop
      if (top > 50) {
        if (!this.fixedStyle) {
          this.fixedStyle = true
        }
      } else {
        if (this.fixedStyle) {
          this.fixedStyle = false
        }
      }
    })
  },
  methods: {
    showMenu (conditionNumber) {
      this.clearTimeout()
      this.menuShowing = true
      if (conditionNumber !== undefined) this.menuCondition = this.conditions[conditionNumber]
      this.timeout = setTimeout(() => {
        this.menuActive = true
        setTimeout(() => {
          this.checkMenu()
        }, 1000)
      }, 100)
    },
    hideMenu () {
      this.clearTimeout()
      this.timeout = setTimeout(() => {
        this.menuActive = false
        setTimeout(() => {
          this.checkMenu()
        }, 1000)
      }, 300)
    },
    clearTimeout () {
      window.clearTimeout(this.timeout)
    },
    checkMenu () {
      this.menuShowing = this.menuActive
    }
  }
}
</script>
