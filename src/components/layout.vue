<style lang="sass" src="./layout.sass" scoped></style>
<template lang="pug">
.layout
  .hero(:style="{ 'background-image': 'linear-gradient(312deg, ' + oldColors.start + ' 0%, ' + oldColors.end + ' 100%)', height: `${heroHeight}px`, overflow: heroOverflow }")
    .cover(:style="{ 'background-image': 'linear-gradient(312deg, ' + newColors.start + ' 0%, ' + newColors.end + ' 100%)', 'opacity': coverOpacity }")
    page_header
    slot(name="hero")
  slot(name="page")
  page_footer
</template>

<script>
import page_header from './page_header'
import page_footer from './page_footer'

export default {
  data () {
    return {
      oldColors: {},
      newColors: {},
      coverOpacity: 0
    }
  },
  props: {
    colors: {},
    heroHeight: {
      default: 620
    },
    heroOverflow: ''
  },
  methods: {
    switch (from, to) {
      this.oldColors = from
      this.newColors = to
      setTimeout(() => {
        this.coverOpacity = 1
      }, 10)
    }
  },
  mounted () {
    var newColors = this.colors
    var oldColors = JSON.parse(window.sessionStorage.getItem('up_colors')) || newColors
    this.switch(oldColors, newColors)
    window.sessionStorage.setItem('up_colors', JSON.stringify(newColors))
  },
  head: {
    title: {
      inner: '又拍云 - 加速在线业务',
      separator: ' ',
      complement: ' '
    },
    meta: [
      { name: 'keywords', content: 'CDN,云分发,CDN加速,直播云,点播云,云存储,SSL证书服务,云处理,云服务', id: 'kw' },
      { name: 'description', content: '国内领先的云服务商，全球拥有超200个自建CDN节点，为近20万用户提供CDN、直播云、点播云、云存储、云处理等一站式加速方案。', id: 'desc' }
    ]
  },
  components: { page_header, page_footer }
}
</script>
