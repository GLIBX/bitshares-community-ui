<template>
  <div class="backup-step h-full sm:w-120">
    <div class="backup-step-title">backup</div>
    <div class="backup-step-subtitle">You need to backup account before using it</div>
    <div class="backup-step-icon"/>
    <div class="backup-step-content">
      <div class="backup-step-content-item">Are you being watched?</div>
      <div class="backup-step-content-item">Nearby windows?</div>
      <div class="backup-step-content-item">Hidden cameras?</div>
      <div class="backup-step-content-item">Shoulder-spies?</div>
    </div>
    <div
      class="backup-step-button">
      <Button
        text="Continue to backup"
        width="full"
        @click="$emit('change', stepConfig['BACKUP_STEP_2'])"
      />
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button/Button'
export default {
  components: {
    Button
  },
  props: {
    stepConfig: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
  .backup-step {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-family: config('fonts.gotham');
    padding: 0 1.25rem 1.25rem;
    min-height: 30.4375rem;

    .backup-step-title {
      margin-top: 0.9375rem;
      text-transform: uppercase;
      font-family: config('fonts.gotham-medium');
      font-size: config('textSizes.lg');
    }
    .backup-step-subtitle {
      margin: 0.9375rem auto 1.5rem;
      font-weight: config('fontWeights.semibold');
      font-size: config('textSizes.lg');
      text-align: center;
    }

    .backup-step-content {
      margin-top: auto;
      font-weight: config('fontWeights.semibold');
      margin-bottom: 1.25rem;

      .backup-step-content-item {
        line-height: 1.3;
        font-size: 1.55rem;
      }
    }

    .backup-step-button {
      display: flex;
      margin-top: auto;
      box-sizing: border-box;
      font-family: config('fonts.gotham-medium');
    }

    .backup-step-icon {
      margin: auto auto 1.25rem auto;
      width: 6rem;
      height: 6rem;
      transform: scale(1.8, 1.8);
      background-repeat: no-repeat;
      background-position: 50% 55%;
      background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI4MHB4IiBoZWlnaHQ9IjgwLjAwMXB4IiB2aWV3Qm94PSIwIDAgODAgODAuMDAxIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA4MCA4MC4wMDEiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnIGlkPSJzdGFyX3g1Rl9maWwiPjxnIGlkPSJzdGFyX3g1Rl9saW4iPjwvZz48L2c+PGc+PGNpcmNsZSBvcGFjaXR5PSIwLjQ1IiBjeD0iNDAiIGN5PSI0MC4wMDEiIHI9IjQwIi8+PGc+PHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTY2LjM1OSw1OC4zMThIMTMuNjQxYy0xLjc4NywwLTMuMjM4LTEuNDUzLTMuMjM4LTMuMjM4VjI0LjkyMmMwLTEuNzg2LDEuNDUxLTMuMjM5LDMuMjM4LTMuMjM5aDUyLjcxOWMxLjc4NSwwLDMuMjM4LDEuNDUzLDMuMjM4LDMuMjM5VjU1LjA4QzY5LjU5OCw1Ni44NjUsNjguMTQ1LDU4LjMxOCw2Ni4zNTksNTguMzE4eiBNMTMuNjQxLDIyLjM1M2MtMS40MTYsMC0yLjU2OCwxLjE1My0yLjU2OCwyLjU2OVY1NS4wOGMwLDEuNDE2LDEuMTUyLDIuNTY4LDIuNTY4LDIuNTY4aDUyLjcxOWMxLjQxNiwwLDIuNTY4LTEuMTUyLDIuNTY4LTIuNTY4VjI0LjkyMmMwLTEuNDE3LTEuMTUyLTIuNTY5LTIuNTY4LTIuNTY5SDEzLjY0MXoiLz48cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNjMuNDU1LDU0LjUyMWgtNDYuOTFjLTEuMjk1LDAtMi4zNDYtMS4wNTMtMi4zNDYtMi4zNDZWMjcuODI3YzAtMS4yOTMsMS4wNTEtMi4zNDYsMi4zNDYtMi4zNDZoNDYuOTFjMS4yOTMsMCwyLjM0NiwxLjA1MiwyLjM0NiwyLjM0NnYyLjAxMWMwLDAuMTg1LTAuMTUsMC4zMzUtMC4zMzYsMC4zMzVzLTAuMzM0LTAuMTUtMC4zMzQtMC4zMzV2LTIuMDExYzAtMC45MjQtMC43NTItMS42NzYtMS42NzYtMS42NzZoLTQ2LjkxYy0wLjkyNCwwLTEuNjc2LDAuNzUyLTEuNjc2LDEuNjc2djI0LjM0OWMwLDAuOTI0LDAuNzUyLDEuNjc2LDEuNjc2LDEuNjc2aDQ2LjkxYzAuOTI0LDAsMS42NzYtMC43NTIsMS42NzYtMS42NzZ2LTIuMDEyYzAtMC4xODQsMC4xNDgtMC4zMzQsMC4zMzQtMC4zMzRzMC4zMzYsMC4xNSwwLjMzNiwwLjMzNHYyLjAxMkM2NS44MDEsNTMuNDY5LDY0Ljc0OCw1NC41MjEsNjMuNDU1LDU0LjUyMXoiLz48cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNjUuNDY1LDQzLjAxOGMtMC4xODYsMC0wLjMzNC0wLjE1LTAuMzM0LTAuMzM2di01LjM2MWMwLTAuMTg1LDAuMTQ4LTAuMzM1LDAuMzM0LTAuMzM1czAuMzM2LDAuMTUsMC4zMzYsMC4zMzV2NS4zNjFDNjUuODAxLDQyLjg2Nyw2NS42NSw0My4wMTgsNjUuNDY1LDQzLjAxOHoiLz48Zz48cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNjYuODA1LDM3LjY1NmgtMi42OGMtMC4xODYsMC0wLjMzNi0wLjE1LTAuMzM2LTAuMzM1di03LjQ4M2MwLTAuMTg1LDAuMTUtMC4zMzUsMC4zMzYtMC4zMzVoMi42OGMwLjE4NiwwLDAuMzM2LDAuMTUsMC4zMzYsMC4zMzV2Ny40ODNDNjcuMTQxLDM3LjUwNiw2Ni45OSwzNy42NTYsNjYuODA1LDM3LjY1NnogTTY0LjQ1OSwzNi45ODZoMi4wMTJ2LTYuODEzaC0yLjAxMlYzNi45ODZ6Ii8+PHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTY2LjgwNSw1MC41aC0yLjY4Yy0wLjE4NiwwLTAuMzM2LTAuMTUtMC4zMzYtMC4zMzZ2LTcuNDgyYzAtMC4xODYsMC4xNS0wLjMzNCwwLjMzNi0wLjMzNGgyLjY4YzAuMTg2LDAsMC4zMzYsMC4xNDgsMC4zMzYsMC4zMzR2Ny40ODJDNjcuMTQxLDUwLjM1LDY2Ljk5LDUwLjUsNjYuODA1LDUwLjV6IE02NC40NTksNDkuODNoMi4wMTJ2LTYuODEzaC0yLjAxMlY0OS44M3oiLz48L2c+PGc+PHBhdGggZmlsbD0iI0ZGRjIwMCIgZD0iTTQ5LjIyNSw1MC4yNmMtNS42NTgsMC0xMC4yNi00LjYwMi0xMC4yNi0xMC4yNThjMC01LjY1OCw0LjYwMi0xMC4yNiwxMC4yNi0xMC4yNmM1LjY1NiwwLDEwLjI1OCw0LjYwMywxMC4yNTgsMTAuMjZDNTkuNDgyLDQ1LjY1OCw1NC44ODEsNTAuMjYsNDkuMjI1LDUwLjI2eiBNNDkuMjI1LDMwLjQxMmMtNS4yODcsMC05LjU5LDQuMzAyLTkuNTksOS41OWMwLDUuMjg3LDQuMzAzLDkuNTg4LDkuNTksOS41ODhzOS41ODgtNC4zMDEsOS41ODgtOS41ODhDNTguODEzLDM0LjcxNCw1NC41MTIsMzAuNDEyLDQ5LjIyNSwzMC40MTJ6Ii8+PHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQ5LjIyNSw0My43NGMtMi4wNjMsMC0zLjc0LTEuNjc4LTMuNzQtMy43MzhjMC0yLjA2MywxLjY3OC0zLjc0MSwzLjc0LTMuNzQxYzIuMDYxLDAsMy43MzgsMS42NzgsMy43MzgsMy43NDFDNTIuOTYzLDQyLjA2Myw1MS4yODUsNDMuNzQsNDkuMjI1LDQzLjc0eiBNNDkuMjI1LDM2LjkzMWMtMS42OTMsMC0zLjA3LDEuMzc3LTMuMDcsMy4wNzFjMCwxLjY5MSwxLjM3NywzLjA2OCwzLjA3LDMuMDY4YzEuNjkxLDAsMy4wNjgtMS4zNzcsMy4wNjgtMy4wNjhDNTIuMjkzLDM4LjMwOSw1MC45MTYsMzYuOTMxLDQ5LjIyNSwzNi45MzF6Ii8+PGc+PHBhdGggZmlsbD0iI0ZGRjIwMCIgZD0iTTQ5LjIyNSwzNS4yNTljLTAuMTg2LDAtMC4zMzYtMC4xNS0wLjMzNi0wLjMzNXYtMy4xOTljMC0wLjE4NSwwLjE1LTAuMzM1LDAuMzM2LTAuMzM1czAuMzM0LDAuMTUsMC4zMzQsMC4zMzV2My4xOTlDNDkuNTU5LDM1LjEwOSw0OS40MSwzNS4yNTksNDkuMjI1LDM1LjI1OXoiLz48cGF0aCBmaWxsPSIjRkZGMjAwIiBkPSJNNDkuMjI1LDQ4LjYxMWMtMC4xODYsMC0wLjMzNi0wLjE1LTAuMzM2LTAuMzM0di0zLjE5OWMwLTAuMTg2LDAuMTUtMC4zMzYsMC4zMzYtMC4zMzZzMC4zMzQsMC4xNSwwLjMzNCwwLjMzNnYzLjE5OUM0OS41NTksNDguNDYxLDQ5LjQxLDQ4LjYxMSw0OS4yMjUsNDguNjExeiIvPjwvZz48cGF0aCBmaWxsPSIjRkZGMjAwIiBkPSJNNDYuNzEzLDM0LjI3MmMtMC4xMzMsMC0wLjI1Ni0wLjA3OC0wLjMxMS0wLjIwN2wtMC42NTQtMS41ODJjLTAuMDcyLTAuMTcxLDAuMDEtMC4zNjcsMC4xODItMC40MzhjMC4xNy0wLjA3MiwwLjM2NSwwLjAxLDAuNDM4LDAuMTgxbDAuNjU0LDEuNTgyYzAuMDcyLDAuMTcxLTAuMDEsMC4zNjctMC4xODIsMC40MzhDNDYuNzk5LDM0LjI2NCw0Ni43NTYsMzQuMjcyLDQ2LjcxMywzNC4yNzJ6Ii8+PHBhdGggZmlsbD0iI0ZGRjIwMCIgZD0iTTUyLjM5MSw0Ny45ODJjLTAuMTMxLDAtMC4yNTYtMC4wNzgtMC4zMDktMC4yMDdsLTEuMjI1LTIuOTU3Yy0wLjA3Mi0wLjE3LDAuMDEtMC4zNjUsMC4xODItMC40MzhjMC4xNy0wLjA3MiwwLjM2NSwwLjAxMiwwLjQzOCwwLjE4MmwxLjIyNSwyLjk1N2MwLjA3LDAuMTctMC4wMTIsMC4zNjUtMC4xODIsMC40MzhDNTIuNDc3LDQ3Ljk3NSw1Mi40MzQsNDcuOTgyLDUyLjM5MSw0Ny45ODJ6Ii8+PHBhdGggZmlsbD0iI0ZGRjIwMCIgZD0iTTQ0LjY2NiwzNS43NzljLTAuMDg2LDAtMC4xNzItMC4wMzMtMC4yMzYtMC4wOThsLTEuMjk1LTEuMjk1Yy0wLjEzMS0wLjEzMS0wLjEzMS0wLjM0MywwLTAuNDc0YzAuMTMxLTAuMTMxLDAuMzQ0LTAuMTMxLDAuNDc1LDBsMS4yOTUsMS4yOTVjMC4xMzEsMC4xMzEsMC4xMzEsMC4zNDMsMCwwLjQ3NEM0NC44MzgsMzUuNzQ2LDQ0Ljc1MiwzNS43NzksNDQuNjY2LDM1Ljc3OXoiLz48cGF0aCBmaWxsPSIjRkZGMjAwIiBkPSJNNTUuMDc2LDQ2LjE4OGMtMC4wODYsMC0wLjE3Mi0wLjAzMS0wLjIzOC0wLjA5OGwtMi4yNjItMi4yNjJjLTAuMTMxLTAuMTMxLTAuMTMxLTAuMzQ0LDAtMC40NzVzMC4zNDQtMC4xMzEsMC40NzUsMGwyLjI2MiwyLjI2MmMwLjEzMSwwLjEzMSwwLjEzMSwwLjM0NCwwLDAuNDc1QzU1LjI0OCw0Ni4xNTYsNTUuMTYyLDQ2LjE4OCw1NS4wNzYsNDYuMTg4eiIvPjxnPjxwYXRoIGZpbGw9IiNGRkYyMDAiIGQ9Ik00NC41MzMsMzguMzkzYy0wLjA0MywwLTAuMDg2LTAuMDA4LTAuMTI3LTAuMDI1bC0yLjk1NS0xLjIyM2MtMC4xNzItMC4wNzEtMC4yNTQtMC4yNjctMC4xODItMC40MzhjMC4wNy0wLjE3MSwwLjI2Ni0wLjI1MywwLjQzOC0wLjE4MWwyLjk1NSwxLjIyM2MwLjE3LDAuMDcsMC4yNTIsMC4yNjgsMC4xODIsMC40MzhDNDQuNzg5LDM4LjMxNCw0NC42NjYsMzguMzkzLDQ0LjUzMywzOC4zOTN6Ii8+PHBhdGggZmlsbD0iI0ZGRjIwMCIgZD0iTTU2Ljg2OSw0My41MDJjLTAuMDQzLDAtMC4wODYtMC4wMDgtMC4xMjctMC4wMjVsLTIuOTU1LTEuMjIzYy0wLjE3Mi0wLjA3LTAuMjU0LTAuMjY4LTAuMTgyLTAuNDM4YzAuMDctMC4xNzIsMC4yNjYtMC4yNTQsMC40MzgtMC4xODJsMi45NTUsMS4yMjNjMC4xNywwLjA3LDAuMjUyLDAuMjY4LDAuMTgyLDAuNDM4QzU3LjEyNSw0My40MjQsNTcuMDAyLDQzLjUwMiw1Ni44NjksNDMuNTAyeiIvPjwvZz48Zz48cGF0aCBmaWxsPSIjRkZGMjAwIiBkPSJNNDQuMTQ2LDQwLjMzNmgtMy4xOTdjLTAuMTg2LDAtMC4zMzYtMC4xNDgtMC4zMzYtMC4zMzRzMC4xNS0wLjMzNiwwLjMzNi0wLjMzNmgzLjE5N2MwLjE4NiwwLDAuMzM2LDAuMTUsMC4zMzYsMC4zMzZTNDQuMzMyLDQwLjMzNiw0NC4xNDYsNDAuMzM2eiIvPjxwYXRoIGZpbGw9IiNGRkYyMDAiIGQ9Ik01Ny41LDQwLjMzNmgtMy4xOTljLTAuMTg0LDAtMC4zMzQtMC4xNS0wLjMzNC0wLjMzNnMwLjE1LTAuMzM0LDAuMzM0LTAuMzM0SDU3LjVjMC4xODQsMCwwLjMzNCwwLjE0OCwwLjMzNCwwLjMzNFM1Ny42ODQsNDAuMzM2LDU3LjUsNDAuMzM2eiIvPjwvZz48Zz48cGF0aCBmaWxsPSIjRkZGMjAwIiBkPSJNNDEuNTc4LDQzLjUwNGMtMC4xMzEsMC0wLjI1Ni0wLjA3OC0wLjMwOS0wLjIwN2MtMC4wNzItMC4xNzIsMC4wMS0wLjM2NywwLjE4Mi0wLjQzOGwyLjk1NS0xLjIyNWMwLjE3LTAuMDcyLDAuMzY1LDAuMDEsMC40MzgsMC4xODJjMC4wNywwLjE3LTAuMDEyLDAuMzY1LTAuMTgyLDAuNDM4bC0yLjk1NSwxLjIyNUM0MS42NjQsNDMuNDk2LDQxLjYyMSw0My41MDQsNDEuNTc4LDQzLjUwNHoiLz48cGF0aCBmaWxsPSIjRkZGMjAwIiBkPSJNNTMuOTE0LDM4LjM5M2MtMC4xMzEsMC0wLjI1Ni0wLjA3OC0wLjMwOS0wLjIwN2MtMC4wNzItMC4xNywwLjAxLTAuMzY3LDAuMTgyLTAuNDM4bDIuOTU1LTEuMjIzYzAuMTctMC4wNzIsMC4zNjUsMC4wMSwwLjQzOCwwLjE4MWMwLjA3LDAuMTcxLTAuMDEyLDAuMzY3LTAuMTgyLDAuNDM4bC0yLjk1NSwxLjIyM0M1NCwzOC4zODUsNTMuOTU3LDM4LjM5Myw1My45MTQsMzguMzkzeiIvPjwvZz48Zz48cGF0aCBmaWxsPSIjRkZGMjAwIiBkPSJNNDMuMzczLDQ2LjE4OGMtMC4wODYsMC0wLjE3Mi0wLjAzMS0wLjIzOC0wLjA5OGMtMC4xMzEtMC4xMzEtMC4xMzEtMC4zNDQsMC0wLjQ3NWwyLjI2Mi0yLjI2MmMwLjEzMS0wLjEzMSwwLjM0NC0wLjEzMSwwLjQ3NSwwczAuMTMxLDAuMzQ0LDAsMC40NzVsLTIuMjYyLDIuMjYyQzQzLjU0NSw0Ni4xNTYsNDMuNDU5LDQ2LjE4OCw0My4zNzMsNDYuMTg4eiIvPjxwYXRoIGZpbGw9IiNGRkYyMDAiIGQ9Ik01Mi44MTQsMzYuNzQ2Yy0wLjA4NiwwLTAuMTcyLTAuMDMzLTAuMjM4LTAuMDk4Yy0wLjEzMS0wLjEzMS0wLjEzMS0wLjM0MywwLTAuNDc0bDIuMjYyLTIuMjYyYzAuMTMxLTAuMTMxLDAuMzQ0LTAuMTMxLDAuNDc1LDBzMC4xMzEsMC4zNDMsMCwwLjQ3NGwtMi4yNjIsMi4yNjJDNTIuOTg2LDM2LjcxMyw1Mi45LDM2Ljc0Niw1Mi44MTQsMzYuNzQ2eiIvPjwvZz48Zz48cGF0aCBmaWxsPSIjRkZGMjAwIiBkPSJNNDYuMDU3LDQ3Ljk4MmMtMC4wNDMsMC0wLjA4Ni0wLjAwOC0wLjEyNy0wLjAyNWMtMC4xNzItMC4wNzItMC4yNTQtMC4yNjgtMC4xODItMC40MzhsMS4yMjUtMi45NTVjMC4wNy0wLjE3MiwwLjI2OC0wLjI1NCwwLjQzOC0wLjE4MmMwLjE3LDAuMDcsMC4yNTIsMC4yNjYsMC4xODIsMC40MzhsLTEuMjI1LDIuOTU1QzQ2LjMxMyw0Ny45MDQsNDYuMTg4LDQ3Ljk4Miw0Ni4wNTcsNDcuOTgyeiIvPjxwYXRoIGZpbGw9IiNGRkYyMDAiIGQ9Ik01MS4xNjYsMzUuNjQ2Yy0wLjA0MywwLTAuMDg2LTAuMDA4LTAuMTI3LTAuMDI1Yy0wLjE3Mi0wLjA3MS0wLjI1NC0wLjI2Ny0wLjE4Mi0wLjQzOGwxLjIyNS0yLjk1NmMwLjA3LTAuMTcxLDAuMjY2LTAuMjUxLDAuNDM4LTAuMTgxYzAuMTcsMC4wNzEsMC4yNTIsMC4yNjcsMC4xODIsMC40MzhsLTEuMjI1LDIuOTU2QzUxLjQyMiwzNS41NjgsNTEuMjk3LDM1LjY0Niw1MS4xNjYsMzUuNjQ2eiIvPjwvZz48cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNDYuMzU5LDM4LjI2NGMtMC4xNSwwLTAuMjg1LTAuMTAyLTAuMzI0LTAuMjU0bC0wLjk1OS0zLjc3OGMtMC4wMzUtMC4xMzgsMC4wMjEtMC4yODQsMC4xNDEtMC4zNjJjMC4xMTctMC4wNzksMC4yNzUtMC4wNzMsMC4zODcsMC4wMTRsMy4xMjUsMi4zODVjMC4xNDYsMC4xMTIsMC4xNzYsMC4zMjIsMC4wNjMsMC40NjljLTAuMTEzLDAuMTQ3LTAuMzI0LDAuMTc0LTAuNDY5LDAuMDYzbC0yLjM1OS0xLjgwMWwwLjcyMywyLjg0N2MwLjA0NSwwLjE4LTAuMDY0LDAuMzYxLTAuMjQ0LDAuNDA4QzQ2LjQxNCwzOC4yNiw0Ni4zODcsMzguMjY0LDQ2LjM1OSwzOC4yNjR6Ii8+PC9nPjxnPjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0yMC4wOCwzMS44ODRoLTMuMTY0Yy0wLjE4NCwwLTAuMzM0LTAuMTUtMC4zMzQtMC4zMzV2LTMuMTYyYzAtMC4xODUsMC4xNS0wLjMzNSwwLjMzNC0wLjMzNWgzLjE2NGMwLjE4NiwwLDAuMzM0LDAuMTUsMC4zMzQsMC4zMzV2My4xNjJDMjAuNDE0LDMxLjczNCwyMC4yNjYsMzEuODg0LDIwLjA4LDMxLjg4NHogTTE3LjI1MiwzMS4yMTRoMi40OTJ2LTIuNDkyaC0yLjQ5MlYzMS4yMTR6Ii8+PHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTI1LjE2MiwzMS44ODRoLTMuMTZjLTAuMTg2LDAtMC4zMzYtMC4xNS0wLjMzNi0wLjMzNXYtMy4xNjJjMC0wLjE4NSwwLjE1LTAuMzM1LDAuMzM2LTAuMzM1aDMuMTZjMC4xODYsMCwwLjMzNiwwLjE1LDAuMzM2LDAuMzM1djMuMTYyQzI1LjQ5OCwzMS43MzQsMjUuMzQ4LDMxLjg4NCwyNS4xNjIsMzEuODg0eiBNMjIuMzM2LDMxLjIxNGgyLjQ5MnYtMi40OTJoLTIuNDkyVjMxLjIxNHoiLz48cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMzAuMjQ4LDMxLjg4NGgtMy4xNjJjLTAuMTg2LDAtMC4zMzYtMC4xNS0wLjMzNi0wLjMzNXYtMy4xNjJjMC0wLjE4NSwwLjE1LTAuMzM1LDAuMzM2LTAuMzM1aDMuMTYyYzAuMTg0LDAsMC4zMzQsMC4xNSwwLjMzNCwwLjMzNXYzLjE2MkMzMC41ODIsMzEuNzM0LDMwLjQzMiwzMS44ODQsMzAuMjQ4LDMxLjg4NHogTTI3LjQyLDMxLjIxNGgyLjQ5MnYtMi40OTJIMjcuNDJWMzEuMjE0eiIvPjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0yMC4wOCwzNi44NTNoLTMuMTY0Yy0wLjE4NCwwLTAuMzM0LTAuMTUtMC4zMzQtMC4zMzV2LTMuMTYyYzAtMC4xODUsMC4xNS0wLjMzNSwwLjMzNC0wLjMzNWgzLjE2NGMwLjE4NiwwLDAuMzM0LDAuMTUsMC4zMzQsMC4zMzV2My4xNjJDMjAuNDE0LDM2LjcwMywyMC4yNjYsMzYuODUzLDIwLjA4LDM2Ljg1M3ogTTE3LjI1MiwzNi4xODNoMi40OTJ2LTIuNDkyaC0yLjQ5MlYzNi4xODN6Ii8+PHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTI1LjE2MiwzNi44NTNoLTMuMTZjLTAuMTg2LDAtMC4zMzYtMC4xNS0wLjMzNi0wLjMzNXYtMy4xNjJjMC0wLjE4NSwwLjE1LTAuMzM1LDAuMzM2LTAuMzM1aDMuMTZjMC4xODYsMCwwLjMzNiwwLjE1LDAuMzM2LDAuMzM1djMuMTYyQzI1LjQ5OCwzNi43MDMsMjUuMzQ4LDM2Ljg1MywyNS4xNjIsMzYuODUzeiBNMjIuMzM2LDM2LjE4M2gyLjQ5MnYtMi40OTJoLTIuNDkyVjM2LjE4M3oiLz48cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMzAuMjQ4LDM2Ljg1M2gtMy4xNjJjLTAuMTg2LDAtMC4zMzYtMC4xNS0wLjMzNi0wLjMzNXYtMy4xNjJjMC0wLjE4NSwwLjE1LTAuMzM1LDAuMzM2LTAuMzM1aDMuMTYyYzAuMTg0LDAsMC4zMzQsMC4xNSwwLjMzNCwwLjMzNXYzLjE2MkMzMC41ODIsMzYuNzAzLDMwLjQzMiwzNi44NTMsMzAuMjQ4LDM2Ljg1M3ogTTI3LjQyLDM2LjE4M2gyLjQ5MnYtMi40OTJIMjcuNDJWMzYuMTgzeiIvPjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0yMC4wOCw0MS44MjJoLTMuMTY0Yy0wLjE4NCwwLTAuMzM0LTAuMTUtMC4zMzQtMC4zMzZ2LTMuMTYyYzAtMC4xODQsMC4xNS0wLjMzNCwwLjMzNC0wLjMzNGgzLjE2NGMwLjE4NiwwLDAuMzM0LDAuMTUsMC4zMzQsMC4zMzR2My4xNjJDMjAuNDE0LDQxLjY3MiwyMC4yNjYsNDEuODIyLDIwLjA4LDQxLjgyMnogTTE3LjI1Miw0MS4xNTJoMi40OTJWMzguNjZoLTIuNDkyVjQxLjE1MnoiLz48cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMjUuMTYyLDQxLjgyMmgtMy4xNmMtMC4xODYsMC0wLjMzNi0wLjE1LTAuMzM2LTAuMzM2di0zLjE2MmMwLTAuMTg0LDAuMTUtMC4zMzQsMC4zMzYtMC4zMzRoMy4xNmMwLjE4NiwwLDAuMzM2LDAuMTUsMC4zMzYsMC4zMzR2My4xNjJDMjUuNDk4LDQxLjY3MiwyNS4zNDgsNDEuODIyLDI1LjE2Miw0MS44MjJ6IE0yMi4zMzYsNDEuMTUyaDIuNDkyVjM4LjY2aC0yLjQ5MlY0MS4xNTJ6Ii8+PHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTI1LjE2Miw0Ni41NzhoLTMuMTZjLTAuMTg2LDAtMC4zMzYtMC4xNS0wLjMzNi0wLjMzNFY0My4wOGMwLTAuMTg2LDAuMTUtMC4zMzQsMC4zMzYtMC4zMzRoMy4xNmMwLjE4NiwwLDAuMzM2LDAuMTQ4LDAuMzM2LDAuMzM0djMuMTY0QzI1LjQ5OCw0Ni40MjgsMjUuMzQ4LDQ2LjU3OCwyNS4xNjIsNDYuNTc4eiBNMjIuMzM2LDQ1LjkwOGgyLjQ5MnYtMi40OTJoLTIuNDkyVjQ1LjkwOHoiLz48cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMzAuMjQ4LDQxLjgyMmgtMy4xNjJjLTAuMTg2LDAtMC4zMzYtMC4xNS0wLjMzNi0wLjMzNnYtMy4xNjJjMC0wLjE4NCwwLjE1LTAuMzM0LDAuMzM2LTAuMzM0aDMuMTYyYzAuMTg0LDAsMC4zMzQsMC4xNSwwLjMzNCwwLjMzNHYzLjE2MkMzMC41ODIsNDEuNjcyLDMwLjQzMiw0MS44MjIsMzAuMjQ4LDQxLjgyMnogTTI3LjQyLDQxLjE1MmgyLjQ5MlYzOC42NkgyNy40MlY0MS4xNTJ6Ii8+PC9nPjwvZz48L2c+PC9zdmc+);
    }
  }
</style>
