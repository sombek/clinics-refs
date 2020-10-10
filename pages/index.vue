<template>
    <div>
        <div class="container">
            <div>
                <div style="margin-bottom: 30px">
                    <h6 class="websiteTitle">clinics-ref.com</h6>
                    <button type="button" class="btn btn-primary btn-sm">
                        <i class="mdi mdi-twitter"></i>
                        المشاركة عبر
                    </button>
                </div>

                <img :src="shownImage" width="200px" alt="">

                <h3 class="title">
                    مرجع العيادات النفسية
                </h3>
                <div class="subtitle">
                    <p style="direction: rtl;">
                        الصحة النفسية تؤثر على طريقة تفكيرنا وشعورنا وتصرفنا
                        <br>
                        و تساعد في تحديد طريقة تعاملنا مع التوتر، والتواصل مع الآخرين، واتخاذ القرارات.
                        <br>
                        الصحة النفسية مهمة في كل مرحلة من مراحل الحياة، من الطفولة والمراهقة حتى البلوغ.
                        <br>
                    </p>
                </div>

                <a href="https://twitter.com/hashtag/%D8%A7%D9%84%D9%8A%D9%88%D9%85_%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%D9%8A_%D9%84%D9%84%D8%B5%D8%AD%D8%A9_%D8%A7%D9%84%D9%86%D9%81%D8%B3%D9%8A%D8%A9_2020"
                   target="_blank">
                    #اليوم_العالمي_للصحة_النفسية_2020
                </a>
                <br>

                <div style="padding: 10px">

                    <div>
                        <h4 style="direction: rtl">
                            يرجى إختيار المدينة:
                        </h4>


                        <div style="display: flex;justify-content: center;    flex-flow: wrap-reverse;">
                            <div class="field">
                                <b-radio v-model="city"
                                         native-value="المدينة">
                                    المدينة
                                </b-radio>
                            </div>
                            <div class="field">
                                <b-radio v-model="city"
                                         native-value="جدة">
                                    جدة
                                </b-radio>
                            </div>
                            <br>
                            <div class="field">
                                <b-radio v-model="city"
                                         native-value="الرياض">
                                    الرياض
                                </b-radio>
                            </div>
                            <div class="field">
                                <b-radio v-model="city"
                                         native-value="الدمام">
                                    الدمام
                                </b-radio>
                            </div>
                            <div class="field">
                                <b-radio v-model="city"
                                         native-value="default">
                                    الكل
                                </b-radio>
                            </div>
                        </div>
                    </div>

                    <b-table :data="dataTable"
                             bordered detailed narrowed>

                        <b-table-column field="location_link" label="الموقع الالكتروني" centered v-slot="props">
                            <b-button tag="a"
                                      size="is-small"
                                      type="is-warning is-light"
                                      icon-left="web"
                                      :disabled="!!!props.row.website"
                                      :href="props.row.website"
                                      target="_blank">
                            </b-button>

                        </b-table-column>

                        <b-table-column field="location_link" label="لوكيشن المركز" centered v-slot="props">
                            <b-button tag="a"
                                      size="is-small"
                                      type="is-primary is-light"
                                      icon-left="map"
                                      :href="props.row.location_link"
                                      :disabled="!!!props.row.location_link"
                                      target="_blank">
                            </b-button>

                        </b-table-column>

                        <b-table-column label="حساب تويتر" centered v-slot="props">
                            <b-button tag="a"
                                      size="is-small"
                                      type="is-info is-light"
                                      icon-left="twitter"
                                      :disabled="!!!props.row.social_media"
                                      :href="props.row.social_media"
                                      target="_blank">
                            </b-button>
                        </b-table-column>

                        <b-table-column field="average_price" label="متوسط سعر الجلسة" centered v-slot="props">
                            {{props.row.average_price}}
                        </b-table-column>

                        <b-table-column field="city" label="المدينة" centered v-slot="props">
                        <span class="tag">
                            {{props.row.city}}
                        </span>
                        </b-table-column>

                        <b-table-column label="اطباء مقترحين" centered v-slot="props">
                            {{props.row.doctor_name}}
                        </b-table-column>

                        <b-table-column field="clinic_name" label="المركز" centered v-slot="props">
                            {{props.row.clinic_name}}
                        </b-table-column>


                        <template slot="detail" slot-scope="props">
                            <div class="media-content">
                                <div class="content">
                                    <img
                                        :src="props.row.image_url?props.row.image_url:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F396598310917406183%2F&psig=AOvVaw1rTVevLBTQ5bUiaZhHEy7d&ust=1602405243059000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMCn4-zOqewCFQAAAAAdAAAAABAg'"
                                        alt="" width="250">
                                </div>
                            </div>

                        </template>

                    </b-table>

                </div>
            </div>

        </div>
        <appFooter/>
    </div>
</template>

<script>
    import request from 'request'
    import csv from 'csvtojson'
    import appFooter from './AppFooter'

    export default {
        components: {appFooter},
        created() {
            let images = [
                'https://i.pinimg.com/originals/51/85/f9/5185f95f8305671494ca40154157b2ab.gif',
                'https://media.giphy.com/media/fwDYfOHIvFClrpPh63/giphy.gif',
            ]
            this.shownImage = images[Math.floor(Math.random() * images.length)];
        },
        async asyncData() {
            const csvRow = await csv()
                .fromStream(request.get('https://docs.google.com/spreadsheets/d/e/2PACX-1vSdpFtefmBvKx9LBo1sW_uNfTU7diPOwC8cF50aGPwYXy4efxidmDNqN3sgVTd9PAFwB_PWH1pojsot/pub?output=csv'))
            return {
                dataTable: csvRow,
                rawData: csvRow
            }
        },
        watch: {
            city: function(val, oldVal) {
                if (val === 'default')
                    return this.dataTable = this.rawData
                this.dataTable = this.rawData.filter(c => c.city.includes(val))
            }
        },
        data() {
            return {
                shownImage: '',
                city: 'default',
                dataTable: [],
            }
        }
    }
</script>

<style>
    .websiteTitle {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 10pt;
        margin-bottom: 5px;
    }

    .container {
        padding: 16px;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        text-align: center;
    }

    .title {
        font-size: 30px;
        display: block;
        font-weight: 300;
        color: #35495e;
        letter-spacing: 1px;
    }

    .subtitle {
        font-size: 13px;
        font-weight: 300;
        color: #526488;
        word-spacing: 5px;
        text-align: center;
    }


    * {
        font-family: -apple-system, system-ui, BlinkMacSystemFont !important;
    }

    td {
        flex-direction: row-reverse;
    }

    @media screen and (max-width: 768px) {
        .has-mobile-cards table tr {
            display: flex !important;
            flex-direction: column-reverse;
        }
    }

    .b-radio.radio .control-label {
        padding-right: calc(0.75em - 1px);
    }

    .b-radio.radio {
        display: flex;
        flex-direction: row-reverse;
    }

    @media screen and (max-width: 768px) {
        .b-table .table-wrapper.has-mobile-cards tr:not(.detail):not(.is-empty):not(.table-footer) td:before {
            text-align: right;
        }
    }


    .btn-primary {
        box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08)
    }

    .btn-primary, .btn-primary:hover {
        color: #fff;
        background-color: #5e72e4;
        border-color: #5e72e4
    }

    .btn-primary.focus, .btn-primary:focus {
        box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08), 0 0 0 0 rgba(94, 114, 228, .5)
    }

    .btn-primary.disabled, .btn-primary:disabled {
        color: #fff;
        background-color: #5e72e4;
        border-color: #5e72e4
    }

    .btn-primary:not(:disabled):not(.disabled).active, .btn-primary:not(:disabled):not(.disabled):active, .show > .btn-primary.dropdown-toggle {
        color: #fff;
        background-color: #324cdd;
        border-color: #5e72e4
    }

    .btn-primary:not(:disabled):not(.disabled).active:focus, .btn-primary:not(:disabled):not(.disabled):active:focus, .show > .btn-primary.dropdown-toggle:focus {
        box-shadow: none, 0 0 0 0 rgba(94, 114, 228, .5)
    }


    .btn {
        display: inline-block;
        font-weight: 600;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        user-select: none;
        border: 1px solid transparent;
        line-height: 1.5;
        border-radius: .25rem;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out
    }
    .btn-sm {
        padding: .25rem .5rem;
        font-size: 8pt;
        line-height: 1.5;
        border-radius: .25rem
    }

    .btn {
        position: relative;
        text-transform: uppercase;
        transition: all .15s ease;
        will-change: transform;
        letter-spacing: .025em;
        cursor: pointer;
    }

    .btn:hover {
        box-shadow: 0 7px 14px rgba(50,50,93,.1),0 3px 6px rgba(0,0,0,.08);
        transform: translateY(-1px)
    }



</style>
