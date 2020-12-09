<template>
  <div>
    <q-btn size="small" class="bg-teal" label="idag" @click="idag()"/>
    <q-btn size="small" class="bg-teal" label="imorgon" @click="imorgon()"/>
    <div class="row q-pa-md q-gutter-md justify-center main">
      <div class="col-5 tableheader" v-for="parameter in param1" :key="parameter">
        <h7 class="q-pb-md tid" style="font-size: 18px; color: white">{{ parameter.tid }}</h7>
        <vue-table-dynamic :params="parameter" ref="table"></vue-table-dynamic>
      </div>
    </div>
  </div>
</template>

<script>
import VueTableDynamic from 'vue-table-dynamic'
export default {
  name: 'Demo',
  data () {
    return {
      myparams: {
      param1: [
        {
          data: [
            ['Bröd', 'Antal'],
            ['fralla', 3],
            ['knäckebröd', 5],
            ['baguette', 2],
            ['toast', 1]
          ],
          tid: '09:00',
          header: 'row',
          border: true
        },
        {
          data: [
            ['Bröd', 'Antal'],
            ['fralla', 4],
            ['knäckebröd', 9],
            ['baguette', 2],
            ['toast', 6]
          ],
          tid: '12:00',
          header: 'row',
          border: true
        },
        {
          data: [
            ['Bröd', 'Antal'],
            ['fralla', 2],
            ['knäckebröd', 5],
            ['baguette', 7],
            ['toast', 6]
          ],
          tid: '15:00',
          header: 'row',
          border: true
        },
        {
          data: [
            ['Bröd', 'Antal'],
            ['fralla', 1],
            ['knäckebröd', 2],
            ['baguette', 4],
            ['toast', 5]
          ],
          tid: '18:00',
          header: 'row',
          border: true
        }
      ],
      allparams2: [
        {
          data: [
            ['Bröd', 'Antal'],
            ['knäckebröd', 5],
            ['baguette', 2],
            ['toast', 9]
          ],
          tid: '09:00',
          header: 'row',
          border: true
        },
        {
          data: [
            ['Bröd', 'Antal'],
            ['fralla', 4],
            ['knäckebröd', 9],
            ['trä', 6]
          ],
          tid: '12:00',
          header: 'row',
          border: true
        },
        {
          data: [
            ['Bröd', 'Antal'],
            ['fralla', 1],
            ['breadöd', 5],
            ['baguette', 0],
            ['toast', 2]
          ],
          tid: '15:00',
          header: 'row',
          border: true
        },
        {
          data: [
            ['Bröd', 'Antal'],
            ['fralla', 4],
            ['croissant', 2],
            ['baguette', 8] 
          ],
          tid: '18:00',
          header: 'row',
          border: true
        }
      ]
      },
    }
  },
  components: { VueTableDynamic },
  methods: {
    idag () {
      // this.param1 = this.param1
      console.log(this.myparams)
    },
    imorgon () {
      this.param1 = this.allparams2
    }
  }
}
</script>

<style>
.main {
  background-color: rgb(44, 44, 49);
}
</style>
