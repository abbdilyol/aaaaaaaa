<template>
  <div class="column q-pa-md main">
    <q-btn-dropdown class="self-center dropdown" color="teal" label="Tid">
    <div class="q-pa-md" v-for="tidd in tider" :key="tidd">
      <q-list>
        <q-item clickable v-close-popup @click="clicky(tidd)">
          <q-item-section>
            <q-item-label>{{ tidd }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
    </q-btn-dropdown>
    <div class="row q-pa-md q-gutter-md justify-center table">
      <div class="col-5 tableheader">
        <!-- <h7 class="q-pb-md tid" style="font-size: 18px; color: white">{{ allparams[tableIndex].tid }}</h7> -->
        <vue-table-dynamic :params="allparams[tableIndex]" ref="table"></vue-table-dynamic>
      </div>
    </div>
  </div>
</template>

<script>
import VueTableDynamic from 'vue-table-dynamic'
import { db } from '../boot/firebase'
import { date } from 'quasar'
export default {
  name: 'PageIndex',
  created () {
    this.currentDate = date.formatDate(Date.now(), 'YYYY-MM-DD')
    // this.$bind('delData', db.collection('BilData').doc(this.currentDate))
    this.$bind('allparams', db.collection('BilData').doc('datum-placeholder')).then(res => {
      console.log(res)
    })
  },
  data () {
    return {
      tider: ['9:00', '12:00', '15:00', '18:00'],
      allparams: null,
      tableIndex: 0
    }
  },
  components: { VueTableDynamic },
  methods: {
    clicky (time) {
      let index = this.tider.findIndex(x => x === time)
    //   console.log(index, time)
      this.tableIndex = index
    }
  }
}
</script>

<style>
.main {
  background-color: rgb(44, 44, 49);
}
.table {
    background-color: rgb(44, 44, 49);
    height: 100%;
}
.dropdown {
    background-color: rgb(44, 44, 49);
    width: 10%;
}
</style>
