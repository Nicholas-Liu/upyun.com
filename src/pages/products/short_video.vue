<style lang="sass" src="./products.sass" scoped></style>

<template lang="pug">
layout(:colors="colorSet")
  .container.hero-inner(slot="hero")
    .info
      .title 短视频
      .description 又拍云短视频（UPYUN Short Video）集短视频采集、上传、存储、分发、播放于一体，借助短视频 SDK、上传加速、不限量存储、稳定快速的 CDN 及播放器 SDK，为用户提供专业可靠的短视频解决方案。
      .buttons
        up_button(:color="colorSet.end", type="major", :url="$links.console", target="_blank") 免费试用
        up_button(url="/contact") 联系我们
      .price 短视频 SDK 提供免费版。
    .icon
      icon
  template(slot="page")
    .section-fetures
      .container
        .main-title 产品特性
        .features
          .item
            img(src="./assets/shortVideo-icon-1.svg")
            .title 短视频 SDK
            .description 支持短视频拍摄、编辑、合成，支持断点续拍、回删、美颜、滤镜、水印、贴纸、自定义背景音乐等功能。
          .item
            img(src="./assets/shortVideo-icon-2.svg")
            .title 就近上传
            .description 基于 CDN 网络的全网上传加速，实现就近上传短视频，支持弱网环境断点续传上传。
          .item
            img(src="./assets/shortVideo-icon-3.svg")
            .title 不限量存储
            .description 支持将短视频存储在又拍云存储中，并提供 CDN 使用流量 1:1 的存储空间免费，存储成本更低。
          .item
            img(src="./assets/shortVideo-icon-4.svg")
            .title 全网分发
            .description 自建全网 200+ CDN 节点，支持短视频分发，支持分段加载（分段缓存），支持视频拖拉，用户使用体验更好，流量消耗更少。
          .item
            img(src="./assets/shortVideo-icon-5.svg")
            .title 播放器 SDK
            .description 提供移动端播放器 SDK，提供 SEEK（拖拉）、分段缓冲、预连接（秒播）等功能，减少开发工作量。
          .item
            img(src="./assets/shortVideo-icon-6.svg")
            .title 云端处理
            .description GPU+CPU 混合处理集群，支持短视频处理，提供转码、剪辑、拼接、切片、水印、截图等功能。
    .section-video-introduction
      .container
        .main-title 短视频 SDK
        .description(style="width: 650px") 集成短视频拍摄、编辑、合成、上传、播放功能，帮助用户省去开发时间
        .introduction
          .item
            img(src="./assets/shortVideo-introduction-1.png")
            p.item-introduction 断点续传和回删
          .item
            img(src="./assets/shortVideo-introduction-2.png")
            p.item-introduction 美颜和滤镜
          .item
            img(src="./assets/shortVideo-introduction-3.png")
            p.item-introduction 人脸识别和贴纸
          .item
            img(src="./assets/shortVideo-introduction-4.png")
            p.item-introduction 自定义背景音乐
    up_gradient#short-video-demo.section-video(:colors="colorSet")
      .inner
        .container
          .main-title 短视频 SDK 体验
          .description 扫一扫，立即体验
          img(src="./assets/shortVideo-app.png" width="240")
    #section-version
      .container
        .main-title 短视频 SDK 版本
        .description 提供免费版、标准版、高级版，您可以根据业务需要选择
        table
          tr
            td(:rowspan="sdk.photography.module.length + 1") {{sdk.photography.name}}
            td
            td
            td 免费版
            td 标准版
            td 高级版
          tr(v-for="(module, index) in sdk.photography.module")
            td {{index + 1}}
            td {{module.moduleName}}
            td
              i.icon-ok(v-if="module.free")
            td
              i.icon-ok(v-if="module.standard")
            td
              i.icon-ok(v-if="module.advanced")
          tr(v-if="allSdk")
            td(:rowspan="sdk.edit.module.length") {{sdk.edit.name}}
            td 1
            td {{sdk.edit.module[0].moduleName}}
            td
              i.icon-ok(v-if="sdk.edit.module[0].free")
            td
              i.icon-ok(v-if="sdk.edit.module[0].standard")
            td
              i.icon-ok(v-if="sdk.edit.module[0].advanced")
          tr(v-for="(module, index) in sdk.edit.module" v-if="index > 0 && allSdk")
            td {{index + 1}}
            td {{module.moduleName}}
            td
              i.icon-ok(v-if="module.free")
            td
              i.icon-ok(v-if="module.standard")
            td
              i.icon-ok(v-if="module.advanced")
          tr(v-if="allSdk")
            td(:rowspan="sdk.synthesis.module.length") {{sdk.synthesis.name}}
            td 1
            td {{sdk.synthesis.module[0].moduleName}}
            td
              i.icon-ok(v-if="sdk.synthesis.module[0].free")
            td
              i.icon-ok(v-if="sdk.synthesis.module[0].standard")
            td
              i.icon-ok(v-if="sdk.synthesis.module[0].advanced")
          tr(v-for="(module, index) in sdk.synthesis.module" v-if="index > 0 && allSdk")
            td {{index + 1}}
            td {{module.moduleName}}
            td
              i.icon-ok(v-if="module.free")
            td
              i.icon-ok(v-if="module.standard")
            td
              i.icon-ok(v-if="module.advanced")
          tr(v-if="allSdk")
            td(:rowspan="sdk.upload.module.length") {{sdk.upload.name}}
            td 1
            td {{sdk.upload.module[0].moduleName}}
            td
              i.icon-ok(v-if="sdk.upload.module[0].free")
            td
              i.icon-ok(v-if="sdk.upload.module[0].standard")
            td
              i.icon-ok(v-if="sdk.upload.module[0].advanced")
          tr(v-for="(module, index) in sdk.upload.module" v-if="index > 0 && allSdk")
            td {{index + 1}}
            td {{module.moduleName}}
            td
              i.icon-ok(v-if="module.free")
            td
              i.icon-ok(v-if="module.standard")
            td
              i.icon-ok(v-if="module.advanced")
          tr(v-if="allSdk")
            td(:rowspan="sdk.play.module.length") {{sdk.play.name}}
            td 1
              td {{sdk.play.module[0].moduleName}}
            td
              i.icon-ok(v-if="sdk.play.module[0].free")
            td
              i.icon-ok(v-if="sdk.play.module[0].standard")
            td
              i.icon-ok(v-if="sdk.play.module[0].advanced")
          tr(v-for="(module, index) in sdk.play.module" v-if="index > 0 && allSdk")
            td {{index + 1}}
            td {{module.moduleName}}
            td
              i.icon-ok(v-if="module.free")
            td
              i.icon-ok(v-if="module.standard")
            td
              i.icon-ok(v-if="module.advanced")
        up_button(:color="colorSet.mid", :click="viewAll", v-show="!allSdk") 查看全部
        up_button(:color="colorSet.mid", :click="viewAll", v-show="allSdk", url="#section-version") 收起
    .section-scenes
      .container
        .main-title 应用场景
        .description 一站式解决方案 = 短视频 SDK + 上传 + 存储 + CDN + 播放
        .scenes
          .item
            .img
              img(src="./assets/shortVideo-sence-1.svg")
            .title 搞笑幽默
          .item
            .img
              img(src="./assets/shortVideo-sence-2.svg")
            .title 电商买家卖家秀
          .item
            .img
              img(src="./assets/shortVideo-sence-3.svg")
            .title 户外&旅游
          .item
            .img
              img(src="./assets/shortVideo-sence-4.svg")
            .title 美食
          .item
            .img
              img(src="./assets/shortVideo-sence-5.svg")
            .title 新闻资讯
          .item
            .img
              img(src="./assets/shortVideo-sence-6.svg")
            .title 广场舞
    section_pricing(selection="shortVideo", :color="colorSet.mid")
    section_help(selection="shortVideo", :color="colorSet.mid")
</template>

<script>
import layout from '../../components/layout'
import colors from '../../services/colors'
import section_help from './section_help'
import section_pricing from './section_pricing'
import icon from './hero_icons/short_video_icon'

export default {
  data () {
    return {
      colorSet: colors.collection.darkenBlue,
      allSdk: false,
      sdk: {
        'photography': {
          name: '拍摄',
          module: [
            {
              moduleName: '分辨率、码率设置',
              free: false,
              standard: false,
              advanced: true
            },
            {
              moduleName: '拍摄的最小、最大时长设置',
              free: true,
              standard: true,
              advanced: true
            },
            {
              moduleName: '前后摄像头切换',
              free: true,
              standard: true,
              advanced: true
            },
            {
              moduleName: '闪光灯，默认关闭',
              free: true,
              standard: true,
              advanced: true
            },
            {
              moduleName: '定时拍摄，定时时长设置',
              free: false,
              standard: false,
              advanced: true
            },
            {
              moduleName: '断点拍摄',
              free: true,
              standard: true,
              advanced: true
            },
            {
              moduleName: '重拍（回删）',
              free: true,
              standard: true,
              advanced: true
            },
            {
              moduleName: '美颜，默认开启',
              free: true,
              standard: true,
              advanced: true
            },
            {
              moduleName: '滤镜',
              free: false,
              standard: true,
              advanced: true
            },
            {
              moduleName: '贴纸',
              free: false,
              standard: false,
              advanced: true
            },
            {
              moduleName: '手动对焦，默认自动对焦',
              free: false,
              standard: true,
              advanced: true
            },
            {
              moduleName: '画面放大',
              free: false,
              standard: true,
              advanced: true
            },
            {
              moduleName: '手动曝光',
              free: false,
              standard: true,
              advanced: true
            },
            {
              moduleName: '自定义界面布局和 UI 样式',
              free: true,
              standard: true,
              advanced: true
            }
          ]
        },
        'edit': {
          name: '编辑',
          module: [
            {
              moduleName: '导入视频',
              free: true,
              standard: true,
              advanced: true
            },
            {
              moduleName: '按帧预览',
              free: false,
              standard: true,
              advanced: true
            },
            {
              moduleName: '剪辑',
              free: false,
              standard: true,
              advanced: true
            },
            {
              moduleName: '设置剪辑开始点',
              free: false,
              standard: true,
              advanced: true
            },
            {
              moduleName: '设置剪辑结束点',
              free: false,
              standard: true,
              advanced: true
            },
            {
              moduleName: '滤镜',
              free: false,
              standard: true,
              advanced: true
            },
            {
              moduleName: '贴纸',
              free: false,
              standard: false,
              advanced: true
            },
            {
              moduleName: '原音大小调整、静音',
              free: false,
              standard: true,
              advanced: true
            },
            {
              moduleName: '录音（配音）',
              free: false,
              standard: true,
              advanced: true
            },
            {
              moduleName: '场景音乐',
              free: false,
              standard: false,
              advanced: true
            },
            {
              moduleName: '字幕、气泡字幕',
              free: false,
              standard: false,
              advanced: true
            },
            {
              moduleName: '自定义水印（水印图、位置）',
              free: true,
              standard: true,
              advanced: true
            },
            {
              moduleName: '自定义 MV',
              free: false,
              standard: false,
              advanced: true
            },
            {
              moduleName: '自定义界面布局和UI样式',
              free: true,
              standard: true,
              advanced: true
            }
          ]
        },
        'synthesis': {
          name: '合成',
          module: [
            {
              moduleName: '硬编码',
              free: true,
              standard: true,
              advanced: true
            },
            {
              moduleName: 'H.264/AAC',
              free: true,
              standard: true,
              advanced: true
            },
            {
              moduleName: 'H.265',
              free: false,
              standard: false,
              advanced: true
            },
            {
              moduleName: '输出码率、分辨率设置',
              free: false,
              standard: true,
              advanced: true
            }
          ]
        },
        'upload': {
          name: '上传',
          module: [
            {
              moduleName: '就近上传',
              free: true,
              standard: true,
              advanced: true
            },
            {
              moduleName: '上传链路优化',
              free: true,
              standard: true,
              advanced: true
            },
            {
              moduleName: '断点续传',
              free: true,
              standard: true,
              advanced: true
            }
          ]
        },
        'play': {
          name: '播放',
          module: [
            {
              moduleName: '秒播（预连接）',
              free: true,
              standard: true,
              advanced: true
            },
            {
              moduleName: '分段加载（分段缓存）',
              free: true,
              standard: true,
              advanced: true
            },
            {
              moduleName: 'SEEK（拖拉）',
              free: true,
              standard: true,
              advanced: true
            },
            {
              moduleName: '画面旋转',
              free: true,
              standard: true,
              advanced: true
            },
            {
              moduleName: '自定义界面布局和 UI 样式',
              free: true,
              standard: true,
              advanced: true
            }
          ]
        }
      }
    }
  },
  head: {
    title: {
      inner: '短视频 - 集采集、存储、分发、播放的一站式解决方案'
    },
    meta: [
      { name: 'keywords', content: '短视频，短视频 SDK，又拍云短视频，阿里云短视频，七牛云短视频，腾讯云短视频，金山云短视频，涂图短视频，趣拍短视频', id: 'kw' },
      { name: 'description', content: '集短视频采集、上传、存储、分发、播放于一体，借助短视频 SDK、上传加速、不限量存储、稳定快速的 CDN 及播放器 SDK，为用户提供专业可靠的短视频解决方案。', id: 'desc' }
    ]
  },
  methods: {
    viewAll () {
      this.allSdk = !this.allSdk
    }
  },
  components: { layout, section_help, section_pricing, icon }
}
</script>
