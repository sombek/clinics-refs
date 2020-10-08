<template>
    <div class="container">
        <div>
            <h3 class="title is-1">
                مرجع العيادات النفسية
            </h3>

            <div style="padding: 10px">

                <b-table :data="dataTable">

                    <b-table-column field="city" label="المدينة" centered v-slot="props">
                        <span class="tag is-success">
                            {{props.row.city}}
                        </span>
                    </b-table-column>

                    <b-table-column field="average_price" label="متوسط سعر الجلسة" centered v-slot="props">
                        {{props.row.average_price}}
                    </b-table-column>

                    <b-table-column field="doctor_name" label="🩺 اسم الطبيب " centered v-slot="props">
                        {{props.row.doctor_name}}
                    </b-table-column>

                    <b-table-column field="clinic_name" label="اسم العيادة" centered v-slot="props">
                        {{props.row.clinic_name}}
                    </b-table-column>

                </b-table>

            </div>
        </div>
    </div>
</template>

<script>
    import request from 'request'
    import csv from 'csvtojson'


    export default {
        /*

        clinic_name
        doctor_name
        average_price
        city
        location_link
        notes

         */
        async asyncData() {
            const csvRow = await csv()
                .fromStream(request.get('https://docs.google.com/spreadsheets/d/e/2PACX-1vSdpFtefmBvKx9LBo1sW_uNfTU7diPOwC8cF50aGPwYXy4efxidmDNqN3sgVTd9PAFwB_PWH1pojsot/pub?output=csv'))
            return {dataTable: csvRow}
        },
        data() {
            return {
                dataTable: [],
            }
        }
    }
</script>

<style>
    .container {
        padding-top: 30px;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        text-align: center;
    }

    .title {

        display: block;
        font-weight: 300;
        font-size: 100px;
        color: #35495e;
        letter-spacing: 1px;
    }

    .subtitle {
        font-weight: 300;
        font-size: 42px;
        color: #526488;
        word-spacing: 5px;
        padding-bottom: 15px;
    }

    .links {
        padding-top: 15px;
    }

    * {
        font-family: -apple-system, system-ui, BlinkMacSystemFont !important;
    }

    td {
        flex-direction: row-reverse;
    }
</style>
