<style lang="sass" src="./618.sass" scoped></style>

<template lang="pug">
layout(class="event618")
  div(slot="hero")
    .cover
  div(slot="page")
    .wrap
      section.instruction
        p.section-title 充值立返，最高返 16%
        p 6 月 16 日 - 6 月 30 日，充值满额，即可获得 8% - 16% 的优惠，单笔充值最多可返 4800 元
        .choices
          .choice
            p 充500
            p 返40
          .choice
            p 充2000
            p 返200
          .choice
            p 充5000
            p 返600
        .choices
          .choice
            p 充10000
            p 返1400
          .choice
            p 充30000
            p 返4800
      section.provision
        .context
          p.context-title 活动规则
          ul
            li 活动时间：2017 年 6 月 16 日 00:00 - 6 月 30 日 23:59;
            li 活动对象：所有新老客户（不包括独立计费用户）；
            li 活动优惠将以代金券的形式，即时返送到充值账户；
            li 后续使用期间，费用将会优先从代金券扣除，代金券有效期为6个月；
            li 活动返额以单笔充值金额为准；
            li 本次活动最终解释权归又拍云所有。
        a.charge-btn(href="https://console.upyun.com/billing/charge/", target="_blank") 立刻充值

</template>

<script>
import layout from './layout'

export default {
  data () {
    return {
    }
  },
  components: { layout },
  head: {
    title: {
      inner: '2017 年中 618 大促'
    },
    meta: [
      { name: 'keywords', content: '又拍云,CDN优惠,直播优惠,存储优惠,云服务优惠', id: 'kw' },
      { name: 'description', content: '又拍云 2017 年中 618大促 ，活动期间充值最高优惠16%，立享 CDN、直播云、点播云、云存储、短信服务等优惠。', id: 'desc' }
    ]
  }
}
</script>
