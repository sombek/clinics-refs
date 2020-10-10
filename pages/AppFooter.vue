<template>
    <footer style="text-align: center; margin-top: 20px;padding: 0 16px;">
        <div class="" style="min-height: unset">
            <div class="row row-grid align-items-center my-md">
                <h3 class="text-primary mb-2" style="font-weight: 400;">
                    شكرًا لدعمكم لرفع الوعي بالصحة النفسية
                </h3>

                <h3 class="text-primary mb-2" style="font-weight: 400;">
                    نرحب بجميع مساعداتكم لتحسين الموقع
                </h3>

                <h4 class="mb-0 font-weight-light">
                    لإضافة تجارب مختلفة او عيادات اخرى يرجى مشاركتها على حسابي في تويتر 📨
                </h4>
                <br>
                <b-button tag="a"
                          size="is-small"
                          type="is-info is-light"
                          icon-left="twitter"
                          href="https://twitter.com/abdullahjsx"
                          @click="trackUsage('website_interactions','author_twitter_click','footer_button','clicked')"
                          target="_blank">
                    @abdullahjsx
                </b-button>
            </div>

            <hr>

            <div class="row align-items-center justify-content-md-between">
                <div style="margin-bottom: 10px">
                    <div class="copyright">
                        نسخة رقم ١.٠
                        <br>
                        &copy; {{year}}
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
    export default {
        name: 'appFooter',
        data() {
            return {
                year: new Date().getFullYear()
            }
        },
        methods: {
            trackUsage(category, action, label, value) {
                this.$ga.event(category, action, label, value)
            }
        },
    }
</script>
<style>
</style>
