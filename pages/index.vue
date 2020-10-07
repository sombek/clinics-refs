<template>
    <div class="container">
        <div>
            <h1 class="title is-1">
                مرجع العيادات
            </h1>

            <div style="padding: 10px">

                <b-table :data="data">


                    <b-table-column field="city" label="المدينة" centered v-slot="props">
                        <span class="tag is-success">
                            {{props.row.city}}
                        </span>
                    </b-table-column>

                    <b-table-column field="first_name" label="🩺 اسم الطبيب " centered v-slot="props">
                        {{props.row.first_name}}
                    </b-table-column>

                    <b-table-column field="first_name" label="اسم العيادة" centered v-slot="props">
                        {{props.row.first_name}}
                    </b-table-column>

                </b-table>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                data: [
                    {
                        'id': 1,
                        'first_name': 'هلاا',
                        'city': 'اثنين',
                        'date': '2016-10-15 13:43:27',
                        'gender': 'Male'
                    },
                    {
                        'id': 2,
                        'first_name': 'ثلاثه',
                        'city': 'اربعه',
                        'date': '2016-12-15 06:00:53',
                        'gender': 'Male'
                    },
                    {
                        'id': 3,
                        'first_name': 'عشرين',
                        'city': 'خمسين',
                        'date': '2016-04-26 06:26:28',
                        'gender': 'Female'
                    },
                    {
                        'id': 4,
                        'first_name': 'Clarence',
                        'city': 'Flores',
                        'date': '2016-04-10 10:28:46',
                        'gender': 'Male'
                    },
                    {
                        'id': 5,
                        'first_name': 'Anne',
                        'city': 'Lee',
                        'date': '2016-12-06 14:38:38',
                        'gender': 'Female'
                    }
                ],
                columns: [
                    {
                        field: 'date',
                        label: 'Date',
                        centered: true
                    },
                    {
                        field: 'gender',
                        label: 'اسم الدكتور (إن وجد)',
                        centered: true
                    },
                    {
                        field: 'city',
                        label: 'المدينة',
                        centered: true
                    },
                    {
                        field: 'first_name',
                        label: 'اسم العيادة',
                        centered: true
                    }
                ]
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
</style>
