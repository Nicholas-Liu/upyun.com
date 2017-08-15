<style lang="sass" scoped>
@import "./weixin_guide.sass"
</style>

<template lang="pug">
.weixin
  .weixin-mask(v-if="isweixin")
    img(src="./assets/weixin-guide.png")
  .weixin-guide
    .weixin-guide__header
      img(src="./assets/weixin-logo.png")
      p 短视频 SDK 演示
    .weixin-guide__introduction
      ul
        li
          .weixin-guide__introduction-item
            img(src="./assets/homepage_video.png")
            p 拍摄视频
        li
          .weixin-guide__introduction-item
            img(src="./assets/homepage_inport.png")
            p 编辑视频
        li
          .weixin-guide__introduction-item
            img(src="./assets/homepage_play.png")
            p 播放视频
</template>

<script>
import $ from 'jquery'
export default {
  data () {
    return {
      isweixin: false
    }
  },
  head: {
    title: {
      inner: '短视频'
    }
  },
  created () {
    this.$nextTick(() => {
      $('body').css('min-width', 'initial')
      this.dpr()
      this.downloadApk()
    })
  },
  methods: {
    dpr () {
      var win = window
      var lib = window['lib'] || (window['lib'] = {})
      var doc = win.document
      var docEl = doc.documentElement
      var metaEl = doc.querySelector('meta[name="viewport"]')
      var flexibleEl = doc.querySelector('meta[name="flexible"]')
      var dpr = 0
      var scale = 0
      var tid
      var flexible = lib.flexible || (lib.flexible = {})

      if (metaEl) {
        var match = metaEl.getAttribute('content').match(/initial-scale=([\d.]+)/)
        if (match) {
          scale = parseFloat(match[1])
          dpr = parseInt(1 / scale)
        }
      } else if (flexibleEl) {
        var content = flexibleEl.getAttribute('content')
        if (content) {
          var initialDpr = content.match(/initial-dpr=([\d.]+)/)
          var maximumDpr = content.match(/maximum-dpr=([\d.]+)/)
          if (initialDpr) {
            dpr = parseFloat(initialDpr[1])
            scale = parseFloat((1 / dpr).toFixed(2))
          }
          if (maximumDpr) {
            dpr = parseFloat(maximumDpr[1])
            scale = parseFloat((1 / dpr).toFixed(2))
          }
        }
      }

      if (!dpr && !scale) {
        var isIPhone = win.navigator.appVersion.match(/iphone/gi)
        var devicePixelRatio = win.devicePixelRatio
        if (isIPhone) {
          // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
          if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
            dpr = 3
          } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)) {
            dpr = 2
          } else {
            dpr = 1
          }
        } else {
          // 其他设备下，仍旧使用1倍的方案
          dpr = 1
        }
        scale = 1 / dpr
      }

      docEl.setAttribute('data-dpr', dpr)

      if (!metaEl) {
        metaEl = doc.createElement('meta')
        metaEl.setAttribute('name', 'viewport')
        metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no')
        if (docEl.firstElementChild) {
          docEl.firstElementChild.appendChild(metaEl)
        } else {
          var wrap = doc.createElement('div')
          wrap.appendChild(metaEl)
          doc.write(wrap.innerHTML)
        }
      }

      function refreshRem () {
        var width = docEl.getBoundingClientRect().width
        if (width / dpr > 540) {
          width = 540 * dpr
        }
        var rem = width / 10
        docEl.style.fontSize = rem + 'px'
        flexible.rem = win.rem = rem
      }

      win.addEventListener('resize', function () {
        clearTimeout(tid)
        tid = setTimeout(refreshRem, 300)
      }, false)
      win.addEventListener('pageshow', function (e) {
        if (e.persisted) {
          clearTimeout(tid)
          tid = setTimeout(refreshRem, 300)
        }
      }, false)

      if (doc.readyState === 'complete') {
        doc.body.style.fontSize = 12 * dpr + 'px'
      } else {
        doc.addEventListener('DOMContentLoaded', function (e) {
          doc.body.style.fontSize = 12 * dpr + 'px'
        }, false)
      }

      refreshRem()

      flexible.dpr = win.dpr = dpr
      flexible.refreshRem = refreshRem
      flexible.rem2px = function (d) {
        var val = parseFloat(d) * this.rem
        if (typeof d === 'string' && d.match(/rem$/)) {
          val += 'px'
        }
        return val
      }
      flexible.px2rem = function (d) {
        var val = parseFloat(d) / this.rem
        if (typeof d === 'string' && d.match(/px$/)) {
          val += 'rem'
        }
        return val
      }
    },
    downloadApk () {
      const isAndroid = window.navigator.appVersion.match(/android/gi)
      const isIPhone = window.navigator.appVersion.match(/iphone/gi)
      if (isIPhone) window.location.href = 'https://itunes.apple.com/cn/app/id1265074958?mt=8'
      else if (isAndroid) {
        const isweixin = /micromessenger/.test(navigator.userAgent.toLowerCase())
        if (isweixin) this.isweixin = true
        else window.location.href = 'http://p.upyun.com/app/upyun_android_short_video.apk'
      }
    }
  }
}
</script>
